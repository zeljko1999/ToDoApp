/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./DOM.js":
/*!****************!*\
  !*** ./DOM.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewQuery: () => (/* binding */ addNewQuery),
/* harmony export */   changeNote: () => (/* binding */ changeNote),
/* harmony export */   changeProject: () => (/* binding */ changeProject),
/* harmony export */   changeToDo: () => (/* binding */ changeToDo),
/* harmony export */   "default": () => (/* binding */ DOMtoDo),
/* harmony export */   drawTask: () => (/* binding */ drawTask),
/* harmony export */   taskManager: () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./factory.js");
const form = document.querySelector('.query-form')
const mainContent = document.querySelector('.main-content')
const homeTasksBtn = document.querySelector('#home')
;

const taskManager = (() => {
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
    const newTask = (0,_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(newTaskName.value, newTaskDetails.value, newTaskDate.value, selectedPriority)
    return newTask
    }

const drawAllTasks = (project) => {
    mainContent.replaceChildren()
    for(let i=0;i<project.length;i++)
        drawTask(project[i])
}

return {makeNewTask, drawAllTasks}
})()

function DOMtoDo () {

}
function addNewQuery () {
    const newBtn = document.querySelector('.addNewBtn')
    newBtn.addEventListener('click', function() {
    form.style.display = 'block'
})
}

function drawTask(toDo) { 
    const deleteImg = document.createElement('img')
    const editImg = document.createElement('img')
    deleteImg.src = '../src/icons8-delete-100.png'
    editImg.src = '../src/icons8-edit-80.png'
    deleteImg.classList.add('icon')
    editImg.classList.add('icon')
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
    newDeleteBtn.appendChild(deleteImg)
    divLeft.appendChild(newCheckbox)
    divLeft.appendChild(newName)
    divRight.appendChild(newDetailsBtn)
    divRight.appendChild(newDate)
    divRight.appendChild(newEditBtn)
    divRight.appendChild(newDeleteBtn)
    newLine.appendChild(divLeft)
    newLine.appendChild(divRight)
    newLine.classList.add('main-content-line')
    divLeft.classList.add('main-content-line-div')
    divRight.classList.add('main-content-line-div')
    mainContent.appendChild(newLine)
}

function changeToDo () { 
    const exitBtn = document.querySelector('#close-formBtn')
    exitBtn.addEventListener('click', function() {
        form.style.display = 'none'
    })

    const toDoBtn = document.querySelector('#changeToDoBtn')
    toDoBtn.addEventListener('click', function() {
    const formMain = document.querySelector('.form-main')
    const formFooter = document.querySelector('.form-footer')
    formMain.replaceChildren()
    formFooter.replaceChildren()
    const todoTitle = document.createElement('input')
    const todoDetails = document.createElement('textarea')
    const todoDate = document.createElement('input')
    const todoPrioLow = document.createElement('input')
    const todoPrioMedium = document.createElement('input')
    const todoPrioHigh = document.createElement('input')
    const footerDiv1 = document.createElement('div')
    const footerDiv2 = document.createElement('div')
    const todoSubmitBtn = document.createElement('button')
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
    footerDiv2.textContent = 'Priority: '
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
    todoSubmitBtn.textContent = 'ADD TO DO'
    footerDiv1.appendChild(todoDate)
    footerDiv2.appendChild(todoPrioLow)
    footerDiv2.appendChild(todoPrioMedium)
    footerDiv2.appendChild(todoPrioHigh)
    formMain.appendChild(todoTitle)
    formMain.appendChild(todoDetails)
    formFooter.appendChild(footerDiv1)
    formFooter.appendChild(footerDiv2)
    footerDiv2.appendChild(todoSubmitBtn)
    todoSubmitBtn.addEventListener('click', function(){
        const newTask = taskManager.makeNewTask()
    for(let i=0; i<_factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.projects.length; i++)
        if(_factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.projects[i].isActive === 1)
    {
    _factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.projects[i].tasks.push(newTask)
    taskManager.drawAllTasks(_factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.projects[i].tasks)
    }
    })
})
}

