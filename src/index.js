import '../src/style.css'
import createTodo, { createProject, projectObject, projectsManager } from '../factory'
import DOMtoDo, {addNewQuery,defaultToDo, changeNote, changeProject,changeToDo, drawTask,
    taskManager} from '../DOM'
    import { compareAsc, format, parseISO } from 'date-fns'

const home = projectObject('home')
const today = projectObject('today')
const thisWeek = projectObject('thisWeek')
const Study = projectObject('Study')
projectsManager.addProject(home)
projectsManager.addProject(today)
projectsManager.addProject(thisWeek)
projectsManager.addProject(Study)
let todayDate = format(new Date(), 'yyyy-MM-dd')
Study.tasks[0] = createTodo('red','asd',todayDate,'low')
projectsManager.projects[0].isActive = 1
const homeTasksBtn = document.querySelector('#home')
const todayTasksBtn = document.querySelector('#today')
const studyTasksBtn = document.querySelector('#Study')
taskManager.drawAllTasks(home.tasks, home.id)
for(let i=0; i<projectsManager.projects.length; i++)
    if(projectsManager.projects[i].isActive === 1)
   projectsManager.projects[i].isActive = 0
   projectsManager.projects[0].isActive = 1

homeTasksBtn.addEventListener('click', function(){
    taskManager.drawAllTasks(home.tasks, home.id)
    for(let i=0; i<projectsManager.projects.length; i++)
       if(projectsManager.projects[i].isActive === 1)
       projectsManager.projects[i].isActive = 0
       projectsManager.projects[0].isActive = 1
})
    
studyTasksBtn.addEventListener('click', function(){
    console.log(projectsManager.projects)
    taskManager.drawAllTasks(Study.tasks, Study.id)
    for(let i=0; i<projectsManager.projects.length; i++)
       if(projectsManager.projects[i].isActive === 1)
       projectsManager.projects[i].isActive = 0
    Study.isActive = 1
})

todayTasksBtn.addEventListener('click', function() {
    taskManager.clearMain()
    for(let i =0; i < projectsManager.projects.length; i++)
    {
            if(projectsManager.projects[i].id !== 'today' &&
            projectsManager.projects[i].id !== 'thisWeek')
            {
                for(let c = 0 ; c<projectsManager.projects[i].tasks.length; c++)
                    if(compareAsc(parseISO(todayDate), parseISO(projectsManager.projects[i].tasks[c].dateDue)) === 0){
                        drawTask(projectsManager.projects[i].tasks[c], projectsManager.projects[i].id)
                    }
            }
        }
})
changeNote()
changeToDo()
changeProject()
addNewQuery()
localStorage.setItem('myVariable1', JSON.stringify(home))
let mynewVariable = JSON.parse(localStorage.getItem('myVariable1'))
console.log(mynewVariable)
