console.log('loaded');

var $contacts = $('#contactsList');
var $newBtn = $('#newContactBtn');
var $formDiv = $('.formDiv');
var $newForm = $('#newForm');
var $name = $('#name');
var $age = $('#age');
var $address = $('#address');
var $phone_number = $('#name');
var $picture = $('#picture');
var $category = $('#category');


$($newBtn).click(function(){
  if ($($formDiv).is(":hidden")) {
    $($formDiv).slideDown("slow");
  } else {
    $($formDiv).hide();
  }
});


function fetchAll(){
	$.ajax({
		url: '/contacts',
		type: 'GET',
		dataType: 'json'
	}).done(function(data){
		console.log(data);

		for(var i = 0; i < data.length; i++){
			$($contacts).append("<li id='" + data[i].id + "'>" + data[i].name + "</li>")
		}
	})	
}

function createNew(name, age, address, phone_number, picture, category){
	$.ajax({
		url: '/contacts',
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify({name: name, age: age, address: address, phone_number: phone_number, picture: 	picture, category: category})
	}).done(function(data){
		console.log(data);
	})
}

$newForm.on('submit', function(e){
	e.preventDefault();
	createNew($name.val(), $age.val(), $address.val(), $phone_number.val(), $picture.val(), $category.val());
	this.reset();
})




fetchAll();
