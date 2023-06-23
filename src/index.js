import "../src/style.css";
import createTodo, {
  createProject,
  projectObject,
  projectsManager,
} from "../factory";
import DOMtoDo, {
  addNewQuery,
  defaultToDo,
  changeNote,
  changeProject,
  changeToDo,
  drawTask,
  loadProjects,
  taskManager,
} from "../DOM";
import { compareAsc, format, parseISO } from "date-fns";

loadProjects();
let todayDate = format(new Date(), "yyyy-MM-dd");
const homeTasksBtn = document.querySelector("#home");
const todayTasksBtn = document.querySelector("#today");
const studyTasksBtn = document.querySelector("#Study");
homeTasksBtn.addEventListener("click", function () {
  taskManager.drawAllTasks(
    projectsManager.projects[0].tasks,
    projectsManager.projects[0].id
  );
  for (let i = 0; i < projectsManager.projects.length; i++)
    if (projectsManager.projects[i].isActive === 1)
      projectsManager.projects[i].isActive = 0;
  projectsManager.projects[0].isActive = 1;
});

studyTasksBtn.addEventListener("click", function () {
  taskManager.drawAllTasks(
    projectsManager.projects[3].tasks,
    projectsManager.projects[3].id
  );
  for (let i = 0; i < projectsManager.projects.length; i++)
    if (projectsManager.projects[i].isActive === 1)
      projectsManager.projects[i].isActive = 0;
  projectsManager.projects[3].isActive = 1;
});

todayTasksBtn.addEventListener("click", function () {
  taskManager.clearMain();
  for (let i = 0; i < projectsManager.projects.length; i++) {
    if (
      projectsManager.projects[i].id !== "today" &&
      projectsManager.projects[i].id !== "thisWeek"
    ) {
      for (let c = 0; c < projectsManager.projects[i].tasks.length; c++)
        if (
          compareAsc(
            parseISO(todayDate),
            parseISO(projectsManager.projects[i].tasks[c].dateDue)
          ) === 0
        ) {
          drawTask(
            projectsManager.projects[i].tasks[c],
            projectsManager.projects[i].id
          );
        }
    }
  }
});
changeNote();
changeToDo();
changeProject();
addNewQuery();
