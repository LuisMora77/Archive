import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  TableName: string;
  RowCount: string;
  Size: number;
  ProjectedRows: string;
}

@Component({
  selector: 'app-archives-tables',
  templateUrl: './archives-tables.component.html',
  styleUrls: ['./archives-tables.component.scss']
})
export class ArchivesTablesComponent implements OnInit {
  
  dataSource: PeriodicElement[] = [
    {Name: "Bitácora", TableName: "SMMTRANSLOG",RowCount: 3702298..toLocaleString(),Size: 3, ProjectedRows: 2904644..toLocaleString()},
    
    {Name: "Tareas Por Lotes", TableName: "BATCHJOB",RowCount: 5936..toLocaleString(),Size: 0, ProjectedRows: 3028..toLocaleString()},
    {Name: "Tareas Por Lotes", TableName: "BATCHJOBHISTORY",RowCount: 464924..toLocaleString(),Size: 0, ProjectedRows: 240456..toLocaleString()},
    {Name: "Tareas Por Lotes", TableName: "BATCHHISTORY",RowCount: 814574..toLocaleString(),Size: 5, ProjectedRows: 420015..toLocaleString()},
    {Name: "Tareas Por Lotes", TableName: "BATCHCONSTRAINTHISTORY",RowCount: 152131..toLocaleString(),Size: 0, ProjectedRows: 73130..toLocaleString()},

    {Name: "Retail", TableName: "RETAILTRANSACTIONTABLE",RowCount: 577135..toLocaleString(),Size: 2, ProjectedRows: 430217..toLocaleString()},
    {Name: "Retail", TableName: "RETAILTRANSACTIONSALESTRANS",RowCount: 2732395..toLocaleString(),Size: 0, ProjectedRows: 1744035..toLocaleString()},
    {Name: "Retail", TableName: "RETAILTRANSACTIONPAYMENTTRANS",RowCount: 683806..toLocaleString(),Size: 0, ProjectedRows: 180005..toLocaleString()},
    {Name: "Retail", TableName: "RETAILTRANSACTIONTAXTRANS",RowCount: 2732395..toLocaleString(),Size: 0, ProjectedRows: 6787..toLocaleString()},

    {Name: "Balanceos", TableName: "WMSORDERTRANS",RowCount: 67..toLocaleString(),Size: 0, ProjectedRows: 0..toLocaleString()},
    {Name: "Balanceos", TableName: "WMSBALANCETRANS",RowCount: 42903..toLocaleString(),Size: 0, ProjectedRows: 0..toLocaleString()},
    {Name: "Balanceos", TableName: "WMSBALANCETRANSSALES",RowCount: 401101..toLocaleString(),Size: 0, ProjectedRows: 0..toLocaleString()},
    {Name: "Balanceos", TableName: "WMSBALANCEPREPICKJOUR",RowCount: 1149..toLocaleString(),Size: 0, ProjectedRows: 147..toLocaleString()},
    {Name: "Balanceos", TableName: "WMSBALANCEPREPICKHEADER",RowCount: 81276..toLocaleString(),Size: 0, ProjectedRows: 65486..toLocaleString()},
    {Name: "Balanceos", TableName: "WMSBALANCEPREPICKPROPOSAL",RowCount: 1594739..toLocaleString(),Size: 1, ProjectedRows: 1277540..toLocaleString()},

    {Name: "Solicitudes De Autorización", TableName: "CUSTAPPROVAL",RowCount: 19092..toLocaleString(),Size: 0, ProjectedRows: 9400..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RECEIPTS",RowCount: 64417..toLocaleString(),Size: 0, ProjectedRows: 27681..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "CUSTWARRANTY",RowCount: 1131..toLocaleString(),Size: 0, ProjectedRows: 1116..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_DOCUMENTS",RowCount: 118667..toLocaleString(),Size: 0, ProjectedRows: 51176..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETTLEMENTDOCDET",RowCount: 208670..toLocaleString(),Size: 0, ProjectedRows: 89826..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RECEIPTSDOCSDETAILS",RowCount: 70709..toLocaleString(),Size: 0, ProjectedRows: 30520..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RECEIPTSPAYMENTDETAILS",RowCount: 64707..toLocaleString(),Size: 0, ProjectedRows: 27801..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RETURNS",RowCount: 12831..toLocaleString(),Size: 0, ProjectedRows: 5653..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RETURNSDETAILS",RowCount: 42836..toLocaleString(),Size: 0, ProjectedRows: 19008..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "PSSETT_RETURNREASONS",RowCount: 13137..toLocaleString(),Size: 0, ProjectedRows: 5806..toLocaleString()},
    {Name: "Solicitudes De Autorización", TableName: "CUSTAPPROVALLOG",RowCount: 352485..toLocaleString(),Size: 1, ProjectedRows: 151872..toLocaleString()},

    {Name: "Liquidaciones", TableName: "SETTLEMENTTABLE",RowCount: 4782..toLocaleString(),Size: 0, ProjectedRows: 2365..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTXCOMP",RowCount: 4214..toLocaleString(),Size: 0, ProjectedRows: 1797..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTYPES",RowCount: 7190..toLocaleString(),Size: 0, ProjectedRows: 3077..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTRESUMEN",RowCount: 3..toLocaleString(),Size: 0, ProjectedRows: 3..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTYPEDET",RowCount: 29821..toLocaleString(),Size: 0, ProjectedRows: 12663..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTHISTORY",RowCount: 20564..toLocaleString(),Size: 0, ProjectedRows: 9137..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTREASONS",RowCount: 14..toLocaleString(),Size: 0, ProjectedRows: 14..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTABLEPROMOREVIEW",RowCount: 0..toLocaleString(),Size: 0, ProjectedRows: 0..toLocaleString()},
    {Name: "Liquidaciones", TableName: "SETTLEMENTTIPMOVDIFS",RowCount: 12..toLocaleString(),Size: 0, ProjectedRows: 12..toLocaleString()},
  ]

  displayedColumns: string[] = ['TableName', 'RowCount', 'Size','ProjectedRows'];

  tablenames: string[] = ["Bitácora", "Tareas Por Lotes", "Retail","Balanceos","Solicitudes De Autorización","Liquidaciones"];

  message:string = "1";

  constructor() { 
    
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
    console.log(total);
    return total;
  }

  

    receiveMessage($event) {  
        this.message = $event  
    }

    formatNumber(number: number){
      return number.toLocaleString();
    }


}
