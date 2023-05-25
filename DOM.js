const form = document.querySelector('.query-form')
const mainContent = document.querySelector('.main-content')
const homeTasksBtn = document.querySelector('#home')
import createTodo, { createProject , projectsManager} from './factory'
import { format, parseISO } from 'date-fns'

export const taskManager = (() => {
const makeNewTask = () => {
    const newTaskName = document.querySelector('#taskTitle')
    const newTaskDetails = document.querySelector('#taskDetails')
    const newTaskDate = document.querySelector('#duedate')
    const priorityButtons = document.getElementsByName('priority')
    let selectedPriority = 'low'
    for(let i=0; i< priorityButtons.length; i++){
        if(priorityButtons[i].checked) {
            selectedPriority = priorityButtons[i].value
            break;
        }
    }
    const newTask = createTodo(newTaskName.value, newTaskDetails.value, newTaskDate.value, selectedPriority)
    return newTask
    }

const drawAllTasks = (project, projectID) => {
    mainContent.replaceChildren()
    for(let i=0;i<project.length;i++)
        drawTask(project[i], projectID)
}
const clearMain = () => {
    mainContent.replaceChildren()
}

return {makeNewTask, drawAllTasks, clearMain,}
})()

export default function DOMtoDo () {

}


export function drawTask(toDo, proID) { 
    const deleteImg = document.createElement('i')
    const editImg = document.createElement('i')
    deleteImg.classList.add('fa-solid')
    deleteImg.classList.add('fa-trash-can')
    editImg.classList.add('fa-solid')
    editImg.classList.add('fa-pen-to-square')
    const divLeft = document.createElement('div')
    const divRight = document.createElement('div')
    const newLine = document.createElement('div')
    const newCheckbox = document.createElement('input')
    newCheckbox.type = 'checkbox'
    const newName = document.createElement('div')
    newName.textContent = toDo.name
    const newDetailsBtn = document.createElement('button')
    newDetailsBtn.textContent = 'DETAILS'
    const newDate = document.createElement('div')
    const newEditBtn = document.createElement('button')
    newEditBtn.appendChild(editImg)
    const newDeleteBtn = document.createElement('button')
    newEditBtn.classList.add('contentBtn')
    newDeleteBtn.classList.add('contentBtn')
    newDetailsBtn.classList.add('details-button')
    newDeleteBtn.appendChild(deleteImg)
    divLeft.appendChild(newCheckbox)
    divLeft.appendChild(newName)
    divRight.appendChild(newDetailsBtn)
    divRight.appendChild(newDate)
    divRight.appendChild(newEditBtn)
    divRight.appendChild(newDeleteBtn)
    newLine.appendChild(divLeft)
    newLine.appendChild(divRight)
    newDate.textContent = (format(parseISO(toDo.dateDue), 'MMM do'))
    newDate.classList.add('line-date')
    newLine.classList.add('main-content-line')
    if(toDo.priority === 'low'){
        newLine.classList.add('prio-low')
    }
    else if(toDo.priority === 'medium')
    {
        newLine.classList.add('prio-medium')
    }
    else if(toDo.priority === 'high')
    {
        newLine.classList.add('prio-high')
    }
    divLeft.classList.add('main-content-line-div')
    divRight.classList.add('main-content-line-div')
    mainContent.appendChild(newLine)
    newCheckbox.addEventListener('click', function() {
        if(newCheckbox.checked){
            newDate.classList.add('fade')
            newName.classList.add('fade')
            newDetailsBtn.classList.add('fadeBtn')
            editImg.classList.add('fadeBtn')
            deleteImg.classList.add('fadeBtn')
        }
        else{
            newDate.classList.remove('fade')
            newName.classList.remove('fade')
            newDetailsBtn.classList.remove('fadeBtn')
            editImg.classList.remove('fadeBtn')
            deleteImg.classList.remove('fadeBtn')
        }
    })
    newDeleteBtn.addEventListener('click', function() {
        console.log(toDo, proID)
    })
    newDetailsBtn.addEventListener('click', function () {
        const displayContainer = document.querySelector('.details-container')
        const displayTitle = document.querySelector('.details-title')
        const exitDisplayBtn = document.querySelector('.details-exitBtn')
        const displayPrio = document.querySelector('.details-priority')
        const displayDate = document.querySelector('.details-date')
        const displayDetail = document.querySelector('.details-details')
        const displayProject = document.querySelector('.details-project')
        displayProject.textContent = `Project:   ${proID}`
        displayTitle.textContent = toDo.name
        exitDisplayBtn.textContent = 'X'
        displayPrio.textContent = `Priority:   ${toDo.priority}`
        displayDate.textContent = `Due Date:   ${toDo.dateDue}`
        displayDetail.textContent = `Details:   ${toDo.details}`
        exitDisplayBtn.addEventListener('click', function() {
            displayContainer.style.display = 'none'
        })
        displayContainer.style.display = 'block'
    })
}

