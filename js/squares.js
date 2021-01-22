const table = document.getElementById('squares_table')
const tableCell = document.getElementsByClassName('squares_table-cell')
const tableRow = document.getElementsByClassName('squares_table-row')
const createColumn = document.getElementById('squares_create-column')
const createRow = document.getElementById('squares_create-row')
const deleteColumn = document.getElementById('squares_delete-column')
const deleteRow = document.getElementById('squares_delete-row')

let posX = ''
let posY = ''

const createNewColumn = () => {
  for(let i = 0; i < tableRow.length; i++){
    let newTableCell = document.createElement('div')
    newTableCell.classList.add('squares_table-cell')
    tableRow[i].appendChild(newTableCell)
  }
}

const createNewRow = () => {
  let divRow = document.createElement('div')
  divRow.classList.add('squares_table-row')
  table.appendChild(divRow)
  for (let i = 0; i < (tableCell.length/tableRow.length); i++){
    let divCell = document.createElement('div')
    divCell.classList.add('squares_table-cell')
    divRow.appendChild(divCell)
  }
}

const deleteNewColumn = () => {
  let lengthRow = tableRow[0].children
  if (lengthRow.length > 1){
      for(let i = tableRow.length-1; i >= 0; i--){
        let tableRowForDel = tableRow[i].querySelectorAll('.squares_table-cell')
        tableRowForDel[posX].remove()
      }
    }
    deleteColumn.style.visibility = 'hidden'
    deleteRow.style.visibility = 'hidden'
  }

const deleteNewRow = () => {
    if (tableRow.length>1){
      let removableRow = document.querySelectorAll('#squares_table .squares_table-row')[posY]
      table.removeChild(removableRow)
    }
  deleteColumn.style.visibility = 'hidden'
  deleteRow.style.visibility = 'hidden'
}

const visBtns = () => {
    deleteColumn.style.visibility = 'visible'
    deleteRow.style.visibility = 'visible'
}

const hidBtns = () => {
  deleteColumn.style.visibility= 'hidden'
  deleteRow.style.visibility = 'hidden'
}

const getPosition = element => {
  let i = 0;
  while(element = element.previousElementSibling) {
     i++;
  }
  return i;
}


table.addEventListener('mouseover', event => {
  posX = getPosition(event.target);
  posY = getPosition(event.target.closest('.squares_table-row'))
  let stepCol = tableCell[0].offsetHeight
  let stepRow = tableCell[0].offsetWidth 
  let posDelRowBtn = (posY) * stepCol
  let posDelColBtn = (posX) * stepRow
  deleteColumn.style.left = `${posDelColBtn}px`
  deleteRow.style.top = `${posDelRowBtn}px`
});


createColumn.addEventListener('click', createNewColumn)
createRow.addEventListener('click', createNewRow)
createColumn.addEventListener('mouseover', visBtns)
createRow.addEventListener('mouseover', visBtns)
createColumn.addEventListener('mouseout', hidBtns)
createRow.addEventListener('mouseout', hidBtns)
deleteColumn.addEventListener('click', deleteNewColumn)
deleteRow.addEventListener('click', deleteNewRow)
deleteColumn.addEventListener('mouseover', visBtns)
deleteRow.addEventListener('mouseover', visBtns)
deleteColumn.addEventListener('mouseout', hidBtns)
deleteRow.addEventListener('mouseout', hidBtns)
table.addEventListener('mouseover', visBtns)
table.addEventListener('mouseout', hidBtns)
