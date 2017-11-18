//TODO document.addEventListener("DOMContentLoaded", function() {
(function () {

	//build products grid
	var grid = document.querySelector('#box_mainproducts .products'); //grid for Isotope
	//var products = JSON.parse('[{"name":"Casio GShock GA110GB1A","price":"598.00","url":"Casio-GShock-GA110GB1A/30982","thumb":"f93bbc71d864ca99050bfb0fdd22e32b","tags":"man sport"},{"name":"Casio GShock GA1101B","price":"508.00","url":"Casio-GShock-GA1101B/38528","thumb":"07ece585c6a6428a71bcc6ef4ce07eea","tags":"man sport"},{"name":"Casio Edifice EF316D1A","price":"287.00","url":"Casio-Edifice-EF316D1A/25297","thumb":"a4d790ea062c7caf67f24d09cbd0e191","tags":"man elegant"},{"name":"Casio Edifice EF527L1A","price":"571.00","url":"Casio-Edifice-EF527L1A/25367","thumb":"ffecfa6dd9aed1502dd035840ef8062f","tags":"man elegant"},{"name":"Casio Baby-G BGA190BC7B","price":"478.00","url":"Casio-Baby-G-BGA190BC7B/51208","thumb":"2b911f89aac717776772b38644df5102","tags":"woman sport"},{"name":"Casio Baby-G BGA190GL7B","price":"467.00","url":"Casio-Baby-G-BGA190GL7B/50366","thumb":"0f7bb9135b180803f6d7c3e16ea12371","tags":"woman sport"},{"name":"Casio Retro LTPE140R9A","price":"396.00","url":"Casio-Retro-LTPE140R9A/57487","thumb":"99512b92f71cb9998ebb8aaffe5163ea","tags":"woman elegant"},{"name":"Casio Retro LTPE140GB1A","price":"396.00","url":"Casio-Retro-LTPE140GB1A/57486","thumb":"d6291bca1782850723f0eed94b01fdd2","tags":"woman elegant"}]');
	
	var products = JSON.parse(JSON.stringify(data)); //load data from data.js
	for (var i = 0; i < products.length; i++) {
		var product = document.createElement('div');
		product.className = 'product s-grid-3 product-main-wrap ' + (products[i].tags).toString().replace(/,/g, " ") + ' ';
		if (parseFloat(products[i].price) < 150) {
			product.className += ('price-150');
		} else if (parseFloat(products[i].price) >= 150 && parseFloat(products[i].price) < 350) {
			product.className += ('price-150-350');
		} else if (parseFloat(products[i].price) >= 350 && parseFloat(products[i].price) < 750) {
			product.className += ('price-350-700');
		} else {
			product.className += ('price-700');
		}

		var content = '';
		content += '<div class="product-inner-wrap">';
		content += '<a class="prodimage f-row" href="/pl/p/' + products[i].url + '"><span class="f-grid-12 img-wrap"><img src="https://zegarkicentrum.pl/environment/cache/images/300_300_productGfx_' + products[i].thumb + '.jpg" alt="' + products[i].name + '"></span></a>';
		content += '<a class="prodname f-row" href="/pl/p/' + products[i].url + '"><span class="productname">' + products[i].name + '</span></a>';
		content += '<div  data-price = ' + Math.round(products[i].price) + ' class="price f-row"><span>Cena::</span><em>' + products[i].price + '&nbsp;zł</em></div>';
		content += '<div class="buttons f-row"><a href="/pl/p/' + products[i].url + '"><button class="addtobasket btn btn-red">Dodaj do koszyka</button></a></div>';
		content += '</div>';
		product.innerHTML = content;
		grid.appendChild(product);

	}

	//init isotope
	var currentFilter = ''; //empty filter
	var isotope = new Isotope(grid, { //select main grid
		itemSelector: '.product-main-wrap', //each item
		layoutMode: 'fitRows',
		filter: function () {
			return $(this).index() < 40;
		},
		getSortData: {
			price: '.price',
		},
		sortBy: 'price',
		sortAscending: false 
	});

	$(':reset').click(function () {
		showPopup();
	});

	function showPopup() {
		isotope.arrange({
			filter: "*"
		});
		document.getElementById("mlSuggesterPopup").style.display = "block";
	}

	function closePopup() {
		document.getElementById("mlSuggesterPopup").style.display = "none";
	}

	//handle filtering
	$('#mlSuggesterPopup').on('change', 'input', function () { //get data from buttons
		//on change instead of 'click', 'input'     
		//Sex filter
		var filterSex = $('.person:checked').attr('data-tag'); //get the tag. ex: .man .woman...
		if (filterSex === undefined) {
			filterSex = '';
		}
		//Type filter
		var filterType = [];
		$(".type:checked").each(function () {
			filterType.push($(this).attr('data-tag'));
		});

		//Price filter
		filterPrice = $('.price:checked').attr('data-tag');
		if (filterPrice === undefined) {
			filterPrice = '';
		}

		//Age filter
		filterAge = $('.age:checked').attr('data-tag');
		if (filterAge === undefined) {
			filterAge = '';
		}

		//radio filters
		restOfFilters = filterSex + filterPrice + filterAge;
		var filterToPassArray = [];
		if (filterType.length == 0) {
			filterType.push("");
		}

		//add filterType to all other filters
		for (i = 0; i < filterType.length; i++) {
			filterToPassArray.push(restOfFilters + filterType[i]);
		}

		var filterValue = filterToPassArray.join();
		console.log(filterValue);
		location.hash = 'filter=' + encodeURIComponent(filterValue);
		var isIsotopeInit = false;
		isotope.arrange({
			filter: filterValue
		}); 

		// update with filterValue
		updateFilterCounts();

		//add choosen class if input is selected
		console.log('this:', $(this));
		$(this).siblings('.btn').addClass('add');
		if ($(this).is(':checked')) {
			$(this).addClass('choosen');
		}

		if($(':radio').click(function(){
			console.log($(this));
			if($(this).attr("checked", "checked")){
				console.log('this is checked');
			}
		}));
	});
	//############################################ Functions #################################################
	function updateFilterCounts() {
		var initial_items = 40;
		var itemElems = isotope.getFilteredItemElements();
		var count_items = $(itemElems).length;
		console.log(count_items);
		var index = 0;
		$(itemElems).each(function () {
			if (index >= initial_items) {
				$(this).addClass('visible-item');
			}
			index++;
		});
		isotope.layout();
	}

	function getHashFilter() {
		var hash = location.hash;
		// get filter=filterName
		var matches = location.hash.match(/filter=([^&]+)/i);
		var hashFilter = matches && matches[1];
		//console.log(matches[1]);
		return hashFilter && decodeURIComponent(hashFilter);
	}

	function onHashchange() {
		console.log('ok');
		var hashFilter = getHashFilter();
		if (!hashFilter && isIsotopeInit) {
			return;
		}
		isIsotopeInit = true;
		// filter isotope
		isotope.arrange({
			filter: hashFilter
		});
		// set selected class on button

		
		// trigger event handler to init Isotope
		//onHashchange();
	}

	//On hash change 
	$(window).on('hashchange', onHashchange);
	//handle sorting

	$('.toggleButton').on("click", function () {
		if ($('.product-form').css('display') == 'none') {
			$('.product-form').css('display', 'block');
		} else {
			$('.product-form').css('display', 'none');
		}
	});

	$('.sortingButton').on("click", function () {
		console.log(this);
		if ($('.sortingButton').hasClass('desc')) {
			$(this).removeClass('desc');
			$(this).addClass('asc');
			isotope.arrange({
				sortAscending: true
			});
		} else {
			$(this).removeClass('asc');
			$(this).addClass('desc');
			isotope.arrange({
				sortAscending: false
			});
		}
	});

	
	
})();
//});