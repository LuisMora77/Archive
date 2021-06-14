import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  TableName: string;
  RowCount: number;
  Size: number;
  ProjectedRows: number;
}

@Component({
  selector: 'app-archives-tables',
  templateUrl: './archives-tables.component.html',
  styleUrls: ['./archives-tables.component.scss']
})
export class ArchivesTablesComponent implements OnInit {
  displayedColumns: string[] = ['TableName', 'RowCount', 'Size','ProjectedRows'];
  displayedColumnsTotals: string[] = ['Name','TotalRows','TotalSize','TotalProjected'];
  tablenames: string[] = ["Bitácora", "Tareas Por Lotes", "Retail","Balanceos","Solicitudes De Autorización","Liquidaciones"];
  message:string = "1";
  TotalsData: any[] = [];

  dataSource: PeriodicElement[] = [
    {Name: "Bitácora", TableName: "SMMTRANSLOG",RowCount: 3702298,Size: 3, ProjectedRows: 2904644},
    //{Name: "Bitácora", TableName: "Total",RowCount: 3702298,Size: 3, ProjectedRows: 2904644},
    
    {Name: "Tareas Por Lotes", TableName: "BATCHJOB",RowCount: 5936,Size: 0, ProjectedRows: 3028},
    {Name: "Tareas Por Lotes", TableName: "BATCHJOBHISTORY",RowCount: 464924,Size: 0, ProjectedRows: 240456},
    {Name: "Tareas Por Lotes", TableName: "BATCHHISTORY",RowCount: 814574,Size: 5, ProjectedRows: 420015},
    {Name: "Tareas Por Lotes", TableName: "BATCHCONSTRAINTHISTORY",RowCount: 152131,Size: 0, ProjectedRows: 73130},

    {Name: "Retail", TableName: "RETAILTRANSACTIONTABLE",RowCount: 577135,Size: 2, ProjectedRows: 430217},
    {Name: "Retail", TableName: "RETAILTRANSACTIONSALESTRANS",RowCount: 2732395,Size: 0, ProjectedRows: 1744035},
    {Name: "Retail", TableName: "RETAILTRANSACTIONPAYMENTTRANS",RowCount: 683806,Size: 0, ProjectedRows: 180005},
    {Name: "Retail", TableName: "RETAILTRANSACTIONTAXTRANS",RowCount: 2732395,Size: 0, ProjectedRows: 6787},

    {Name: "Balanceos", TableName: "WMSORDERTRANS",RowCount: 67,Size: 0, ProjectedRows: 0},
    {Name: "Balanceos", TableName: "WMSBALANCETRANS",RowCount: 42903,Size: 0, ProjectedRows: 0},
    {Name: "Balanceos", TableName: "WMSBALANCETRANSSALES",RowCount: 401101,Size: 0, ProjectedRows: 0},
    {Name: "Balanceos", TableName: "WMSBALANCEPREPICKJOUR",RowCount: 1149,Size: 0, ProjectedRows: 147},
    {Name: "Balanceos", TableName: "WMSBALANCEPREPICKHEADER",RowCount: 81276,Size: 0, ProjectedRows: 65486},
    {Name: "Balanceos", TableName: "WMSBALANCEPREPICKPROPOSAL",RowCount: 1594739,Size: 1, ProjectedRows: 1277540},

    {Name: "Solicitudes De Autorización", TableName: "CUSTAPPROVAL",RowCount: 19092,Size: 0, ProjectedRows: 9400},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RECEIPTS",RowCount: 64417,Size: 0, ProjectedRows: 27681},
    {Name: "Solicitudes De Autorización", TableName: "CUSTWARRANTY",RowCount: 1131,Size: 0, ProjectedRows: 1116},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_DOCUMENTS",RowCount: 118667,Size: 0, ProjectedRows: 51176},
    {Name: "Solicitudes De Autorización", TableName: "PSSETTLEMENTDOCDET",RowCount: 208670,Size: 0, ProjectedRows: 89826},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RECEIPTSDOCSDETAILS",RowCount: 70709,Size: 0, ProjectedRows: 30520},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RECEIPTSPAYMENTDETAILS",RowCount: 64707,Size: 0, ProjectedRows: 27801},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RETURNS",RowCount: 12831,Size: 0, ProjectedRows: 5653},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RETURNSDETAILS",RowCount: 42836,Size: 0, ProjectedRows: 19008},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RETURNREASONS",RowCount: 13137,Size: 0, ProjectedRows: 5806},
    {Name: "Solicitudes De Autorización", TableName: "CUSTAPPROVALLOG",RowCount: 352485,Size: 1, ProjectedRows: 151872},

    {Name: "Liquidaciones", TableName: "SETTLEMENTTABLE",RowCount: 4782,Size: 0, ProjectedRows: 2365},
    {Name: "Liquidaciones", TableName: "SETTLEMENTXCOMP",RowCount: 4214,Size: 0, ProjectedRows: 1797},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTYPES",RowCount: 7190,Size: 0, ProjectedRows: 3077},
    {Name: "Liquidaciones", TableName: "SETTLEMENTRESUMEN",RowCount: 3,Size: 0, ProjectedRows: 3},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTYPEDET",RowCount: 29821,Size: 0, ProjectedRows: 12663},
    {Name: "Liquidaciones", TableName: "SETTLEMENTHISTORY",RowCount: 20564,Size: 0, ProjectedRows: 9137},
    {Name: "Liquidaciones", TableName: "SETTLEMENTREASONS",RowCount: 14,Size: 0, ProjectedRows: 14},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTABLEPROMOREVIEW",RowCount: 0,Size: 0, ProjectedRows: 0},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTIPMOVDIFS",RowCount: 12,Size: 0, ProjectedRows: 12},
  ]

  constructor() { 
    this.setTotalsData();
  }

  ngOnInit(): void {
    this.getTotalCountByKeyName(this.dataSource,"RowCount");
    this.getTotalCountByKeyName(this.dataSource,"ProjectedRows");
    
  }

  getTotalCountByKeyName(dataSet: any[], keyName: string){
    let total = 0;
    for (let i = 0; i < dataSet.length;i++){
      total += dataSet[i][keyName];
    }
    return total;
  }

  getTotalCountByArchiveName(dataSet: any[], ArchiveName: string){
    let totalRows = 0;
    let totalSize = 0;
    let totalProjected = 0;
    for (let i = 0; i < dataSet.length;i++){
      if(dataSet[i].Name === ArchiveName){
        totalRows += parseInt(dataSet[i]["RowCount"]);
        totalSize += parseInt(dataSet[i]["Size"]);
        totalProjected += parseInt(dataSet[i]["ProjectedRows"]);
      }
    }
    return {Name: ArchiveName,TotalRows:totalRows ,TotalSize:totalSize ,TotalProjected:totalProjected};
  }

  receiveMessage($event) {  
        this.message = $event  
  }

  formatNumber(number: number):string { return number.toLocaleString(); }

  isNumber(val): boolean { return typeof val === 'number'; }

setTotalsData(){
  this.TotalsData.push(this.getTotalCountByArchiveName(this.dataSource,"Bitácora"));
  this.TotalsData.push(this.getTotalCountByArchiveName(this.dataSource,"Tareas Por Lotes"));
  this.TotalsData.push(this.getTotalCountByArchiveName(this.dataSource,"Retail"));
  this.TotalsData.push(this.getTotalCountByArchiveName(this.dataSource,"Balanceos"));
  this.TotalsData.push(this.getTotalCountByArchiveName(this.dataSource,"Solicitudes De Autorización"));
  this.TotalsData.push(this.getTotalCountByArchiveName(this.dataSource,"Liquidaciones"));
  this.TotalsData.push({Name:"Total",TotalRows:this.getTotalCountByKeyName(this.TotalsData,"TotalRows") ,TotalSize:this.getTotalCountByKeyName(this.TotalsData,"TotalSize") ,TotalProjected:this.getTotalCountByKeyName(this.TotalsData,"TotalProjected")});
}

}
