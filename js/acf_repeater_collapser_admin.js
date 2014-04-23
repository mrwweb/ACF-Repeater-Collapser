jQuery(document).ready(function($) {

	// toggle the class that collapses the repeater
	// toggle appropriate button text
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

	// HTML to put above each repeater instance
	$collapseButton = '<input class="button field-repeater-toggle" type="button" value="Collapse Fields" />';

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater, .field_type-flexible_content').each( function() {
		$repeater = $(this);
		if( $( '.acf-input-table', $repeater ).hasClass('row_layout') ) {
			if( $repeater.is( 'tr' ) ) {
				$repeater.children( 'td:last-child' ).children( '.inner' ).prepend( $collapseButton );
			} else {
				$repeater.prepend( $collapseButton );
			}
		}
	});

	// bind the click event to the toggle function
	$( '.field-repeater-toggle' ).on(
		'click',
		acf_repeater_toggle
	)

});
