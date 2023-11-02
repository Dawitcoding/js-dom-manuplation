const list = document.querySelector("#book-list ul");
// Delete book
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
  }
});

// Add book
const addForm = document.forms["add-book"];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  //console.log(value)
  
  // Create element
  const li = document.createElement('li')
  const bookName = document.createElement('span')
  const btnDelete = document.createElement('span')

  // Add Content
  bookName.textContent = value;
  btnDelete.textContent = 'delete'

  // adding classname
  bookName.classList.add('name');
  btnDelete.classList.add('delete')

  // Append to the dom
  li.appendChild(bookName)
  li.appendChild(btnDelete)
  list.appendChild(li)
})

// hide book
const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = 'none'
  }
  else{
    list.style.display = 'initial'   // u can also use block
  }
})

// search book
const searchBar = document.forms["search-books"].querySelector('input')
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li')

  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent 

    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block'
    }
    else{
      book.style.display = 'none'
    }
  })
}) 

