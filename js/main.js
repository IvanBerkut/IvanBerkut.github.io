const table = document.getElementById('table');
const tableCell = document.getElementsByClassName('table-cell');
const tableRow = document.getElementsByClassName('table-row');
const createColumn = document.getElementById('create-column');
const createRow = document.getElementById('create-row');
const deleteColumn = document.getElementById('delete-column');
const deleteRow = document.getElementById('delete-row');

createColumn.addEventListener('click', createNewColumn);
createRow.addEventListener('click', createNewRow);
deleteColumn.addEventListener('click', deleteNewColumn);
deleteRow.addEventListener('click', deleteNewRow);

function createNewColumn(){
  for(let i = 0; i < tableRow.length; i++){
    let newTableCell = document.createElement('div');
    newTableCell.classList.add('table-cell');
    tableRow[i].appendChild(newTableCell);
  }
}

function createNewRow(){
  let divRow = document.createElement('div');
  divRow.classList.add('table-row');
  table.appendChild(divRow);
  for (let i = 0; i < (tableCell.length/tableRow.length); i++){
    let divCell = document.createElement('div');
    divCell.classList.add('table-cell')
    divRow.appendChild(divCell);
  }
}

function deleteNewColumn(){
  let lengthRow = tableRow[0].children;
  if (lengthRow.length > 1){
      for(let i = tableRow.length-1; i >= 0; i--){
        tableRow[i].removeChild(tableRow[i].lastElementChild);
      }
    }
  }

function deleteNewRow(){
    if (tableRow.length>1){
      let removableRow = document.querySelectorAll('#table .table-row')[0];
      table.removeChild(removableRow);
    }
}
