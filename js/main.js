const table = document.getElementById('table')
const tableCell = document.getElementsByClassName('table-cell')
const tableRow = document.getElementsByClassName('table-row')
const createColumn = document.getElementById('create-column')
const createRow = document.getElementById('create-row')
const deleteColumn = document.getElementById('delete-column')
const deleteRow = document.getElementById('delete-row')

const createNewColumn = () => {
  for(let i = 0; i < tableRow.length; i++){
    let newTableCell = document.createElement('div')
    newTableCell.classList.add('table-cell')
    tableRow[i].appendChild(newTableCell)
  }
}

const createNewRow = () => {
  let divRow = document.createElement('div')
  divRow.classList.add('table-row')
  table.appendChild(divRow)
  for (let i = 0; i < (tableCell.length/tableRow.length); i++){
    let divCell = document.createElement('div')
    divCell.classList.add('table-cell')
    divRow.appendChild(divCell)
  }
}

const deleteNewColumn = () => {
  let lengthRow = tableRow[0].children
  if (lengthRow.length > 1){
      for(let i = tableRow.length-1; i >= 0; i--){
        tableRow[i].removeChild(tableRow[i].lastElementChild)
      }
    }
  }

const deleteNewRow = () => {
    if (tableRow.length>1){
      let removableRow = document.querySelectorAll('#table .table-row')[0]
      table.removeChild(removableRow)
    }
}

const showBtn = () => {
  deleteColumn.style = 'visibility: visible'
  deleteRow.style = 'visibility: visible'
}

const hiddenBtn = () => {
  deleteColumn.style = 'visibility: hidden'
  deleteRow.style = 'visibility: hidden'
}

const visBtns = () => {
  deleteColumn.style = 'visibility: visible'
  deleteRow.style = 'visibility: visible'
}

const hidBtns = () => {
  deleteColumn.style = 'visibility: hidden'
  deleteRow.style = 'visibility: hidden'
}


const delegato = (event) => {
  if (!event.target.matches('div')) return
  for (let i = 0; i < tableCell.length; i++){
      tableCell[i].index = i+1
  }
  console.log(event.target.index)
}

createColumn.addEventListener('click', createNewColumn)
createRow.addEventListener('click', createNewRow)
deleteColumn.addEventListener('click', deleteNewColumn)
deleteRow.addEventListener('click', deleteNewRow)
deleteColumn.addEventListener('mouseover', visBtns)
deleteRow.addEventListener('mouseover', visBtns)
deleteColumn.addEventListener('mouseout', hidBtns)
deleteRow.addEventListener('mouseout', hidBtns)
table.addEventListener('mouseover', showBtn)
table.addEventListener('mouseout', hiddenBtn)

table.addEventListener('click', delegato)
