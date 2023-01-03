var itemList  =document.querySelector('#items');
// parentnode //
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement //
console.log(itemList.parentNode);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes //
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// firstchild //
console.log(itemList.firstChild);

// firstElementChild //
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='Hello 1';

// lastchild //
console.log(itemList.lastChild);

// lastElementChild //
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='Hello 4';

// next sibling //
console.log(itemList.nextSibling);

// next elemntsibling //
console.log(itemList.nextElementSibling);
// privioussibling //
console.log(itemList.priviousSibling);


// privious elemntsibling //
console.log(itemList.priviousElementSibling);
itemList.priviousElementSibling.style.backgroundColor='green';

//createElement //

//create a div //
var newDiv = document.createElement('div');

// add class
newDiv.className= 'hello';

// add id //
newDiv.id ='hello 1';

// create textNode //
var newDivText = document.crezteTextNode('Hello World');

//add text to Div //
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize= '30px';

container.insertBefore(newDiv,h1);








