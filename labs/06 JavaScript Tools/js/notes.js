//unsure what to do about the ESLint; need more instructions to do this bit
//unsure what to do about lab 6 part 4, added 'use strict' and corrected red warnings, program runs
"use strict";

var notes = new Array();

function addItem() {
	var textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	var newItem = {title: itemText, quantity: 1};
	notes.push(newItem);
	displayList();
}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

var button = document.getElementById('add');
button.onclick = addItem;
