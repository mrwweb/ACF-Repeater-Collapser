jQuery(document).ready(function($) {

	function acf_repeater_toggle( event ) {
	    // Toggle Fields
	    $(this).parent().toggleClass('collapsed-repeater');
	    
	    // Nice Button Text
	    if( $(this).attr('value') == 'Collapse Fields' ) {
	    	$(this).attr('value', 'Expand Fields');
	    } else {
	    	$(this).attr('value', 'Collapse Fields');
	    }
	}

	$collapseButton = '<input class="button field-repeater-toggle" type="button" value="Collapse Fields" />';

	$('.field_type-repeater').each( function() {

		if( $( '.acf-input-table', $(this) ).hasClass('row_layout') ) {
			$(this).prepend( $collapseButton );
		}

	});

	$( '.field-repeater-toggle' ).on(
		'click',
		acf_repeater_toggle
	)

});