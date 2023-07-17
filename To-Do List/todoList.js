const todoList =[{
    name:'Code',
    dueDate:'2023-16-7'
 }];
function renderTodoList() {


let todoListHTML='';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    
    const html = `
        <div>${name}</div>				
        <div>${dueDate}</div>				
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList()            		
            " class="delete-todo-button">Delete</button>
                            
    `;
    //Removing the elements on clicking the delete button by using .splice() method
    todoListHTML+=html
    
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
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

}