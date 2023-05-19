import '../src/style.css'
import createTodo, { createProject } from '../factory'
import DOMtoDo, {addNewQuery, changeNote, changeProject,changeToDo, drawTask} from '../DOM'
const home = []
const today = []
const thisWeek = []
const study = []
const pero = createTodo('Pero')
changeNote()
changeToDo()
changeProject()
addNewQuery()
drawTask(pero)
drawTask(pero)