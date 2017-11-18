//TODO document.addEventListener("DOMContentLoaded", function() {
(function(){


//build products grid
var grid = document.querySelector('#box_mainproducts .products');
var products = JSON.parse('[{"name":"Casio GShock GA110GB1A","price":"598.00","url":"Casio-GShock-GA110GB1A/30982","thumb":"f93bbc71d864ca99050bfb0fdd22e32b","tags":"man sport"},{"name":"Casio GShock GA1101B","price":"508.00","url":"Casio-GShock-GA1101B/38528","thumb":"07ece585c6a6428a71bcc6ef4ce07eea","tags":"man sport"},{"name":"Casio Edifice EF316D1A","price":"287.00","url":"Casio-Edifice-EF316D1A/25297","thumb":"a4d790ea062c7caf67f24d09cbd0e191","tags":"man elegant"},{"name":"Casio Edifice EF527L1A","price":"571.00","url":"Casio-Edifice-EF527L1A/25367","thumb":"ffecfa6dd9aed1502dd035840ef8062f","tags":"man elegant"},{"name":"Casio Baby-G BGA190BC7B","price":"478.00","url":"Casio-Baby-G-BGA190BC7B/51208","thumb":"2b911f89aac717776772b38644df5102","tags":"woman sport"},{"name":"Casio Baby-G BGA190GL7B","price":"467.00","url":"Casio-Baby-G-BGA190GL7B/50366","thumb":"0f7bb9135b180803f6d7c3e16ea12371","tags":"woman sport"},{"name":"Casio Retro LTPE140R9A","price":"396.00","url":"Casio-Retro-LTPE140R9A/57487","thumb":"99512b92f71cb9998ebb8aaffe5163ea","tags":"woman elegant"},{"name":"Casio Retro LTPE140GB1A","price":"396.00","url":"Casio-Retro-LTPE140GB1A/57486","thumb":"d6291bca1782850723f0eed94b01fdd2","tags":"woman elegant"}]');

for (i = 0; i < products.length; i++) {
	var product = document.createElement('div');
	product.className = 'product s-grid-3 product-main-wrap '+products[i].tags+' ';
	var content = '';
	content += '<div class="product-inner-wrap">';
		content += '<a class="prodimage f-row" href="/pl/p/'+products[i].url+'"><span class="f-grid-12 img-wrap"><img src="https://zegarkicentrum.pl/environment/cache/images/300_300_productGfx_'+products[i].thumb+'.jpg" alt="'+products[i].name+'"></span></a>';
		content += '<a class="prodname f-row" href="/pl/p/'+products[i].url+'"><span class="productname">'+products[i].name+'</span></a>';
		content += '<div class="price f-row"><span>Cena::</span><em>'+products[i].price.replace('.',',')+'&nbsp;zł</em></div>';
		content += '<div class="buttons f-row"><a href="/pl/p/'+products[i].url+'"><button class="addtobasket btn btn-red">Dodaj do koszyka</button></a></div>';
	content += '</div>';
	product.innerHTML = content;
	grid.appendChild(product);
}

function showPopup(){
	isotope.arrange({ filter: "*" });
	document.getElementById("mlSuggesterPopup").style.display = "block";
}
function closePopup(){
	document.getElementById("mlSuggesterPopup").style.display = "none";
}

//init isotope
var currentFilter = '';
var isotope = new Isotope ( '.products', {
  itemSelector: '.product-main-wrap',
});

//handle filtering
$('#mlSuggesterPopup').on( 'click', '.btn-choice', function() {
	var filterValue = $( this ).attr('data-tag');
	console.log(filterValue);
	if (currentFilter.length !== 0){
		if (currentFilter.indexOf(filterValue) !== -1) {
			filterValue = currentFilter.replace(filterValue, '');
		}else{
			filterValue = currentFilter+filterValue;
		}
	}
	isotope.arrange({ filter: filterValue });
	currentFilter = filterValue;
	this.classList.toggle('choosen');
});

//handle sorting

//handle popup open
document.getElementById('mlSuggesterInit').addEventListener("click", function(){
    showPopup();
}); 


})();
//});