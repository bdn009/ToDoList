function search(){
    const searchBar=document.getElementById('searchBar');
    searchBar.classList.toggle('border-b-cyan-300');
    searchBar.classList.toggle('border-b-2');
}
document.addEventListener('DOMContentLoaded', (event) => {
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = `Today's Date: ${currentDate}`;
});

document.getElementById('addTaskBtn').addEventListener('click', function(){
    const addTask=document.getElementById('addTask');
    const addTaskTitle=addTask.value;
    if (addTaskTitle!=="") {
        const taskList=document.getElementById('taskList');
        const task=document.createElement('li');
        task.classList="flex items-center bg-[#212121]/70 rounded-md backdrop-blur text-white font-medium py-3 px-5 mb-2 hover:bg-[#212121]/50 capitalize";
        const taskCheckbox=document.createElement('input');
        taskCheckbox.type='checkbox';
        taskCheckbox.classList="mr-4"

        const taskTitle=document.createElement('span');
        taskTitle.innerText=addTaskTitle
        // console.log(addTask)
        
        // task.innerText=addTaskTitle;
        task.appendChild(taskCheckbox)
        task.appendChild(taskTitle)
        taskList.appendChild(task)

        const taskNumber=document.getElementById('taskNumbers');
        const taskLength=taskList.children.length;
        taskNumber.innerText=taskLength;

        addTask.value = "";
        taskCheckbox.addEventListener('click', function(){
            if(taskCheckbox.checked){
                taskTitle.classList.add('line-through')
            }
        });
    }
    

    
    
});

// document.addEventListener('click', function(){
//     document.getElementById('addTaskBtn');
//     console.log('ok')
// })