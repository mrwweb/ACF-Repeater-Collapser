(function($){

	// Exists function 
	$.fn.exists = function(){ return this.length > 0; }

	// Check if we should show the repeter collapse button 
	$.fn.repeaterShowcollapse = function() { 

		// If we can find at the acf icon to collapse the fields - show (or remove)
		if ( $(this).find('a.-collapse').exists() ) {
			//$(this).find('.collapse').show();
			//console.log('collapse exists');
		} else { 
			
			// If we can't find a collapse button
			// The user hasn't set the collapsed target, so lets set one
			$(this).find('.acf-row').each(function( index ) {
				$(this).find('.acf-field').first().addClass('-collapsed-target');
			});
			
		}
		
		// If the repeater is empty - hide (target the first repeater to support nested repeaters)
		if( $(this).find('.acf-repeater').first().is('.-empty')) { 
			$(this).find('.collapse').hide();
		} else { 
			$(this).find('.collapse').show();
		}
		
	}

	// Check if we should show or hide the flexi collapse button 
	$.fn.flexiShowcollapse = function() { 
		if( $(this).find('.acf-flexible-content').is('.empty')) { 
			$(this).find('.collapse').first().hide();
		} else { 
			$(this).find('.collapse').first().show();
		}
	}

	/** 
	Doc Ready
	**/ 
	$(document).ready(function(){

		/** 
		Repeater Functionality 
		**/ 	
		
		// Open all fields on page load 
		$('.acf-row').removeClass('-collapsed');
		
		// Append the collapse button  
		$( ".acf-field-repeater > .acf-label" ).append('<button class="collapse">' + acfrcL10n.collapseAll + '</button>');

		// Check if we should show the button 
		$( ".acf-field-repeater" ).each(function( index ) {
			$(this).repeaterShowcollapse();
		});
		
		// On the click of the repeater toggle 
		$('body').on('click','.acf-field-repeater .collapse', function( event ) {
			
			event.preventDefault();
			
			var active = $(this).hasClass('collapse--active');
			
			// open all the things 
			if( active ) { 
				$(this).closest('.acf-field').find('.acf-row').removeClass('-collapsed');
				$(this).removeClass('collapse--active');
				$(this).html( acfrcL10n.collapseAll );

			// close all the things 
			} else { 
				$(this).closest('.acf-field').find('.acf-row').addClass('-collapsed');
				$(this).addClass('collapse--active');
				$(this).html( acfrcL10n.expandAll );
			}
			
		
		});


		/** 
		Flexi Functionality
		**/
		
		// Append the collapse button
		$(this).find('.acf-field-flexible-content > .acf-label label').append('<button class="collapse collapse--flexi">' + acfrcL10n.collapseAll + '</button>');			

		// On the click of the toggle 
		$('.acf-field-flexible-content').find('.collapse').first().click(function( event ) {
			
			event.preventDefault();
			
			var active = $(this).hasClass('collapse--active');
			
			// open all the things 
			if( active ) { 
				$(this).removeClass('collapse--active');
				$(this).html( acfrcL10n.collapseAll);
				$(this).closest('.acf-fields').each(function( index ) {
					$(this).find('.layout').removeClass('-collapsed');
				});
			// close all the things 
			} else { 
				$(this).addClass('collapse--active');
				$(this).html( acfrcL10n.expandAll );
				$(this).closest('.acf-fields').each(function( index ) {
					$(this).find('.layout').addClass('-collapsed');
				});
			}
			
			
		
		});
		
		// Hide the button if the field is empty 
		$( ".acf-field-flexible-content" ).each(function( index ) {
			$(this).flexiShowcollapse();
		});

	}); // Doc ready 


	/** 
	AJAX Complete 
	This runs after a row has been added / removed or a single row collapsed / collapseed
	**/

	$(document).ajaxComplete(function() {
		
		// Check if we should show the button on each repeater field 
		$( ".acf-field-repeater" ).each(function( index ) {
			$(this).repeaterShowcollapse();
		});	

		// Check if we should show the button on each flexi field 
		$( ".acf-field-flexible-content" ).each(function( index ) {
			$(this).flexiShowcollapse();
		});
			
	});


})(jQuery);