/**
 * The code defines a todoList array and two functions, renderTodoList and addTodo, to render the todo
 * list and add new items to it respectively.
 */

const todoList =JSON.parse(localStorage.getItem('todoList')) || [{
    name:'Code',
    dueDate:'2023-16-7'
 }];
/* The `renderTodoList()` function is responsible for rendering the todo list on the webpage. It
iterates over the `todoList` array and creates HTML elements for each todo item. It then updates the
HTML content of the element with the class `js-todo-list` with the generated HTML code.
Additionally, it adds a delete button for each todo item, which when clicked, removes the
corresponding item from the `todoList` array and re-renders the todo list. */

function renderTodoList() {


let todoListHTML='';
/* The code block is a part of the `renderTodoList()` function. It is responsible for iterating over
the `todoList` array and generating HTML code for each todo item. */

/* The `todoList.forEach(function(todoObject,index) {` is a loop that iterates over each item in the
`todoList` array. It takes a callback function as an argument, which is executed for each item in
the array. */
todoList.forEach(function(todoObject,index) {
    
    const {name, dueDate} = todoObject;
    
    const html = `
        <div>${name}</div>				
        <div>${dueDate}</div>				
        <button onclick="
            todoList.splice(${index}, 1);
            renderTodoList() 
            saveToStorage();           		
            " class="delete-todo-button">Delete</button>
                            
    `;
    //Removing the elements on clicking the delete button by using .splice() method
    todoListHTML+=html
    
});


document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

/* The `addTodo()` function is responsible for adding new items to the `todoList` array. It retrieves
the input values for the name and due date from the respective input elements on the page. It then
creates a new object with the name and due date values and pushes it to the `todoList` array.
Finally, it clears the input fields and calls the `renderTodoList()` function to update the
displayed todo list. */

function addTodo() {
const inputElement=	document.querySelector('.input');
const name = inputElement.value 

const dateInputElement =document.querySelector('.dueDate-input');
const dueDate = dateInputElement.value;

todoList.push({
    name, //Does the same as {name: name,
    dueDate //               dueDate: dueDate}; This is called as the shorthand property

});


inputElement.value = '';
renderTodoList();
saveToStorage();
}
/**
 * The function saves the todoList array to the localStorage as a JSON string.
 */
function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
