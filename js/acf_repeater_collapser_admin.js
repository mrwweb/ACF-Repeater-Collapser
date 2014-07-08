jQuery(document).ready(function($) {

	// toggle the class that collapses the repeater
	// toggle appropriate button text
	function acfRepeaterToggleAll() {
		$rowsetButton = $(this);
		$rowsetWrapper = $(this).parents('.field');
		$row = $('.row', $rowsetWrapper);
	    
	    // Change Row States & Add Button Text
	    // Nice Button Text
	    if( false === $rowsetWrapper.data('acf-rows-collapsed') ) {
	    	$row.addClass('collapsed-row').data('acf-row-collapsed',true);
	    	$rowsetWrapper.addClass('collapsed-repeater').data('acf-rows-collapsed',true);
	    	$rowsetButton.text('Expand All Rows');
	    } else {
	    	$row.removeClass('collapsed-row').data('acf-row-collapsed',false);
	    	$rowsetWrapper.removeClass('collapsed-repeater').data('acf-rows-collapsed',false);
	    	$rowsetButton.text('Collapse All Rows');
	    }
	}

	function acfRepeaterToggleSingle() {
		$rowButton = $(this);
		$row = $rowButton.parents('.row');
		$rowButtonText = $('.screen-reader-text', $rowButton);
	    
	    // Nice Button Text
	    if( false === $row.data('acf-row-collapsed') ) {
	    	$row.addClass('collapsed-row').data('acf-row-collapsed',true);
	    	$rowButtonText.text('Expand Row')
	    } else {
	    	$row.removeClass('collapsed-row').data('acf-row-collapsed',false);
	    	$rowButtonText.text('Collapse Row')
	    }
	}

	// HTML to put above each repeater instance
	$collapseAllButton = '<button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-all">Collapse All Rows</button>';
	$collapseSingleButton = '<td class="repeater-button-cell"><button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-single"><span class="screen-reader-text">Collapse Row</span></button></td>';

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater, .field_type-flexible_content').each( function() {
		$repeater = $(this);
		if( $( '.acf-input-table', $repeater ).hasClass('row_layout') ) {
			$repeater.data('acf-rows-collapsed', false);
			if( $repeater.is( 'tr' ) ) {
				$repeater.children( 'td:last-child' ).children( '.inner' ).prepend( $collapseAllButton );
				$('.row', $repeater ).data('acf-row-collapsed',false);
			} else {
				$repeater.prepend( $collapseAllButton );
				$('.row', $repeater ).data('acf-row-collapsed',false);
			}
		}
	});

	// append single repeater collapse to each row of repeater field
	$('.field_type-repeater .row_layout .row').each( function() {
		$(this).prepend( $collapseSingleButton ).data('acf-row-collapsed',false);
	});

	// bind the click event to the toggle functions
	// delegated to higher DOM element to handle dynamically added repeaters
	// "div" makes sure event is only bound once
	$( 'div.field_type-repeater, div.field_type-flexible_content' ).on(
		'click',
		'.field-repeater-toggle-all',
		acfRepeaterToggleAll
	);
	$( '.field_type-repeater .row_layout .row' ).on(
		'click',
		'.field-repeater-toggle-single',
		acfRepeaterToggleSingle
	);

});
