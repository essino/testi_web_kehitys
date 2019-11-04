
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);
}

//var list = document.createElement('table');
/*var table = document.createElement('table');
var row1 = table.insertRow(0);
var cell1 = row1.insertCell(0);
var cell2 = row1.insertCell(1);
cell1.innerHTML = "Name";
cell2.innerHTML = "Year";*/

//for (var i=0; i < books.length; i++) {
//console.log(books[i].title);
	var divi = document.createElement('div');
	divi.innerHTML = "Morjens!"
document.body.appendChild(divi);
	/*
	var row = document.createElement('tr');
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = books[i].title;
	cell2.innerHTML = books[i].year;
	list.appendChild(item);
	list.appendChild(item2);*/
//}


//document.body.appendChild(list);
