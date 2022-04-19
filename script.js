class AllTraining {
	tableAllTraining = document.getElementById('tableAllTraining');
	tableNewTraining = document.getElementById('tableNewTraining');
	countCellsTableAllTraining = tableAllTraining.rows[0].cells.length;
	newRow;
	countCellsTableAllTraining = this.tableAllTraining.rows[0].cells.length;
	countRowsTableNewTraining = this.tableNewTraining.rows.length;
	countRowsTableAllTraining = this.tableAllTraining.rows.length;
	arrAveragePulse = [];
	constructor() {}

	addRecordInTableNewTraining() {
		let newRowNewTraining = this.tableNewTraining.insertRow();

		let newCellKm = newRowNewTraining.insertCell(0);
		let enteredKm = document.formAddNewTraining.enteredKm.value;
		newCellKm.innerHTML = enteredKm;

		let newCellAveragePulse = newRowNewTraining.insertCell(1);
		let enteredAveragePulse = document.formAddNewTraining.enteredAveragePulse.value;
		newCellAveragePulse.innerHTML = enteredAveragePulse;
	}

	addRecordInTableAllTraining() {
		this.newRow = this.tableAllTraining.insertRow();
		this.insertCellsInRow();
		this.fillingCellsInRow();

		this.deleteAllRecordInTableNewTraining();
	}

	insertCellsInRow() {
		for(let i=0;i<this.countCellsTableAllTraining;i++)
		{
			let cell = this.newRow.insertCell(i);
		}
	}

	fillingCellsInRow(){
		this.fillArrayWithZero();
		this.fillArrayWithAveragePulse();

		for(let i = 1; i < this.countCellsTableAllTraining;i++){
			this.tableAllTraining.rows[this.countRowsTableAllTraining].cells[i].innerHTML = this.arrAveragePulse[i];
		}
		
		let today = new Date().toISOString().split("T")[0];
		this.tableAllTraining.rows[this.countRowsTableAllTraining].cells[0].innerHTML = today;
	}

	fillArrayWithZero(){
		for(let i=0;i<9;i++)
		{
			this.arrAveragePulse[i] = 0;
		}
	}

	fillArrayWithAveragePulse(){
		for(let i=1;i<this.countCellsTableAllTraining;i++)
		{
			for(let j = 1; j < this.countRowsTableNewTraining; j++){
				let cellKm = this.tableNewTraining.rows[j].cells[0].innerHTML;
				let cellAveragePulse = this.tableNewTraining.rows[j].cells[1].innerHTML;
				if(cellKm==(i+4)){
					this.arrAveragePulse[i] = cellAveragePulse;
				}	
			}
		}
	}

	deleteAllRecordInTableNewTraining(){
		for(let i = 1; i<this.countRowsTableNewTraining;i++){
			tableNewTraining.deleteRow(1);
		}
	}
}

function addNewRunTraining() {
	let runTraining = new AllTraining();
	runTraining.addRecordInTableNewTraining();
}

function addAllRunTraining() {
	let runTraining = new AllTraining();
	runTraining.addRecordInTableAllTraining();
}