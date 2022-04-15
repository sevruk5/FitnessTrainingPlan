function addRecordInTableNewTraining() {
	let tableNewTraining = document.getElementById('tableNewTraining');

	let newRow = tableNewTraining.insertRow();

	let newCellKm = newRow.insertCell(0);
	let enteredKm = document.formAddNewTraining.enteredKm.value;
	newCellKm.innerHTML = enteredKm;

	let newCellAveragePulse = newRow.insertCell(1);
	let enteredAveragePulse = document.formAddNewTraining.enteredAveragePulse.value;
	newCellAveragePulse.innerHTML = enteredAveragePulse;
}

function addRecordInTableAllTraining()
{
	let tableAllTraining = document.getElementById('tableAllTraining');
	let tableNewTraining = document.getElementById('tableNewTraining');
	let countCellsTableAllTraining = tableAllTraining.rows[0].cells.length;
	let countRowsTableNewTraining = tableNewTraining.rows.length;
	let countRowsTableAllTraining = tableAllTraining.rows.length;
	let newRow = addNewRow(tableAllTraining);
	insertCellsInRow(newRow, countCellsTableAllTraining);
	fillingCellsInRow(newRow, countCellsTableAllTraining, tableAllTraining, countRowsTableAllTraining);
	deleteAllRecordInTableNewTraining(tableNewTraining, countRowsTableNewTraining)
}

function fillingCellsInRow(newRow, countCellsTableAllTraining, tableAllTraining, countRowsTableAllTraining){
	let arrAveragePulse = [];
	fillArrayValuesFromTableNewTraining(arrAveragePulse, countCellsTableAllTraining);
	// for(let i=0;i<arrAveragePulse.length;i++){
	// 	alert(arrAveragePulse[i]);
	// }
	for(let i = 1; i < countCellsTableAllTraining;i++){
		tableAllTraining.rows[countRowsTableAllTraining].cells[i].innerHTML = arrAveragePulse[i];
	}
	let today = new Date().toISOString().split("T")[0];
	tableAllTraining.rows[countRowsTableAllTraining].cells[0].innerHTML = today;
}

function fillArrayValuesFromTableNewTraining(arrAveragePulse, countCellsTableAllTraining){
	fillArrayWithZero(arrAveragePulse);
	fillArrayWithAveragePulse(arrAveragePulse, countCellsTableAllTraining);
}

function fillArrayWithAveragePulse(arrAveragePulse, countCellsTableAllTraining){
	let tableNewTraining = document.getElementById('tableNewTraining');
	let tableAllTraining = document.getElementById('tableAllTraining');
	let countRowsTableNewTraining = tableNewTraining.rows.length;
	for(let i=1;i<countCellsTableAllTraining;i++)
	{
		for(let j = 1; j < countRowsTableNewTraining; j++){
			let cellKm = tableNewTraining.rows[j].cells[0].innerHTML;
			let cellAveragePulse = tableNewTraining.rows[j].cells[1].innerHTML;
			if(cellKm==(i+4)){
				arrAveragePulse[i] = cellAveragePulse;
			}	
		}
	}
}

function addNewRow(tableAllTraining){
	let newRow = tableAllTraining.insertRow();
	return newRow;
}

function insertCellsInRow(newRow, countCellsTableAllTraining){
	for(let i=0;i<countCellsTableAllTraining;i++)
	{
		let cell = newRow.insertCell(i);
	}
}

function fillArrayWithZero(arrAveragePulse){
	for(let i=0;i<9;i++)
	{
		arrAveragePulse[i] = 0;
	}
}

function deleteAllRecordInTableNewTraining(tableNewTraining, countRowsTableNewTraining){
	for(let i = 1; i<countRowsTableNewTraining;i++){
		document.getElementById("tableNewTraining").deleteRow(1);
	}
}