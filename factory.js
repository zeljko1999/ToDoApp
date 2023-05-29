import { taskManager } from "./DOM"
export default function createTodo (name, details, dateDue, priority) {
  return { name, details, dateDue, priority}
}

export function createProject (name) {
  return { name }
}
export const projectObject = (name) => { 
  let project = JSON.parse(localStorage.getItem(name))
  if(project === null)
    {
    const tasks = []
    const isActive = 0
    const id = name
  return { tasks, isActive, id }
    }
    else
    {
    const tasks = project.tasks
    const isActive = project.isActive
    const id = project.id
    return { tasks, isActive, id }
    }
}

export const projectsManager = (() => {
  let projects = []
  let i =0;
  const addProject = (project) => {
    projects.push(project)
  } 
  const addEListener = (project) => {
    project.addEventListener('click', function(){
      for(i = 0;i<projectsManager.projects.length; i++)
        projectsManager.projects[i].isActive = 0;
      for(i = 0; i < projectsManager.projects.length; i++)
        {
          if(projectsManager.projects[i].id === project.id)
            break;
        }
      taskManager.drawAllTasks(projectsManager.projects[i].tasks, projectsManager.projects[i].id)
      projectsManager.projects[i].isActive = 1
    })
  }
  const makeObject = (project) => {
    const newObject = projectObject(project.id)
    return newObject
  }
  return {
    projects, addProject, addEListener, makeObject
  }
})()