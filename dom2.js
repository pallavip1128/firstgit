// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// document.title = 1234;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.images);
// console.log(document.links);
// console.log(document.forms[0]);


headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.style.borderBottom='solid 3px #000';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].style.fontWeight ='bold';
// items[1].style.backgroundColor = 'green'; 
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight ='bold';
}
// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input =document.querySelector('input');
// input.value = 'hello world';
// var submit = document.querySelector('input[type="submit"');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color ='red';

// QUERYSELECTORALL //

// var titles= document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';

var odd= document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}
