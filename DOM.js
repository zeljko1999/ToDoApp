const form = document.querySelector('.query-form')
const mainContent = document.querySelector('.main-content')
export default function DOMtoDo () {

}
export function addNewQuery () {
    const newBtn = document.querySelector('.addNewBtn')
    newBtn.addEventListener('click', function() {
    form.style.display = 'block'
})
}

export function drawTask(toDo) { 
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

export function changeToDo () { 
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
})
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
    addProjectBtn.textContent = 'CREATE PROJECT'
    projectTitle.placeholder = 'Title: House Renovation'
    formMain.appendChild(projectTitle)
    formFooter.appendChild(addProjectBtn)
})
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
    formMain.appendChild(noteTitle)
    formMain.appendChild(noteDetails)
    formFooter.appendChild(noteAddBtn)
})
}