jQuery(document).ready(function($) {

	// toggle the class that collapses the repeater
	// toggle appropriate button text
	function acfRepeaterCollapseAll( event ) {
		$rowsetButton = $(this);
		$rowsetWrapper = $(this).parent();

	    // Toggle Fields
	    $rowsetWrapper.toggleClass('collapsed-repeater');
	    
	    // Nice Button Text
	    if( $rowsetWrapper.hasClass('collapsed-repeater') ) {
	    	$rowsetButton.text('Expand All Rows');
	    } else {
	    	$rowsetButton.text('Collapse All Rows');
	    }
	}

	function acfRepeaterCollapseSingle( event ) {
		$rowButton = $(this);
		$row = $rowButton.parent().parent();

	    // Toggle Fields
	    $row.toggleClass('collapsed-row');
	    
	    // Nice Button Text
	    if( $row.hasClass('collapsed-row') ) {
	    	$('.screen-reader-text', $rowButton).text('Expand Row');
	    } else {
	    	$('.screen-reader-text', $rowButton).text('Collapse Row');
	    }
	}

	// HTML to put above each repeater instance
	$collapseAllButton = '<button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-all">Collapse All Rows</button>';
	$collapseSingleButton = '<td class="repeater-button-cell"><button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-single"><span class="screen-reader-text">Collapse Row</span></button></td>';

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater, .field_type-flexible_content').each( function() {
		$repeater = $(this);
		if( $( '.acf-input-table', $repeater ).hasClass('row_layout') ) {
			if( $repeater.is( 'tr' ) ) {
				$repeater.children( 'td:last-child' ).children( '.inner' ).prepend( $collapseAllButton );
			} else {
				$repeater.prepend( $collapseAllButton );
			}
		}
	});

	// append single repeater collapse to each row of repeater field
	$('.field_type-repeater .row_layout .row').each( function() {
		$(this).prepend( $collapseSingleButton );
	});

	// bind the click event to the toggle functions
	// delegated to higher DOM element to handle dynamically added repeaters
	// "div" makes sure event is only bound once
	$( 'div.field_type-repeater, div.field_type-flexible_content' ).on(
		'click',
		'.field-repeater-toggle-all',
		acfRepeaterCollapseAll
	);
	$( '.field_type-repeater .row_layout .row' ).on(
		'click',
		'.field-repeater-toggle-single',
		acfRepeaterCollapseSingle
	);

});