export function defaultToDo() {
    const taskTitle = document.querySelector('#taskTitle')
    const taskDetails = document.querySelector('#taskDetails')
    const duedate = document.querySelector('#duedate')
    const radioButtons = document.getElementsByName('priority')
    radioButtons.forEach((radioBtn) => {
        radioBtn.checked = false
    })
    duedate.value = ''
    taskDetails.value = ''
    taskTitle.value = ''
    form.style.display = 'none'
}
export function changeToDo () { 
    const exitBtn = document.querySelector('#close-formBtn')
    exitBtn.addEventListener('click', function() {
        form.style.display = 'none'
    })
    const toDoBtn = document.querySelector('#changeToDoBtn')
    toDoBtn.addEventListener('click', drawTodo)
    }

    let hasEventListener = 0
function drawTodo() {
        if(form.style.display !== 'block')
            form.style.display = 'block'
        const formMain = document.querySelector('.form-main')
        const formFooter = document.querySelector('.form-footer')
        formMain.replaceChildren()
        formFooter.replaceChildren()
        const todoTitle = document.createElement('input')
        todoTitle.setAttribute('required', '')
        const todoDetails = document.createElement('textarea')
        const todoDate = document.createElement('input')
        todoDate.setAttribute('required', '')
        const todoPrioLow = document.createElement('input')
        todoPrioLow.setAttribute('required', '')
        const todoPrioMedium = document.createElement('input')
        const todoPrioHigh = document.createElement('input')
        const footerDiv1 = document.createElement('div')
        const footerDiv2 = document.createElement('div')
        const todoSubmitBtn = document.createElement('input')
        const todoLabelLow = document.createElement('label')
        const todoLabelMedium= document.createElement('label')
        const todoLabelHigh = document.createElement('label')
        todoLabelLow.textContent = 'Low'
        todoLabelMedium.textContent = 'Medium'
        todoLabelHigh.textContent = 'High'
        todoSubmitBtn.type = 'button'
        todoTitle.type = 'text'
        todoTitle.name = 'title'
        todoTitle.id = 'taskTitle'
        todoTitle.placeholder= 'Title: Pay bills'
        todoDetails.rows = '8'
        todoDetails.id = 'taskDetails'
        todoDetails.placeholder = 'Details: e.g internet, phone, rent.'
        footerDiv1.textContent = 'Due Date: '
        todoDate.type = 'date'
        todoDate.id = 'duedate'
        footerDiv2.textContent = 'Priority:'
        todoPrioLow.type = 'radio'
        todoPrioLow.name = 'priority'
        todoPrioLow.value = 'low'
        todoPrioMedium.type = 'radio'
        todoPrioMedium.name = 'priority'
        todoPrioMedium.value = 'medium'
        todoPrioHigh.type = 'radio'
        todoPrioHigh.name = 'priority'
        todoPrioHigh.value = 'high'
        todoSubmitBtn.classList.add('submit-form')
        todoSubmitBtn.type = 'submit'
        todoSubmitBtn.textContent = 'ADD TO DO'
        todoLabelHigh.classList.add('priority-label-high')
        todoLabelMedium.classList.add('priority-label-medium')
        todoLabelLow.classList.add('priority-label-low')
        footerDiv2.classList.add('radio-buttons')
        todoLabelHigh.addEventListener('click', function() {
        if(todoPrioHigh.checked) {
            todoLabelHigh.classList.add('priority-label-high-selected')
            todoLabelHigh.classList.remove('priority-label-high')
        }
        else {
            todoLabelHigh.classList.remove('priority-label-high-selected')
            todoLabelHigh.classList.add('priority-label-high')
            todoLabelMedium.classList.remove('priority-label-medium-selected')
            todoLabelMedium.classList.add('priority-label-medium')
            todoLabelLow.classList.remove('priority-label-low-selected')
            todoLabelLow.classList.add('priority-low-high')
        }
    })
    todoLabelMedium.addEventListener('click', function() {
        if(todoPrioMedium.checked) {
            todoLabelMedium.classList.add('priority-label-medium-selected')
            todoLabelMedium.classList.remove('priority-label-medium')
        }
        else {
            todoLabelMedium.classList.remove('priority-label-medium-selected')
            todoLabelMedium.classList.add('priority-label-medium')
            todoLabelHigh.classList.remove('priority-label-high-selected')
            todoLabelHigh.classList.add('priority-label-high')
            todoLabelLow.classList.remove('priority-label-low-selected')
            todoLabelLow.classList.add('priority-low-high')
        }
    })
    todoLabelLow.addEventListener('click', function() {
        if(todoPrioLow.checked) {
            todoLabelLow.classList.add('priority-label-low-selected')
            todoLabelLow.classList.remove('priority-low-high')
        }
        else {
            todoLabelLow.classList.remove('priority-label-low-selected')
            todoLabelLow.classList.add('priority-low-high')
            todoLabelHigh.classList.remove('priority-label-high-selected')
            todoLabelHigh.classList.add('priority-label-high')
            todoLabelMedium.classList.remove('priority-label-medium-selected')
            todoLabelMedium.classList.add('priority-label-medium')
        }
    })
        todoLabelHigh.appendChild(todoPrioHigh)
        todoLabelMedium.appendChild(todoPrioMedium)
        todoLabelLow.appendChild(todoPrioLow)
        footerDiv1.appendChild(todoDate)
        footerDiv2.appendChild(todoLabelLow)
        footerDiv2.appendChild(todoLabelMedium)
        footerDiv2.appendChild(todoLabelHigh)
        formMain.appendChild(todoTitle)
        formMain.appendChild(todoDetails)
        formFooter.appendChild(footerDiv1)
        formFooter.appendChild(footerDiv2)
        formFooter.appendChild(todoSubmitBtn)
        if( hasEventListener === 0){
        form.addEventListener('submit', function(event){
            event.preventDefault()
            const newTask = taskManager.makeNewTask()
            for(let i=0; i<projectsManager.projects.length; i++)
            if(projectsManager.projects[i].isActive === 1)
        {
        projectsManager.projects[i].tasks.push(newTask)
        taskManager.drawAllTasks(projectsManager.projects[i].tasks, projectsManager.projects[i].id)
        todoTitle.value = ''
        todoDetails.value = ''
        todoDate.value = ''
        todoPrioHigh.checked = false
        todoPrioLow.checked = false
        todoPrioMedium.checked = false
        form.style.display = 'none'
        }
})
}
hasEventListener++
}
export function changeProject () {
    const projectBtn = document.querySelector('#changeProjectBtn')
    projectBtn.addEventListener('click', function () {
    const formMain = document.querySelector('.form-main')
    const formFooter = document.querySelector('.form-footer')
    formMain.replaceChildren()
    formFooter.replaceChildren()
    const projectTitle = document.createElement('input')
    const addProjectBtn = document.createElement('button')
    addProjectBtn.type = 'button'
    addProjectBtn.textContent = 'CREATE PROJECT'
    addProjectBtn.classList.add('submit-projectBtn')
    projectTitle.placeholder = 'Title: House Renovation'
    projectTitle.classList.add('project-title')
    projectTitle.setAttribute('required', '')
    formMain.appendChild(projectTitle)
    formFooter.appendChild(addProjectBtn)
    addProjectBtn.addEventListener('click', function () {
            const projects = document.querySelector('.projects')
            const newProject = document.createElement('button')
            const projectTitle = document.querySelector('.project-title')
            if(projectTitle.value === '')
            {
                alert('Project title cannot be empty!')
                return
            }
            newProject.textContent = projectTitle.value
            newProject.setAttribute('id', projectTitle.value)
            projects.appendChild(newProject)
            const newProjectBtn = document.querySelector('#' + projectTitle.value)
            projectsManager.addEListener(newProjectBtn)
            setProject(projectTitle.value, projectsManager.makeObject(newProjectBtn))
            projectsManager.projects.push(getProject(projectTitle.value))
            projectTitle.value = ''
            form.style.display='none'
        })
})
}
let allNewProjects = {}
function setProject(name, value ){
    allNewProjects[name] = value
}
function getProject(name) {
    return allNewProjects[name]
}

export function changeNote () {
    const noteBtn = document.querySelector('#changeNoteBtn')
    noteBtn.addEventListener('click', function() {
    const formMain = document.querySelector('.form-main')
    const formFooter = document.querySelector('.form-footer')
    formMain.replaceChildren()
    formFooter.replaceChildren()
    const noteTitle = document.createElement('input')
    noteTitle.placeholder = 'Title'
    const noteDetails = document.createElement('textarea')
    noteDetails.placeholder = 'Details'
    const noteAddBtn = document.createElement('button')
    noteAddBtn.textContent = 'CREATE NOTE'
    noteAddBtn.type = 'button'
    formMain.appendChild(noteTitle)
    formMain.appendChild(noteDetails)
    formFooter.appendChild(noteAddBtn)
})
}

export function addNewQuery () {
    const newBtn = document.querySelector('.addNewBtn')
    newBtn.removeEventListener('click', drawTodo)
    newBtn.addEventListener('click', drawTodo)
}