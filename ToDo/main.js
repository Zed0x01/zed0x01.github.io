const Form = document.querySelector('.todo');
const input= document.querySelector('.task-input');
const tasks= document.querySelector('.todo-tasks');

let todotasks=[];

function addtask(item){
    if (item !== ''){
        const task={
            id : Date.now() ,
            name : item,
            completed : false
        };

        todotasks.push(task);
        addToLocalStorage(todotasks);
        input.value = '';
    }
    else{
        alert('Enter Valid Task');
    }
}

Form.addEventListener('submit' , function(event) {
    event.preventDefault();
    addtask(input.value);
});



function showtasks(todotasks){
    tasks.innerHTML='';
    todotasks.forEach(function(item){

        const checked = item.completed ? 'checked' : null;
        const li = document.createElement('li');
        li.setAttribute('class','item');
        li.setAttribute('item-key',item.id);
        if (item.completed===true){
            li.classList.add('checked');
        }
        li.innerHTML=`
        <input type="checkbox" class="checkbox" ${checked}>
        <p class="p2" >${item.name}</p>
        <button class="delete">X</button>
        `;
        tasks.append(li);
    });
    
}

function addToLocalStorage(todotasks){
    localStorage.setItem('todotasks',JSON.stringify(todotasks));
    showtasks(todotasks);
}

function getFromLocalStorage(){
    const reference = localStorage.getItem('todotasks');
    if (reference){
        todotasks = JSON.parse(reference);
        showtasks(todotasks);
    }
}

function toggle (id){
    todotasks.forEach(function(item){
        if(item.id == id){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todotasks);
}

function deletetask(id){
    todotasks = todotasks.filter(function(item){
        return item.id != id;
    });
    addToLocalStorage(todotasks);
}

getFromLocalStorage();

tasks.addEventListener('click' , function(event){
    if (event.target.type === 'checkbox'){
        toggle(event.target.parentElement.getAttribute('item-key'));
    }
    if(event.target.classList.contains('delete')){
        deletetask(event.target.parentElement.getAttribute('item-key'));
    }
});