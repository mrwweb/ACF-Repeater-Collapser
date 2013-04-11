<?php
/**
 * Plugin Name: Advanced Custom Fields Repeater Collapser
 * Plugin URI: https://github.com/mrwweb/ACF-Repeater-Collapser
 * Description: Provides a way to collapse and expand repeater field instances in order to enable better sorting.
 * Version: 1.1.0
 * Author: Mark Root-Wiley
 * Author URI: http://mrwweb.com
 */

/* Load the javascript and CSS files on the ACF admin pages */
add_action( 'acf/input/admin_enqueue_scripts', 'acf_repeater_collapser_assets' );
function acf_repeater_collapser_assets() {
	wp_enqueue_script(
		'acf_repeater_collapser_admin_js',
		esc_url( plugins_url( 'js/acf_repeater_collapser_admin.js', __FILE__ ) ),
		array( 'jquery' )
	);
	wp_enqueue_style(
		'acf_repeater_collapser_admin_css',
		esc_url( plugins_url( 'css/acf_repeater_collapser_admin.css', __FILE__ ) )
	);
}