import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AvvocatoService } from "../../services/avvocato.service";

@Component({
  selector: 'app-avvocato-grid',
  templateUrl: './avvocato-grid.component.html',
  styleUrls: ['./avvocato-grid.component.css']
})
export class AvvocatoGridComponent implements OnInit {
  //users!: Observable<User[]>; 
  rowData: any;
  gridOptions:GridOptions;
  
  columnDefs = [
    { field: 'nome' },
    { field: 'cognome', sortable: true, filter: true },
    { field: 'codiceFiscale'},
    { field: 'cbillUnica'},
    { field: 'cbillRata1'},
    { field: 'cbillRata2'}
];
  
  constructor(private avvocatoService: AvvocatoService) { 
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
         // this.gridOptions.api?.setAlwaysShowVerticalScroll;
          this.gridOptions.api?.paginationGetCurrentPage;
          this.gridOptions.api?.paginationGoToNextPage;
      }
   };
  }

  ngOnInit(): void {
    this.reloadData();
    //this.rowData = this.users;
  }

 
reloadData() {
  this.avvocatoService.getAvvocatoList().subscribe(
    data => {
      //console.log(data);
      this.rowData = data;
    },
    error => console.log(error));
}

 
onBtnExport(): void {
  const params = {
    columnGroups: true,
    allColumns: true,
    fileName: 'filename_of_your_choice.csv',
    columnSeparator: ';'
  };
  this.gridOptions.api?.exportDataAsCsv(params);
}


}





