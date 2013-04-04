<?php
/**
 * Plugin Name: ACF Repeater Sorter
 * Description: Provides a way to collapse and expand repeater field instances in order to enable better sorting.
 * Version 0.2
 */

add_action( 'acf_print_scripts-input', 'acf_repeater_sorter_scripts' );
add_action( 'acf_print_styles-input', 'acf_repeater_sorter_styles' ); 

function acf_repeater_sorter_scripts() {
	wp_enqueue_script(
		'acf_repeater_sorter_admin_js',
		esc_url( plugins_url( 'js/acf_repeater_sorter_admin.js', __FILE__ ) ),
		array( 'jquery' )
	);
}

function acf_repeater_sorter_styles() {
	wp_enqueue_style(
		'acf_repeater_sorter_admin_css',
		esc_url( plugins_url( 'css/acf_repeater_sorter_admin.css', __FILE__ ) )
	);
}