function changeProject () {
    const projectBtn = document.querySelector('#changeProjectBtn')
    projectBtn.addEventListener('click', function () {
    const formMain = document.querySelector('.form-main')
    const formFooter = document.querySelector('.form-footer')
    formMain.replaceChildren()
    formFooter.replaceChildren()
    const projectTitle = document.createElement('input')
    const addProjectBtn = document.createElement('button')
    addProjectBtn.textContent = 'CREATE PROJECT'
    addProjectBtn.classList.add('submit-projectBtn')
    projectTitle.placeholder = 'Title: House Renovation'
    projectTitle.classList.add('project-title')
    formMain.appendChild(projectTitle)
    formFooter.appendChild(addProjectBtn)
    addProjectBtn.addEventListener('click', function () {
            const projects = document.querySelector('.projects')
            const newProject = document.createElement('button')
            const projectTitle = document.querySelector('.project-title')
            newProject.textContent = projectTitle.value
            newProject.setAttribute('id', projectTitle.value)
            projects.appendChild(newProject)
            const newProjectBtn = document.querySelector('#' + projectTitle.value)
            _factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.addEListener(newProjectBtn)
            setProject(projectTitle.value, _factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.makeObject(newProjectBtn))
            _factory__WEBPACK_IMPORTED_MODULE_0__.projectsManager.projects.push(getProject(projectTitle.value))
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

function changeNote () {
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
    formMain.appendChild(noteTitle)
    formMain.appendChild(noteDetails)
    formFooter.appendChild(noteAddBtn)
})
}


/***/ }),

/***/ "./factory.js":
/*!********************!*\
  !*** ./factory.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   "default": () => (/* binding */ createTodo),
/* harmony export */   projectObject: () => (/* binding */ projectObject),
/* harmony export */   projectsManager: () => (/* binding */ projectsManager)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./DOM.js");

function createTodo (name, details, dateDue, priority) {
  return { name, details, dateDue, priority}
}

function createProject (name) {
  return { name }
}
const projectObject = (name) => { 
  const tasks = []
  const isActive = 0
  const id = name
  return { tasks, isActive, id }
}

