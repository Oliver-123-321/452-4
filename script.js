document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskList').addEventListener('click', handleTaskClick);

function addTask() {
  var input = document.getElementById('newTaskInput');
  var taskList = document.getElementById('taskList');
  if (input.value.trim() !== '') {
    var li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `<span>${input.value}</span><button class="remove">Remove</button><button class="complete">Complete</button>`;
    taskList.appendChild(li);
    input.value = ''; // Clear the input field
  }
}

function handleTaskClick(event) {
  if (event.target.classList.contains('remove')) {
    var task = event.target.parentElement;
    task.parentElement.removeChild(task);
  } else if (event.target.classList.contains('complete')) {
    var task = event.target.parentElement;
    task.querySelector('span').style.textDecoration = 'line-through';
    event.target.style.color = '#ccc';
    event.target.disabled = true;
  }
}