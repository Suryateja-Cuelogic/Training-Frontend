jQuery(document).ready(function(){
	jQuery('#toggle-btn').on('click', function() {
	     var toggle = 'More';

	     if ( jQuery('#toggle-btn').html() == toggle ) {
	          toggle = 'Less';
	     }

	     jQuery('#toggle-btn').html(toggle);
	});
});