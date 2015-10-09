<?php
/**
 * Plugin Name: Advanced Custom Fields Repeater Collapser
 * Plugin URI:  https://github.com/mrwweb/ACF-Repeater-Collapser
 * Description: Provides a way to collapse and expand repeater field instances in order to enable better sorting.
 * Version:     1.4.3
 * Author:      Mark Root-Wiley
 * Author URI:  http://mrwweb.com
 * Text Domain: advanced-custom-field-repeater-collapser
 */

define( 'ACF_REPEATER_COLLAPSER_VERSION', '1.4.3' );

/**
 * load text domain
 */
add_action( 'plugins_loaded', 'acf_repeater_collapser_textdomain' );
function acf_repeater_collapser_textdomain() {
	load_plugin_textdomain( 'advanced-custom-field-repeater-collapser' );
}

/* Load the javascript and CSS files on the ACF admin pages */
// 11 helps take precedence over core styles
add_action( 'acf/input/admin_enqueue_scripts', 'acf_repeater_collapser_assets', 11 );
function acf_repeater_collapser_assets() {
	if( ! class_exists( 'acf' ) ) {
		return;
	}

	$acf_version = acf()->settings['version'];
	if ( version_compare( $acf_version, '4.0', '<' ) ) {
		return;
	}

	$uri     = plugin_dir_url( __FILE__ );
	$version = ACF_REPEATER_COLLAPSER_VERSION;
	$prefix  = version_compare( $acf_version, '5.0', '>=' ) ? 'acf5' : 'acf4';

	wp_enqueue_script(
		'acf_repeater_collapser_admin_js',
		esc_url( "{$uri}js/{$prefix}_repeater_collapser_admin.js" ),
		array( 'jquery' ),
		$version
	);
	wp_localize_script( 'acf_repeater_collapser_admin_js', 'acfrcL10n', array(
		'collapseRows' => esc_html__( 'Collapse All Rows', 'advanced-custom-field-repeater-collapser' ),
		'collapseRow' => esc_html__( 'Collapse Row', 'advanced-custom-field-repeater-collapser' ),
		'expandRows' => esc_html__( 'Expand All Rows', 'advanced-custom-field-repeater-collapser' ),
		'expandRow' => esc_html__( 'Expand Row', 'advanced-custom-field-repeater-collapser' ),
	) );

	wp_enqueue_style(
		'acf_repeater_collapser_admin_css',
		esc_url( "{$uri}css/{$prefix}_repeater_collapser_admin.css" ),
		false,
		$version
	);
}

add_action( 'plugins_loaded', 'acf_repeater_collapser_acf5_compat' );
function acf_repeater_collapser_acf5_compat() {
	if( ! class_exists( 'acf' ) ) {
		return;
	}
	
	$acf_version = acf()->settings['version'];
	if( version_compare( $acf_version, '5.0', '>=' ) ) {
		add_filter( 'acf/compatibility/field_wrapper_class', '__return_true' );
	}
}