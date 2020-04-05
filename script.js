
let list = document.getElementById('list');
let input = document.getElementById('inputData');

document.addEventListener('keypress',function(e){
    if(e.code == 'Enter') add()
})

function add(){


    if(input.value == '' || null || undefined){
        alert('Поле пустое');
    } else{

    let id = Math.random().toString(36).substr(2, 9);

    let newTask = document.createElement('li');
    newTask.classList.add('task');
    
    let check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.setAttribute('id',id);
    check.setAttribute('name','task');
    

    let label = document.createElement('label');
    label.setAttribute('for',id);

    let task = document.createElement('span');
    task.innerText = input.value;
    label.appendChild(task);


    let trash = document.createElement('i');
    trash.setAttribute('class','fa fa-trash');
    trash.setAttribute('area-hidden',true);
    trash.setAttribute('onclick','remove(this)');

    newTask.appendChild(check);
    newTask.appendChild(label);
    newTask.appendChild(trash);
    
    input.value = "";
    list.appendChild(newTask);
    }
}

function remove(task){
    let removingTask = task.parentElement;
    list.removeChild(removingTask);

}