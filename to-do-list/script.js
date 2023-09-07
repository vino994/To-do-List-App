var formInput = document.getElementById('btn');
var inputBox = document.getElementById('inputBox');
formInput.addEventListener('click',(e)=>{
    e.preventDefault();
    var Item = document.querySelector('ol');
    var list = document.createElement('li');
    var p = document.createElement('p');
    p.textContent = inputBox.value;
    var span = document.createElement('span');
    span.classList.add('remove');
    span.textContent = '-'
 
    list.appendChild(p);
    list.appendChild(span)
    Item.appendChild(list)
 
    inputBox.value = ''

  span.addEventListener('click',delItem);
})

//delete functions

  function delItem(e){
     this.parentElement.remove();
  }
// var Remove = document.querySelectorAll('.remove');

// Remove.addEventListener('click',()=>{
//     console.log('hai')
// })
// var addItem = (e)=>{
//   e.preventDefault();

//   console.log(inputBox)
//   var Item = document.querySelector('ol');
//   var list = document.createElement('li');
//   var p = document.createElement('p')
// }