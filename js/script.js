//var nameField = document.getElementById('nameField').value;
//var kmField = document.getElementById('nameField').value;

var button = document.getElementById('genera');


button.addEventListener('click',function(){
    var name = document.getElementById('nameField').value
    var km = document.getElementById('kmField').value;
    var price = document.getElementById('price').value;
    console.log(name + km + price );
}
);