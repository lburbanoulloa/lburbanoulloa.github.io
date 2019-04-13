jQuery(document).ready(function(){

		jQuery("#ImageGallery").unitegallery({
				gallery_theme: "tiles",
				//tiles_col_width: 300,
				//tiles_exact_width: false,
				tiles_min_columns: 2,
				tiles_max_columns: 4,
				theme_enable_preloader: true,
				theme_appearance_order: "shuffle",
				theme_gallery_padding: 0,
				gallery_width:"100%"

		});

		jQuery("#ImageGalleryNested").unitegallery({
				gallery_theme: "tiles",
			tiles_type: "nested",					//must option for the tiles - justified type
			tiles_enable_transition: true,			//enable transition when screen width change
			tiles_min_columns: 2,					//min columns - for mobile size, for 1 column, type 1

				tiles_max_columns: 4,
				theme_enable_preloader: true,
				theme_appearance_order: "shuffle",
				theme_gallery_padding: 0,
				gallery_width:"100%"

		});


		jQuery("#VideoGallery").unitegallery({
				gallery_theme: "tilesgrid",
				tile_enable_shadow:false,
				tile_enable_border:false,
				tile_enable_outline:false,
				tile_width: 360,
				tile_height: 300,
				grid_padding:0,
				grid_space_between_cols: 00,
				grid_space_between_rows: 00,
				gallery_width:"100%",
				grid_num_rows:2
		});


		//opcion del menu: scroll, cambiar aspa por icono y cerrar menu
		jQuery(function() {     	    
			jQuery(".option").on("click", function(e) { 
			jQuery("#dl-menu").toggleClass('open-menu'); 
			jQuery("#dl-menu").dlmenu('closeMenu');
			      
			e.preventDefault();
			var strAncla = jQuery(this).attr("href"); 
			jQuery("body,html").stop(true, true).animate({
				scrollTop: jQuery(strAncla).offset().top  
				}, 1000);  
			});
		});

		//click que abre y cerrar menu hamburguesa
		jQuery(function() {   
			// variables
			var $header_top = $('.dl-menuwrapper');

			// toggle menu
			$header_top.find('a').on('click', function() {
			  $(this).parent().toggleClass('open-menu');
			});
		});
});
