jQuery(document).ready(function($) {

	/**
	 * Collapse a row or rows
	 */
	function acfRepeaterCollapseRow( $rows ) {
		$rows.addClass('collapsed-row')
			.data('acf-row-collapsed', true)
			.attr('aria-expanded', false);
	}
	/**
	 * Expand a row or rows
	 */
	function acfRepeaterExpandRow( $rows ) {
		$rows.removeClass('collapsed-row')
			.data('acf-row-collapsed', false)
			.attr('aria-expanded', true);
	}

	/**
	 * toggles set of repeater rows or flexible fields
	 */
	function acfRepeaterToggleAll() {
		$rowsetButton = $(this);
		$rowsetWrapper = $(this).parent();

		// select either nested or unnested repeater rows, not both
		if( true === $rowsetWrapper.data('acf-repeater-nested') ) {
			$rows = $('.row:data(acf-repeater-nested),.layout', $rowsetWrapper);
		} else {
			$rows = $('.row,.layout', $rowsetWrapper).not(':data(acf-repeater-nested)');
		}
	    
	    if( false === $rowsetWrapper.data('acf-rows-collapsed') ) {
	    	acfRepeaterCollapseRow( $rows );
	    	$rowsetWrapper.addClass('collapsed-repeater').data('acf-rows-collapsed', true);
	    	$rowsetButton.text('Expand All Rows');
	    } else {
	    	acfRepeaterExpandRow( $rows );
	    	$rowsetWrapper.removeClass('collapsed-repeater').data('acf-rows-collapsed', false);
	    	$rowsetButton.text('Collapse All Rows').attr('aria-expanded', true);
	    }

	    // prevent bubbling up to parent repeater rowset
	    event.stopPropagation();
	}

	/**
	 * toggles single repeater row or flexible field
	 */
	function acfRepeaterToggleSingle() {
		$rowButton = $(this);
		$row = $rowButton.closest('.row');
		$rowButtonText = $('.screen-reader-text', $rowButton);
	    
	    if( false === $row.data('acf-row-collapsed') ) {
	    	acfRepeaterCollapseRow( $row );
	    	$rowButtonText.text('Expand Row');
	    } else {
	    	acfRepeaterExpandRow( $row );
	    	$rowButtonText.text('Collapse Row');
	    }

	    // prevent bubbling up to parent row button
	    event.stopPropagation();
	}

	// HTML to put above each repeater instance
	$collapseAllButton = '<button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-all">Collapse All Rows</button>';
	$collapseSingleButton = '<td class="repeater-button-cell"><button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-single"><span class="screen-reader-text">Collapse Row</span></button></td>';

	// find each repeater & flexible instance, add the button if the field uses the row layout
	$('.field_type-repeater, .field_type-flexible_content').each( function() {
		$repeater = $(this);

		// only use this on row layout
		if( $( '.acf-input-table', $repeater ).hasClass('row_layout') ) {
			$repeater.data('acf-rows-collapsed', false).attr('aria-expanded', false);

			// first: nested, second: parent
			if( $repeater.is( 'tr' ) ) {
				$repeater.children( 'td:last-child' ).children( '.inner' ).prepend( $collapseAllButton ).data('acf-rows-collapsed', false).data('acf-repeater-nested', true);
				$('.row', $repeater ).data('acf-row-collapsed', false).data('acf-repeater-nested', true).attr('aria-expanded', true);
			} else {
				$repeater.prepend( $collapseAllButton ).data('acf-rows-collapsed', false);
				$('.row', $repeater ).data('acf-row-collapsed', false).attr('aria-expanded', true);
			}
		}
	});

	// append single repeater collapse to each row of repeater field
	// TODO: Support Individual Flexible Fields
	$('.field_type-repeater .row_layout .row').each( function() {
		$(this).prepend( $collapseSingleButton ).data('acf-row-collapsed', false);
	});

	// Bind click events to the toggle functions
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