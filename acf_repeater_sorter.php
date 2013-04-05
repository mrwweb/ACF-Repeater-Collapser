<?php
/**
 * Plugin Name: ACF Repeater Sorter
 * Description: Provides a way to collapse and expand repeater field instances in order to enable better sorting.
 * Version 0.2
 */

/* Load the javascript and CSS files on the ACF admin pages */
add_action( 'acf/input/admin_enqueue_scripts', 'acf_repeater_sorter_assets' );
function acf_repeater_sorter_assets() {
	wp_enqueue_script(
		'acf_repeater_sorter_admin_js',
		esc_url( plugins_url( 'js/acf_repeater_sorter_admin.js', __FILE__ ) ),
		array( 'jquery' )
	);
	wp_enqueue_style(
		'acf_repeater_sorter_admin_css',
		esc_url( plugins_url( 'css/acf_repeater_sorter_admin.css', __FILE__ ) )
	);
}