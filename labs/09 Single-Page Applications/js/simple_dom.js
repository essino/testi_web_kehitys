//console.log('page loaded');
//bug: the last letter of the email is not in the output
//onkeydown: the function starts as soon as you push the key down, output doesn't show the last letter
//onkeyup: once you stop pushing the key down, it goes to the function to update the email and copies all of it in the output
//onmouseover: first you have to write the email and it doesn't show the output. Then move the cursor from the email box and then go back to it: it shows the email as output
//onmouseout: it updates the output when you move the mouse out of the email textbox
//onchange: it updates the output when you click on the other items (name, save...)
//onclick: you'll have to click the email box again to get it to update the output

console.log(document);

document.getElementById('save').onclick = function(){
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}
document.querySelector('#userForm input[type="email"]').onclick = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};