const projectsManager = (() => {
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
      _DOM__WEBPACK_IMPORTED_MODULE_0__.taskManager.drawAllTasks(projectsManager.projects[i].tasks)
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content{\n    display:grid;\n    grid-template-rows: 2fr 14fr 1fr;\n    grid-template-columns: 1fr 7fr;\n    height: 100vh;\n}\n\n.header{\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: rgb(88, 23, 23);\n}\n\n.sidebar{\n    grid-area: 2 / 1 / 3 / 2;\n    display:flex;\n    flex-direction:column;\n    background-color: rgb(28, 29, 30);\n    border-right: 1px black solid;\n}\n\n.main{\n    grid-area: 2 / 2 / 3 / 3;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    background-color: grey;\n}\n.main-content{\n    background-color:rgb(28, 29, 30);;\n    height: 100%;\n    width:100%;\n    padding-left: 40px;\n    padding-right: 40px;\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.footer{\n    grid-area: 3 / 1 / 4 / 3;\n}\n.projects{\n    display:flex;\n    flex-direction:column;\n}\n.query-form{\n    display:block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\n    z-index: 9999;\n}\n.form-header{\n    grid-area: 1/1/2/3;\n    display:flex;\n    justify-content: space-between;\n}\n.form-sidebar{\n    grid-area: 2/1/4/2;\n}\n.form-main{\n    grid-area: 2/2/3/3;\n    display:flex;\n    flex-direction: column;\n}\n.form-footer{\n    grid-area:3/2/4/3;\n}\n.formContent {\n    width: 600px;\n    height: 350px;\n    display:grid;\n    grid-template-rows: 40px 250px 100px;\n    grid-template-columns: 70px 1fr;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 5px;\n  }\n\n  .main-content-line{\n    display:flex;\n    justify-content: space-between;\n    padding: 6px;\n    border-left: 3px red solid;\n    color: white;\n    background-color: rgb(32, 34, 36);\n  }\n  .main-content-line:hover{\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n\n  .main-content-line-div{\n    display:flex;\n    gap: 12px;\n  }\n  .main-content-line-div > button > .icon {\n    width: 15px;\n    height: 15px;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,gCAAgC;IAChC,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,qBAAqB;IACrB,iCAAiC;IACjC,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;IACpB,sBAAsB;AAC1B;AACA;IACI,gCAAgC;IAChC,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC,EAAE,gCAAgC;IACtE,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,+BAA+B;IAC/B,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sBAAsB;IACtB,aAAa;IACb,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,8BAA8B;IAC9B,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,iCAAiC;EACnC;EACA;IACE,2CAA2C;EAC7C;;EAEA;IACE,YAAY;IACZ,SAAS;EACX;EACA;IACE,WAAW;IACX,YAAY;EACd","sourcesContent":["#content{\n    display:grid;\n    grid-template-rows: 2fr 14fr 1fr;\n    grid-template-columns: 1fr 7fr;\n    height: 100vh;\n}\n\n.header{\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: rgb(88, 23, 23);\n}\n\n.sidebar{\n    grid-area: 2 / 1 / 3 / 2;\n    display:flex;\n    flex-direction:column;\n    background-color: rgb(28, 29, 30);\n    border-right: 1px black solid;\n}\n\n.main{\n    grid-area: 2 / 2 / 3 / 3;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    background-color: grey;\n}\n.main-content{\n    background-color:rgb(28, 29, 30);;\n    height: 100%;\n    width:100%;\n    padding-left: 40px;\n    padding-right: 40px;\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.footer{\n    grid-area: 3 / 1 / 4 / 3;\n}\n.projects{\n    display:flex;\n    flex-direction:column;\n}\n.query-form{\n    display:block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\n    z-index: 9999;\n}\n.form-header{\n    grid-area: 1/1/2/3;\n    display:flex;\n    justify-content: space-between;\n}\n.form-sidebar{\n    grid-area: 2/1/4/2;\n}\n.form-main{\n    grid-area: 2/2/3/3;\n    display:flex;\n    flex-direction: column;\n}\n.form-footer{\n    grid-area:3/2/4/3;\n}\n.formContent {\n    width: 600px;\n    height: 350px;\n    display:grid;\n    grid-template-rows: 40px 250px 100px;\n    grid-template-columns: 70px 1fr;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 5px;\n  }\n\n  .main-content-line{\n    display:flex;\n    justify-content: space-between;\n    padding: 6px;\n    border-left: 3px red solid;\n    color: white;\n    background-color: rgb(32, 34, 36);\n  }\n  .main-content-line:hover{\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n\n  .main-content-line-div{\n    display:flex;\n    gap: 12px;\n  }\n  .main-content-line-div > button > .icon {\n    width: 15px;\n    height: 15px;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory */ "./factory.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOM */ "./DOM.js");



const home = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.projectObject)('home')
const today = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.projectObject)('today')
const thisWeek = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.projectObject)('thisWeek')
const Study = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.projectObject)('Study')
_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.addProject(home)
_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.addProject(today)
_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.addProject(thisWeek)
_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.addProject(Study)
let allNewProjects = {}
function setProject(name, value ){
    allNewProjects[name] = value
}
function getProject(name) {
    return allNewProjects[name]
}
Study.tasks[0] = (0,_factory__WEBPACK_IMPORTED_MODULE_1__["default"])('red','asd','11111','low')
let breakDate = []
let todayDate = new Date()
_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[0].isActive = 1
const addTaskBtn = document.querySelector('.submit-form')
const homeTasksBtn = document.querySelector('#home')
const todayTasksBtn = document.querySelector('#today')
const studyTasksBtn = document.querySelector('#Study')
addTaskBtn.addEventListener('click', function () {
    const newTask = _DOM__WEBPACK_IMPORTED_MODULE_2__.taskManager.makeNewTask()
    for(let i=0; i<_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects.length; i++)
        if(_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].isActive === 1)
    {
    _factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].tasks.push(newTask)
    _DOM__WEBPACK_IMPORTED_MODULE_2__.taskManager.drawAllTasks(_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].tasks)
    }
}
)

homeTasksBtn.addEventListener('click', function(){
    _DOM__WEBPACK_IMPORTED_MODULE_2__.taskManager.drawAllTasks(home.tasks)
    for(let i=0; i<_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects.length; i++)
       if(_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].isActive === 1)
       _factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].isActive = 0
       _factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[0].isActive = 1
})
    
