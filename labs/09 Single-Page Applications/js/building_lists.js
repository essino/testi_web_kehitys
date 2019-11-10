
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

/*var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + " " + books[i].year;
	list.appendChild(item);
}*/

let divi = document.createElement('div');

document.body.appendChild(divi);


//create table
var table = document.createElement('table');
//table.innerHTML = "taulukko";

//create headings
let tr = document.createElement('tr');
//tr.innerHTML = "rivi";
table.appendChild(tr);
var th = document.createElement('th');
th.innerHTML = "Kirjan nimi";
tr.appendChild(th);
var th = document.createElement('th');
th.innerHTML = "Julkaisuvuosi";
tr.appendChild(th);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	let tr = document.createElement('tr');
	//tr.innerHTML = "rivi" + [i];
	tr.title = books[i].title;

	tr.addEventListener('click', function(){
		console.log("testitestimissä on");
		console.log("Kirjan nimi " + tr.title);
		let divis = document.getElementById('divi');
		divis.textContent = tr.title;

	});
	table.appendChild(tr);
	var td = document.createElement('td');
	td.title = books[i].title;
	td.innerHTML = books[i].title;

	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = books[i].year;

	tr.appendChild(td);

}
//document.body.appendChild(divi);
document.body.appendChild(table);
