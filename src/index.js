import '../src/style.css'
import createTodo, { createProject, projectObject, projectsManager } from '../factory'
import DOMtoDo, {addNewQuery, changeNote, changeProject,changeToDo, drawTask,
    taskManager} from '../DOM'
const home = projectObject('home')
const today = projectObject('today')
const thisWeek = projectObject('thisWeek')
const Study = projectObject('Study')
projectsManager.addProject(home)
projectsManager.addProject(today)
projectsManager.addProject(thisWeek)
projectsManager.addProject(Study)
let allNewProjects = {}
function setProject(name, value ){
    allNewProjects[name] = value
}
function getProject(name) {
    return allNewProjects[name]
}
Study.tasks[0] = createTodo('red','asd','11111','low')
let breakDate = []
let todayDate = new Date()
projectsManager.projects[0].isActive = 1
const addTaskBtn = document.querySelector('.submit-form')
const homeTasksBtn = document.querySelector('#home')
const todayTasksBtn = document.querySelector('#today')
const studyTasksBtn = document.querySelector('#Study')
addTaskBtn.addEventListener('click', function () {
    const newTask = taskManager.makeNewTask()
    for(let i=0; i<projectsManager.projects.length; i++)
        if(projectsManager.projects[i].isActive === 1)
    {
    projectsManager.projects[i].tasks.push(newTask)
    taskManager.drawAllTasks(projectsManager.projects[i].tasks)
    }
}
)

homeTasksBtn.addEventListener('click', function(){
    taskManager.drawAllTasks(home.tasks)
    for(let i=0; i<projectsManager.projects.length; i++)
       if(projectsManager.projects[i].isActive === 1)
       projectsManager.projects[i].isActive = 0
       projectsManager.projects[0].isActive = 1
})
    
studyTasksBtn.addEventListener('click', function(){
    console.log(projectsManager.projects)
    taskManager.drawAllTasks(Study.tasks)
    for(let i=0; i<projectsManager.projects.length; i++)
       if(projectsManager.projects[i].isActive === 1)
       projectsManager.projects[i].isActive = 0
    Study.isActive = 1
})

todayTasksBtn.addEventListener('click', function() {
    for( let i =0; i<home.length; i++){
            console.log(todayDate.getFullYear())
            console.log(todayDate.getMonth() + 1)
            console.log(todayDate.getDate())
            breakDate = home[i].dateDue.split('-')
            console.log(parseInt(breakDate[0]))
            console.log(parseInt(breakDate[1]))
            console.log(parseInt(breakDate[2]))
    }
})
changeNote()
changeToDo()
changeProject()
addNewQuery()
console.log(projectsManager.projects)
