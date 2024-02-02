document.addEventListener("DOMContentLoaded", () => {
  // your code here


const form = document.querySelector('#create-task-form')
const description = document.querySelector('#new-task-description')
const ul = document.querySelector(`#task`)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = description.value;
  const li = document.createElement('li');
  li.innerText = task

  const button = document.createElement('button')
  button.innerText = 'x'

button.addEventListener('click', (e) => {})
li.appendChild(button)
  ul.append(li)
  e.target.reset()
})


});