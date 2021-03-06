const table = document.getElementsByClassName('squares_table')[0]
const tableCell = document.getElementsByClassName('squares_table-cell')
const tableRow = document.getElementsByClassName('squares_table-row')
const createColumn = document.getElementsByClassName('squares_create-column')[0]
const createRow = document.getElementsByClassName('squares_create-row')[0]
const deleteColumn = document.getElementsByClassName('squares_delete-column')[0]
const deleteRow = document.getElementsByClassName('squares_delete-row')[0]

let posX = ''
let posY = ''

const createNewColumn = () => {
  for(let i = 0; i < tableRow.length; i++){
    const newTableCell = document.createElement('div')
    newTableCell.classList.add('squares_table-cell')
    tableRow[i].appendChild(newTableCell)
  }
}

const createNewRow = () => {
  const divRow = document.createElement('div')
  divRow.classList.add('squares_table-row')
  table.appendChild(divRow)
  for (let i = 0; i < (tableCell.length/tableRow.length); i++){
    const divCell = document.createElement('div')
    divCell.classList.add('squares_table-cell')
    divRow.appendChild(divCell)
  }
}

const deleteNewColumn = () => {
  const lengthRow = tableRow[0].children
  if (lengthRow.length > 1){
      for(let i = tableRow.length-1; i >= 0; i--){
        let tableRowForDel = tableRow[i].getElementsByClassName('squares_table-cell')
        tableRowForDel[posX].remove()
      }
    }
    deleteColumn.style.visibility = 'hidden'
    deleteRow.style.visibility = 'hidden'
  }

const deleteNewRow = () => {
    if (tableRow.length>1){
      let removableRow = document.getElementsByClassName('squares_table-row')[posY]
      table.removeChild(removableRow)
    }
  deleteColumn.style.visibility = 'hidden'
  deleteRow.style.visibility = 'hidden'
}

const visBtns = () => {
  let lengthRow = tableRow[0].children
  if (lengthRow.length > 1){
    deleteColumn.style.visibility = 'visible'
  }
  if(tableRow.length>1){
    deleteRow.style.visibility = 'visible'
  } 
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
  const row = event.target.closest('.squares_table-row')
  if (!row) return
  posX = getPosition(event.target);
  posY = getPosition(row)
  const stepCol = tableCell[0].offsetHeight
  const stepRow = tableCell[0].offsetWidth 
  const posDelRowBtn = (posY) * stepCol
  const posDelColBtn = (posX) * stepRow
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