studyTasksBtn.addEventListener('click', function(){
    console.log(_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects)
    _DOM__WEBPACK_IMPORTED_MODULE_2__.taskManager.drawAllTasks(Study.tasks)
    for(let i=0; i<_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects.length; i++)
       if(_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].isActive === 1)
       _factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects[i].isActive = 0
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
;(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.changeNote)()
;(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.changeToDo)()
;(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.changeProject)()
;(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.addNewQuery)()
console.log(_factory__WEBPACK_IMPORTED_MODULE_1__.projectsManager.projects)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLDhEQUF3QjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUF3QjtBQUM1QixpQkFBaUIsRUFBRSxxRUFBK0IsRUFBRTtBQUNwRCxVQUFVLDhEQUF3QjtBQUNsQyxPQUFPLDhEQUF3QjtBQUMvQixPQUFPLDBFQUFvQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdCQUFnQiw4REFBd0I7QUFDeEMsSUFBSSwwREFBd0I7QUFDNUIsaUJBQWlCLEVBQUUscUVBQStCLEVBQUU7QUFDcEQsVUFBVSw4REFBd0I7QUFDbEMsT0FBTyw4REFBd0I7QUFDL0I7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpREFBVTtBQUNWLGlEQUFVO0FBQ1Ysb0RBQWE7QUFDYixrREFBVztBQUNYLFlBQVksOERBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXJ5LWZvcm0nKVxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JylcbmNvbnN0IGhvbWVUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJylcbmltcG9ydCBjcmVhdGVUb2RvLCB7IGNyZWF0ZVByb2plY3QgLCBwcm9qZWN0c01hbmFnZXJ9IGZyb20gJy4vZmFjdG9yeSdcblxuZXhwb3J0IGNvbnN0IHRhc2tNYW5hZ2VyID0gKCgpID0+IHtcbmNvbnN0IG1ha2VOZXdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tUaXRsZScpXG4gICAgY29uc3QgbmV3VGFza0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0RldGFpbHMnKVxuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKVxuICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpXG4gICAgbGV0IHNlbGVjdGVkUHJpb3JpdHkgPSAnbG93J1xuICAgIGZvcihsZXQgaT0wOyBpPCBwcmlvcml0eUJ1dHRvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihwcmlvcml0eUJ1dHRvbnNbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcmlvcml0eSA9IHByaW9yaXR5QnV0dG9uc1tpXS52YWx1ZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRvZG8obmV3VGFza05hbWUudmFsdWUsIG5ld1Rhc2tEZXRhaWxzLnZhbHVlLCBuZXdUYXNrRGF0ZS52YWx1ZSwgc2VsZWN0ZWRQcmlvcml0eSlcbiAgICByZXR1cm4gbmV3VGFza1xuICAgIH1cblxuY29uc3QgZHJhd0FsbFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdC5sZW5ndGg7aSsrKVxuICAgICAgICBkcmF3VGFzayhwcm9qZWN0W2ldKVxufVxuXG5yZXR1cm4ge21ha2VOZXdUYXNrLCBkcmF3QWxsVGFza3N9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERPTXRvRG8gKCkge1xuXG59XG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3UXVlcnkgKCkge1xuICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGROZXdCdG4nKVxuICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbn0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3VGFzayh0b0RvKSB7IFxuICAgIGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZGVsZXRlSW1nLnNyYyA9ICcuLi9zcmMvaWNvbnM4LWRlbGV0ZS0xMDAucG5nJ1xuICAgIGVkaXRJbWcuc3JjID0gJy4uL3NyYy9pY29uczgtZWRpdC04MC5wbmcnXG4gICAgZGVsZXRlSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxuICAgIGVkaXRJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gICAgY29uc3QgZGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG5ld0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG5ld0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5ld0NoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3TmFtZS50ZXh0Q29udGVudCA9IHRvRG8ubmFtZVxuICAgIGNvbnN0IG5ld0RldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld0RldGFpbHNCdG4udGV4dENvbnRlbnQgPSAnREVUQUlMUydcbiAgICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBuZXdFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBuZXdFZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJbWcpXG4gICAgY29uc3QgbmV3RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBuZXdEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKVxuICAgIGRpdkxlZnQuYXBwZW5kQ2hpbGQobmV3Q2hlY2tib3gpXG4gICAgZGl2TGVmdC5hcHBlbmRDaGlsZChuZXdOYW1lKVxuICAgIGRpdlJpZ2h0LmFwcGVuZENoaWxkKG5ld0RldGFpbHNCdG4pXG4gICAgZGl2UmlnaHQuYXBwZW5kQ2hpbGQobmV3RGF0ZSlcbiAgICBkaXZSaWdodC5hcHBlbmRDaGlsZChuZXdFZGl0QnRuKVxuICAgIGRpdlJpZ2h0LmFwcGVuZENoaWxkKG5ld0RlbGV0ZUJ0bilcbiAgICBuZXdMaW5lLmFwcGVuZENoaWxkKGRpdkxlZnQpXG4gICAgbmV3TGluZS5hcHBlbmRDaGlsZChkaXZSaWdodClcbiAgICBuZXdMaW5lLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1saW5lJylcbiAgICBkaXZMZWZ0LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1saW5lLWRpdicpXG4gICAgZGl2UmlnaHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWxpbmUtZGl2JylcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChuZXdMaW5lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVG9EbyAoKSB7IFxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZm9ybUJ0bicpXG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9KVxuXG4gICAgY29uc3QgdG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2VUb0RvQnRuJylcbiAgICB0b0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1tYWluJylcbiAgICBjb25zdCBmb3JtRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZm9vdGVyJylcbiAgICBmb3JtTWFpbi5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGZvcm1Gb290ZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgdG9kb1ByaW9Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgdG9kb1ByaW9NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgdG9kb1ByaW9IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IGZvb3RlckRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvb3RlckRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRvZG9TdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRvZG9UaXRsZS50eXBlID0gJ3RleHQnXG4gICAgdG9kb1RpdGxlLm5hbWUgPSAndGl0bGUnXG4gICAgdG9kb1RpdGxlLmlkID0gJ3Rhc2tUaXRsZSdcbiAgICB0b2RvVGl0bGUucGxhY2Vob2xkZXI9ICdUaXRsZTogUGF5IGJpbGxzJ1xuICAgIHRvZG9EZXRhaWxzLnJvd3MgPSAnOCdcbiAgICB0b2RvRGV0YWlscy5pZCA9ICd0YXNrRGV0YWlscydcbiAgICB0b2RvRGV0YWlscy5wbGFjZWhvbGRlciA9ICdEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LidcbiAgICBmb290ZXJEaXYxLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnXG4gICAgdG9kb0RhdGUudHlwZSA9ICdkYXRlJ1xuICAgIHRvZG9EYXRlLmlkID0gJ2R1ZWRhdGUnXG4gICAgZm9vdGVyRGl2Mi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJ1xuICAgIHRvZG9QcmlvTG93LnR5cGUgPSAncmFkaW8nXG4gICAgdG9kb1ByaW9Mb3cubmFtZSA9ICdwcmlvcml0eSdcbiAgICB0b2RvUHJpb0xvdy52YWx1ZSA9ICdsb3cnXG4gICAgdG9kb1ByaW9NZWRpdW0udHlwZSA9ICdyYWRpbydcbiAgICB0b2RvUHJpb01lZGl1bS5uYW1lID0gJ3ByaW9yaXR5J1xuICAgIHRvZG9QcmlvTWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcbiAgICB0b2RvUHJpb0hpZ2gudHlwZSA9ICdyYWRpbydcbiAgICB0b2RvUHJpb0hpZ2gubmFtZSA9ICdwcmlvcml0eSdcbiAgICB0b2RvUHJpb0hpZ2gudmFsdWUgPSAnaGlnaCdcbiAgICB0b2RvU3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1mb3JtJylcbiAgICB0b2RvU3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FERCBUTyBETydcbiAgICBmb290ZXJEaXYxLmFwcGVuZENoaWxkKHRvZG9EYXRlKVxuICAgIGZvb3RlckRpdjIuYXBwZW5kQ2hpbGQodG9kb1ByaW9Mb3cpXG4gICAgZm9vdGVyRGl2Mi5hcHBlbmRDaGlsZCh0b2RvUHJpb01lZGl1bSlcbiAgICBmb290ZXJEaXYyLmFwcGVuZENoaWxkKHRvZG9QcmlvSGlnaClcbiAgICBmb3JtTWFpbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpXG4gICAgZm9ybU1haW4uYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpXG4gICAgZm9ybUZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJEaXYxKVxuICAgIGZvcm1Gb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2MilcbiAgICBmb290ZXJEaXYyLmFwcGVuZENoaWxkKHRvZG9TdWJtaXRCdG4pXG4gICAgdG9kb1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrTWFuYWdlci5tYWtlTmV3VGFzaygpXG4gICAgZm9yKGxldCBpPTA7IGk8cHJvamVjdHNNYW5hZ2VyLnByb2plY3RzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZihwcm9qZWN0c01hbmFnZXIucHJvamVjdHNbaV0uaXNBY3RpdmUgPT09IDEpXG4gICAge1xuICAgIHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgdGFza01hbmFnZXIuZHJhd0FsbFRhc2tzKHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS50YXNrcylcbiAgICB9XG4gICAgfSlcbn0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0ICgpIHtcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5nZVByb2plY3RCdG4nKVxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZm9ybU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1tYWluJylcbiAgICBjb25zdCBmb3JtRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZm9vdGVyJylcbiAgICBmb3JtTWFpbi5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGZvcm1Gb290ZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdDUkVBVEUgUFJPSkVDVCdcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wcm9qZWN0QnRuJylcbiAgICBwcm9qZWN0VGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGU6IEhvdXNlIFJlbm92YXRpb24nXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuICAgIGZvcm1NYWluLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgICBmb3JtRm9vdGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKVxuICAgICAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZS52YWx1ZVxuICAgICAgICAgICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdFRpdGxlLnZhbHVlKVxuICAgICAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb2plY3RUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgIHByb2plY3RzTWFuYWdlci5hZGRFTGlzdGVuZXIobmV3UHJvamVjdEJ0bilcbiAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlLCBwcm9qZWN0c01hbmFnZXIubWFrZU9iamVjdChuZXdQcm9qZWN0QnRuKSlcbiAgICAgICAgICAgIHByb2plY3RzTWFuYWdlci5wcm9qZWN0cy5wdXNoKGdldFByb2plY3QocHJvamVjdFRpdGxlLnZhbHVlKSlcbiAgICAgICAgfSlcbn0pXG59XG5sZXQgYWxsTmV3UHJvamVjdHMgPSB7fVxuZnVuY3Rpb24gc2V0UHJvamVjdChuYW1lLCB2YWx1ZSApe1xuICAgIGFsbE5ld1Byb2plY3RzW25hbWVdID0gdmFsdWVcbn1cbmZ1bmN0aW9uIGdldFByb2plY3QobmFtZSkge1xuICAgIHJldHVybiBhbGxOZXdQcm9qZWN0c1tuYW1lXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTm90ZSAoKSB7XG4gICAgY29uc3Qgbm90ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2VOb3RlQnRuJylcbiAgICBub3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1tYWluJylcbiAgICBjb25zdCBmb3JtRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZm9vdGVyJylcbiAgICBmb3JtTWFpbi5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGZvcm1Gb290ZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbm90ZVRpdGxlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJ1xuICAgIGNvbnN0IG5vdGVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIG5vdGVEZXRhaWxzLnBsYWNlaG9sZGVyID0gJ0RldGFpbHMnXG4gICAgY29uc3Qgbm90ZUFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbm90ZUFkZEJ0bi50ZXh0Q29udGVudCA9ICdDUkVBVEUgTk9URSdcbiAgICBmb3JtTWFpbi5hcHBlbmRDaGlsZChub3RlVGl0bGUpXG4gICAgZm9ybU1haW4uYXBwZW5kQ2hpbGQobm90ZURldGFpbHMpXG4gICAgZm9ybUZvb3Rlci5hcHBlbmRDaGlsZChub3RlQWRkQnRuKVxufSlcbn1cbiIsImltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSBcIi4vRE9NXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8gKG5hbWUsIGRldGFpbHMsIGRhdGVEdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7IG5hbWUsIGRldGFpbHMsIGRhdGVEdWUsIHByaW9yaXR5fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAobmFtZSkge1xuICByZXR1cm4geyBuYW1lIH1cbn1cbmV4cG9ydCBjb25zdCBwcm9qZWN0T2JqZWN0ID0gKG5hbWUpID0+IHsgXG4gIGNvbnN0IHRhc2tzID0gW11cbiAgY29uc3QgaXNBY3RpdmUgPSAwXG4gIGNvbnN0IGlkID0gbmFtZVxuICByZXR1cm4geyB0YXNrcywgaXNBY3RpdmUsIGlkIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzTWFuYWdlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdXG4gIGxldCBpID0wO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gIH0gXG4gIGNvbnN0IGFkZEVMaXN0ZW5lciA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBmb3IoaSA9IDA7aTxwcm9qZWN0c01hbmFnZXIucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS5pc0FjdGl2ZSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBwcm9qZWN0c01hbmFnZXIucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICBpZihwcm9qZWN0c01hbmFnZXIucHJvamVjdHNbaV0uaWQgPT09IHByb2plY3QuaWQpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgdGFza01hbmFnZXIuZHJhd0FsbFRhc2tzKHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS50YXNrcylcbiAgICAgIHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS5pc0FjdGl2ZSA9IDFcbiAgICB9KVxuICB9XG4gIGNvbnN0IG1ha2VPYmplY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5ld09iamVjdCA9IHByb2plY3RPYmplY3QocHJvamVjdC5pZClcbiAgICByZXR1cm4gbmV3T2JqZWN0XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkRUxpc3RlbmVyLCBtYWtlT2JqZWN0XG4gIH1cbn0pKCkiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250ZW50e1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDE0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAyMywgMjMpO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyOSwgMzApO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLm1haW57XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyOCwgMjksIDMwKTs7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG4ucXVlcnktZm9ybXtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXFxuICAgIHotaW5kZXg6IDk5OTk7XFxufVxcbi5mb3JtLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZvcm0tc2lkZWJhcntcXG4gICAgZ3JpZC1hcmVhOiAyLzEvNC8yO1xcbn1cXG4uZm9ybS1tYWlue1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm0tZm9vdGVye1xcbiAgICBncmlkLWFyZWE6My8yLzQvMztcXG59XFxuLmZvcm1Db250ZW50IHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAyNTBweCAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IDFmcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgLm1haW4tY29udGVudC1saW5le1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXItbGVmdDogM3B4IHJlZCBzb2xpZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDM0LCAzNik7XFxuICB9XFxuICAubWFpbi1jb250ZW50LWxpbmU6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB9XFxuXFxuICAubWFpbi1jb250ZW50LWxpbmUtZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTJweDtcXG4gIH1cXG4gIC5tYWluLWNvbnRlbnQtbGluZS1kaXYgPiBidXR0b24gPiAuaWNvbiB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0MsRUFBRSxnQ0FBZ0M7SUFDdEUsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMjMsIDIzKTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOCwgMjksIDMwKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5tYWlue1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjgsIDI5LCAzMCk7O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuLnF1ZXJ5LWZvcm17XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAqL1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbn1cXG4uZm9ybS1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mb3JtLXNpZGViYXJ7XFxuICAgIGdyaWQtYXJlYTogMi8xLzQvMjtcXG59XFxuLmZvcm0tbWFpbntcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLWZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOjMvMi80LzM7XFxufVxcbi5mb3JtQ29udGVudCB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMjUwcHggMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzBweCAxZnI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIC5tYWluLWNvbnRlbnQtbGluZXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCByZWQgc29saWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzNCwgMzYpO1xcbiAgfVxcbiAgLm1haW4tY29udGVudC1saW5lOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgfVxcblxcbiAgLm1haW4tY29udGVudC1saW5lLWRpdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEycHg7XFxuICB9XFxuICAubWFpbi1jb250ZW50LWxpbmUtZGl2ID4gYnV0dG9uID4gLmljb24ge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3NyYy9zdHlsZS5jc3MnXG5pbXBvcnQgY3JlYXRlVG9kbywgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0T2JqZWN0LCBwcm9qZWN0c01hbmFnZXIgfSBmcm9tICcuLi9mYWN0b3J5J1xuaW1wb3J0IERPTXRvRG8sIHthZGROZXdRdWVyeSwgY2hhbmdlTm90ZSwgY2hhbmdlUHJvamVjdCxjaGFuZ2VUb0RvLCBkcmF3VGFzayxcbiAgICB0YXNrTWFuYWdlcn0gZnJvbSAnLi4vRE9NJ1xuY29uc3QgaG9tZSA9IHByb2plY3RPYmplY3QoJ2hvbWUnKVxuY29uc3QgdG9kYXkgPSBwcm9qZWN0T2JqZWN0KCd0b2RheScpXG5jb25zdCB0aGlzV2VlayA9IHByb2plY3RPYmplY3QoJ3RoaXNXZWVrJylcbmNvbnN0IFN0dWR5ID0gcHJvamVjdE9iamVjdCgnU3R1ZHknKVxucHJvamVjdHNNYW5hZ2VyLmFkZFByb2plY3QoaG9tZSlcbnByb2plY3RzTWFuYWdlci5hZGRQcm9qZWN0KHRvZGF5KVxucHJvamVjdHNNYW5hZ2VyLmFkZFByb2plY3QodGhpc1dlZWspXG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChTdHVkeSlcbmxldCBhbGxOZXdQcm9qZWN0cyA9IHt9XG5mdW5jdGlvbiBzZXRQcm9qZWN0KG5hbWUsIHZhbHVlICl7XG4gICAgYWxsTmV3UHJvamVjdHNbbmFtZV0gPSB2YWx1ZVxufVxuZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIGFsbE5ld1Byb2plY3RzW25hbWVdXG59XG5TdHVkeS50YXNrc1swXSA9IGNyZWF0ZVRvZG8oJ3JlZCcsJ2FzZCcsJzExMTExJywnbG93JylcbmxldCBicmVha0RhdGUgPSBbXVxubGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKClcbnByb2plY3RzTWFuYWdlci5wcm9qZWN0c1swXS5pc0FjdGl2ZSA9IDFcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWZvcm0nKVxuY29uc3QgaG9tZVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKVxuY29uc3QgdG9kYXlUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpXG5jb25zdCBzdHVkeVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1N0dWR5JylcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tNYW5hZ2VyLm1ha2VOZXdUYXNrKClcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0c01hbmFnZXIucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmKHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS5pc0FjdGl2ZSA9PT0gMSlcbiAgICB7XG4gICAgcHJvamVjdHNNYW5hZ2VyLnByb2plY3RzW2ldLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICB0YXNrTWFuYWdlci5kcmF3QWxsVGFza3MocHJvamVjdHNNYW5hZ2VyLnByb2plY3RzW2ldLnRhc2tzKVxuICAgIH1cbn1cbilcblxuaG9tZVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICB0YXNrTWFuYWdlci5kcmF3QWxsVGFza3MoaG9tZS50YXNrcylcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0c01hbmFnZXIucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgaWYocHJvamVjdHNNYW5hZ2VyLnByb2plY3RzW2ldLmlzQWN0aXZlID09PSAxKVxuICAgICAgIHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS5pc0FjdGl2ZSA9IDBcbiAgICAgICBwcm9qZWN0c01hbmFnZXIucHJvamVjdHNbMF0uaXNBY3RpdmUgPSAxXG59KVxuICAgIFxuc3R1ZHlUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNNYW5hZ2VyLnByb2plY3RzKVxuICAgIHRhc2tNYW5hZ2VyLmRyYXdBbGxUYXNrcyhTdHVkeS50YXNrcylcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0c01hbmFnZXIucHJvamVjdHMubGVuZ3RoOyBpKyspXG4gICAgICAgaWYocHJvamVjdHNNYW5hZ2VyLnByb2plY3RzW2ldLmlzQWN0aXZlID09PSAxKVxuICAgICAgIHByb2plY3RzTWFuYWdlci5wcm9qZWN0c1tpXS5pc0FjdGl2ZSA9IDBcbiAgICBTdHVkeS5pc0FjdGl2ZSA9IDFcbn0pXG5cbnRvZGF5VGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBmb3IoIGxldCBpID0wOyBpPGhvbWUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXlEYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheURhdGUuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RheURhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgYnJlYWtEYXRlID0gaG9tZVtpXS5kYXRlRHVlLnNwbGl0KCctJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnNlSW50KGJyZWFrRGF0ZVswXSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZUludChicmVha0RhdGVbMV0pKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VJbnQoYnJlYWtEYXRlWzJdKSlcbiAgICB9XG59KVxuY2hhbmdlTm90ZSgpXG5jaGFuZ2VUb0RvKClcbmNoYW5nZVByb2plY3QoKVxuYWRkTmV3UXVlcnkoKVxuY29uc29sZS5sb2cocHJvamVjdHNNYW5hZ2VyLnByb2plY3RzKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9