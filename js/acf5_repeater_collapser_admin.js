jQuery(document).ready(function($) {

	/**
	 * set up the buttons on the entire form
	 */
	function acfRepeaterCollapserInit() {
		// HTML to put above each repeater instance
		$collapseAllButton = '<button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-all">Collapse All Rows</button>';
		$collapseSingleButtonTable = '<td class="repeater-button-cell"><div class="repeater-button-cell-div"><button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-single"><span class="screen-reader-text">Collapse Row</span></button></div></td>';
		$collapseSingleButton = '<button type="button" role="button" class="button field-repeater-toggle field-repeater-toggle-single"><span class="screen-reader-text">Collapse Row</span></button>';

		// find each repeater & flexible instance, add the button if the field uses the row layout
		$('.field_type-repeater, .field_type-flexible_content, .acf-field-repeater, .acf-field-flexible-content').each( function() {
			$repeater = $(this);

			// only use this on row layout
			if( $( '.acf-input-table', $repeater ).hasClass('row-layout') ) {
				$repeater.find('.layout').addClass('row-layout');
				$repeater.data('acf-rowset-collapsed', false).attr('aria-expanded', false);

				// first: nested, second: parent
				if( $repeater.is( 'tr' ) ) {
					$( '.acf-repeater', $repeater ).first().prepend( $collapseAllButton );
					$repeater
						.data('acf-rowset-collapsed', false)
						.data('acf-repeater-nested', true);
					$('.acf-row,.acf-row.clone', $repeater ).data('acf-repeater-nested', true);
				} else {
					$repeater.prepend( $collapseAllButton )
						.data('acf-rowset-collapsed', false);
				}
			}
		});

		// iterator for adding IDs/aria-controls attributes to repeater buttons
		i = 1;
		// append single repeater collapse to each row of repeater field
		$('.field_type-repeater .row-layout > tbody > .acf-row, .field_type-repeater > tbody > .row-layout .acf-row.clone, .acf-field-repeater .row-layout > tbody > .acf-row, .acf-field-repeater > tbody > .row-layout .acf-row.clone').each( function() {
			id = 'acf-repeater-' + i;

			$(this).prepend( $collapseSingleButtonTable )
				.data('acf-row-collapsed', false)
				.attr('aria-expanded', true)
				.attr('id','acf-repeater-' + i)
				.attr('aria-live','off');
			$('.field-repeater-toggle-single', $(this)).first()
				.attr('aria-controls',id);

			i++;
		});

		// append single repeater collapse to flex fields
		$('.field_type-flexible_content .layout, .acf-field-flexible-content .layout').each( function() {
			if( $('.acf-input-table', $(this)).hasClass('row-layout') ) {
				id = 'acf-repeater-' + i;
				i++;
				
				$(this).prepend( $collapseSingleButton )
					.data('acf-row-collapsed', false)
					.attr('aria-expanded', true)
					.attr('id','acf-repeater-' + i)
					.attr('aria-live','off');
					
				$('.field-repeater-toggle-single', $(this)).first()
					.attr('aria-controls',id);
			}
		});

		// Bind click events to the toggle functions
		// delegated to higher DOM element to handle dynamically added repeaters
		$( '.field_type-repeater, .field_type-flexible_content, .acf-field-repeater, .acf-field-flexible-content' ).on(
			'click',
			'.field-repeater-toggle-all',
			acfRepeaterToggleAll
		);
		$( '.field_type-repeater .row-layout, .field_type-flexible_content, .acf-field-repeater .row-layout, .acf-field-flexible-content' ).on(
			'click',
			'.field-repeater-toggle-single',
			acfRepeaterToggleSingle
		);

		// prevent default flexible field collapsing for clarity
		$('.field_type-flexible_content, .acf-field-flexible-content').on(
			'click',
			'.acf-fc-layout-handle',
			false
		);
	}

	/**
	 * Collapse a row or rows
	 */
	function acfRepeaterCollapseRow( $rows ) {
		$rowButtonText = $('.screen-reader-text', $rows);
		$rows.addClass('collapsed-row')
			.data('acf-row-collapsed', true)
			.attr('aria-expanded', false);
		$rowButtonText.text('Expand Row')
	}

	/**
	 * Expand a row or rows
	 */
	function acfRepeaterExpandRow( $rows ) {
		$rowButtonText = $('.screen-reader-text', $rows);
		$rows.removeClass('collapsed-row')
			.data('acf-row-collapsed', false)
			.attr('aria-expanded', true);
			$rowButtonText.text('Collapse Row');
	}

	/**
	 * Indicate a collapsed rowset
	 */
	function acfRepeaterExpandRowset( $wrapper ) {
		$button = $('.field-repeater-toggle-all', $wrapper).first();

		$wrapper.removeClass('collapsed-repeater')
			.data('acf-rowset-collapsed', false);
		$button.text('Collapse All Rows');
	}
	
	/**
	 * Indicate an expanded rowset
	 */
	function acfRepeaterCollapseRowset( $wrapper ) {
		$button = $('.field-repeater-toggle-all', $wrapper).first();

		$wrapper.addClass('collapsed-repeater')
			.data('acf-rowset-collapsed', true);
		$button.text('Expand All Rows');
	}

	/**
	 * toggles set of repeater rows or flexible fields
	 */
	function acfRepeaterToggleAll(event) {
		$rowsetButton = $(this);
		$rowsetWrapper = $(this).closest('.acf-field');

		// select either nested or unnested repeater rows, not both
		if( true === $rowsetWrapper.data('acf-repeater-nested') ) {
			$rows = $('.acf-row:data(acf-repeater-nested),.layout', $rowsetWrapper);
		} else {
			$rows = $('.acf-row,.layout', $rowsetWrapper).not(':data(acf-repeater-nested)');
		}
	    
	    // toggle repeater state and all rows
	    if( true !== $rowsetWrapper.data('acf-rowset-collapsed') ) {
	    	acfRepeaterCollapseRowset( $rowsetWrapper );
	    	acfRepeaterCollapseRow( $rows );
	    } else {
	    	acfRepeaterExpandRowset( $rowsetWrapper );
	    	acfRepeaterExpandRow( $rows );
	    }

	    // prevent bubbling up to parent repeater rowset
	    event.stopPropagation();
	}

	/**
	 * toggles single repeater row or flexible field
	 */
	function acfRepeaterToggleSingle(event) {
		$rowButton = $(this);
		$rowButtonText = $('.screen-reader-text', $rowButton);
		$row = $rowButton.closest('.acf-row,.layout');
		$rowsetWrapper = $(this).closest('.acf-field');
	    
	    // toggle the row state and button text
	    if( true !== $row.data('acf-row-collapsed') ) {
	    	acfRepeaterCollapseRow( $row );
	    } else {
	    	acfRepeaterExpandRow( $row );
	    }

		if( true === acfRepeaterAllCollapsed( $rowsetWrapper ) ) {
			acfRepeaterCollapseRowset( $rowsetWrapper );
		} else {
			acfRepeaterExpandRowset( $rowsetWrapper );
		}

	    // prevent bubbling up to parent row button
	    event.stopPropagation();
	}

	/**
	 * check to see if all rows in a rowset are collapsed
	 * @param  obj $rowsetWrapper jquery object
	 * @return bool                	true if all rows in rowset are collapsed
	 */
	function acfRepeaterAllCollapsed( $rowsetWrapper ) {
		// select either nested or unnested repeater rows, not both
		if( true === $rowsetWrapper.data('acf-repeater-nested') ) {
			$rows = $('.acf-row:data(acf-repeater-nested),.layout:data(acf-repeater-nested)', $rowsetWrapper).not('.clone');
		} else {
			$rows = $('.acf-row,.values .layout', $rowsetWrapper).not(':data(acf-repeater-nested)').not('.clone');
		}
		
		// store every row collapsed state in an array
		var rowStates = new Array();
		$rows.each( function() {
			rowStates.push( $(this).data('acf-row-collapsed') );
		});

		// check if any rows are expanded
		allCollapsed = 0 > $.inArray( false, rowStates );

		return allCollapsed;
	}

	// Initiatilize the plugin
	acfRepeaterCollapserInit();

});
