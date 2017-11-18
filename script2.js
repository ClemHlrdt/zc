//TODO document.addEventListener("DOMContentLoaded", function() {
(function(){

//build products grid
var grid = document.querySelector('#box_mainproducts .products'); //grid for Isotope
var products = JSON.parse('[{"name":"Casio GShock GA110GB1A","price":"598.00","url":"Casio-GShock-GA110GB1A/30982","thumb":"f93bbc71d864ca99050bfb0fdd22e32b","tags":"man sport"},{"name":"Casio GShock GA1101B","price":"508.00","url":"Casio-GShock-GA1101B/38528","thumb":"07ece585c6a6428a71bcc6ef4ce07eea","tags":"man sport"},{"name":"Casio Edifice EF316D1A","price":"287.00","url":"Casio-Edifice-EF316D1A/25297","thumb":"a4d790ea062c7caf67f24d09cbd0e191","tags":"man elegant"},{"name":"Casio Edifice EF527L1A","price":"571.00","url":"Casio-Edifice-EF527L1A/25367","thumb":"ffecfa6dd9aed1502dd035840ef8062f","tags":"man elegant"},{"name":"Casio Baby-G BGA190BC7B","price":"478.00","url":"Casio-Baby-G-BGA190BC7B/51208","thumb":"2b911f89aac717776772b38644df5102","tags":"woman sport"},{"name":"Casio Baby-G BGA190GL7B","price":"467.00","url":"Casio-Baby-G-BGA190GL7B/50366","thumb":"0f7bb9135b180803f6d7c3e16ea12371","tags":"woman sport"},{"name":"Casio Retro LTPE140R9A","price":"396.00","url":"Casio-Retro-LTPE140R9A/57487","thumb":"99512b92f71cb9998ebb8aaffe5163ea","tags":"woman elegant"},{"name":"Casio Retro LTPE140GB1A","price":"396.00","url":"Casio-Retro-LTPE140GB1A/57486","thumb":"d6291bca1782850723f0eed94b01fdd2","tags":"woman elegant"}]');

for (i = 0; i < products.length; i++) {
	var product = document.createElement('div');
	product.className = 'product s-grid-3 product-main-wrap ' + products[i].tags + ' ';
	if (parseFloat(products[i].price) < 150){
		product.className += ('price-150');
	} else if (parseFloat(products[i].price) >=150 && parseFloat(products[i].price) < 350){
		product.className += ('price-150-350');
	} else if (parseFloat(products[i].price) >= 350 && parseFloat(products[i].price) < 750) {
		product.className += ('price-350-700');
	} else {
		product.className += ('price-700');
	}
	$(':input:checked').prop('checked', false);
	
	var content = '';
	content += '<div class="product-inner-wrap">';
	content += '<a class="prodimage f-row" href="/pl/p/' + products[i].url + '"><span class="f-grid-12 img-wrap"><img src="https://zegarkicentrum.pl/environment/cache/images/300_300_productGfx_' + products[i].thumb + '.jpg" alt="' + products[i].name + '"></span></a>';
	content += '<a class="prodname f-row" href="/pl/p/' + products[i].url + '"><span class="productname">' + products[i].name + '</span></a>';
	content += '<div  data-price = '+ Math.round(products[i].price)+ ' class="price f-row"><span>Cena::</span><em>' + products[i].price.replace('.', ',') + '&nbsp;zł</em></div>';
	content += '<div class="buttons f-row"><a href="/pl/p/' + products[i].url + '"><button class="addtobasket btn btn-red">Dodaj do koszyka</button></a></div>';
	content += '</div>';
	product.innerHTML = content;
	grid.appendChild(product);

}

//init isotope
var currentFilter = ''; //empty filter
var isotope = new Isotope(grid, { //select main grid
	itemSelector: '.product-main-wrap', //each item
	layoutMode: 'fitRows'
});

function showPopup(){
	isotope.arrange({ filter: "*" });	
	document.getElementById("mlSuggesterPopup").style.display = "block";
}
function closePopup(){
	document.getElementById("mlSuggesterPopup").style.display = "none";
}

//handle filtering
$('#mlSuggesterPopup').on('change', 'input', function() { //get data from buttons
	//on change instead of 'click', 'input'     
	var filter = [];
	
	var filterValue ='';
	filter[0] = $('.person:checked').attr('data-tag'); //get the tag. ex: .man .woman...
	filter[1] = $('.type:checked').attr('data-tag'); //get the tag. ex: .man .woman...
	filter[2] = $('.price:checked').attr('data-tag'); //get the tag. ex: .man .woman...

	if (filter[0] === undefined){
		filter[0] = '';
	}
	if (filter[1] === undefined) {
		filter[1] = '';
	}
	if (filter[2] === undefined) {
		filter[2] = '';
	}
	filterValue = filter[0] + filter[1] + filter[2];
	console.log(filterValue);
	
	//console.log(radio1);
	//console.log(value1.data('data-tag'));
	//alert(allValues);
	//currentFilter += ' ' + filterValue;
	// if (currentFilter.length !== 0){ //if a current filter exists...
	// 	if (currentFilter.indexOf(filterValue) !== -1) { //if the filter is already is in current filter
	// 		filterValue = currentFilter.replace(filterValue, ''); //remove it
	// 	}else{
	// 		filterValue = currentFilter + filterValue; //add the filter to filter value	
	// 	}
	// }
	
	isotope.arrange({ filter: filterValue }); // update with filterValue
	currentFilter = filterValue; //current list of filters
	this.classList.toggle('choosen'); //add class choosen
});

//handle sorting

//handle popup open
document.getElementById('mlSuggesterInit').addEventListener("click", function(){
	showPopup();
	//add function for opening modal here
}); 

	


})();
//});