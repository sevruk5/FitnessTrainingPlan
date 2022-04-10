let km;
let averagePulse;

function addInTable()
{
	km = document.main.km.value;
	averagePulse = document.main.averagePulse.value;

	addRow('inputTable');
}

function addRow(tableID) {
  // Get a reference to the table
  var tableRef = document.getElementById(tableID);

  // Insert a row in the table at row index 0
  var newRow = tableRef.insertRow();

  // Insert a cell in the row at index 0
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);

  // Append a text node to the cell
  var newText1 = document.createTextNode(km);
  newCell1.appendChild(newText1);

  var newText2 = document.createTextNode(averagePulse);
  newCell2.appendChild(newText2);
}

function addInMainTable(tableID)
{
	let tableRef = document.getElementById('inputTable');
	let countRows = tableRef.rows.length;

	for (var i = 1; i < countRows; i++)
	{
		let cell1 = tableRef.rows[i].cells[0].innerHTML;
		let cell2 = tableRef.rows[i].cells[1].innerHTML;

		let tableRef2 = document.getElementById('inputTable2');
		let newRow = tableRef2.insertRow();
		for(let i=0;i<9;i++)
		{
			let newCell = newRow.insertCell(i);
			var newText = document.createTextNode("км");
	  		newCell.appendChild(newText);
		}
	}
}