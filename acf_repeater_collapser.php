<?php
/**
 * Plugin Name: Advanced Custom Fields Repeater Collapser
 * Plugin URI: https://github.com/mrwweb/ACF-Repeater-Collapser
 * Description: Provides a way to collapse and expand repeater field instances in order to enable better sorting.
 * Version: 1.4.1
 * Author: Mark Root-Wiley
 * Author URI: http://mrwweb.com
 */

define( 'ACF_REPEATER_COLLAPSER_VERSION', '1.4.1' );

/* Load the javascript and CSS files on the ACF admin pages */
// 11 helps take precedence over core styles
add_action( 'acf/input/admin_enqueue_scripts', 'acf_repeater_collapser_assets', 11 );
function acf_repeater_collapser_assets() {
	$acf_version = acf()->settings['version'];
	if( version_compare( $acf_version, '4.0', '>=' ) && version_compare( $acf_version, '5.0', '<' ) ) {
		// version 4.X
		wp_enqueue_script(
			'acf_repeater_collapser_admin_js',
			esc_url( plugins_url( 'js/acf4_repeater_collapser_admin.js', __FILE__ ) ),
			array( 'jquery' ),
			ACF_REPEATER_COLLAPSER_VERSION
		);
		wp_enqueue_style(
			'acf_repeater_collapser_admin_css',
			esc_url( plugins_url( 'css/acf4_repeater_collapser_admin.css', __FILE__ ) ),
			false,
			ACF_REPEATER_COLLAPSER_VERSION
		);
	} elseif( version_compare( $acf_version, '5.0', '>=' ) ) {
		// version 5.X
		wp_enqueue_script(
			'acf_repeater_collapser_admin_js',
			esc_url( plugins_url( 'js/acf5_repeater_collapser_admin.js', __FILE__ ) ),
			array( 'jquery' ),
			ACF_REPEATER_COLLAPSER_VERSION
		);
		wp_enqueue_style(
			'acf_repeater_collapser_admin_css',
			esc_url( plugins_url( 'css/acf5_repeater_collapser_admin.css', __FILE__ ) ),
			false,
			ACF_REPEATER_COLLAPSER_VERSION
		);
	}
}