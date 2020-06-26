import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermgtadd',
  templateUrl: './usermgtadd.component.html',
  styleUrls: ['./usermgtadd.component.css']
})
export class UsermgtaddComponent implements OnInit {

  tempid=null;
  temp = null;
  public componentdetails=false;
  public categorydetails=false;

  public empcategorydetails=false;
  public vencustcategorydetails=false;
  public catandprodcategorydetails=false;
  public purchasecategorydetails=false;
  public salescategorydetails=false;
  public financecategorydetails=false;
  public stockcategorydetails=false;
  public reportcategorydetails=false;

  masterlist:  any =[
    {
      number:'01',
      name:'HRD',
    },
    {
      number:'02',
      name:'SALES MANAGER',
    },
    {
      number:'03',
      name:'ADMINISTRATOR',
    },
    {
      number:'04',
      name:'WAREHOUSE CHIEF',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  mainlList(number: string){
    if(this.tempid!==null){
      document.getElementById(this.tempid).style.backgroundColor='#243641';
      document.getElementById(this.tempid).style.border='none';
    }
    this.tempid=number;
  document.getElementById(this.tempid).style.border='5px solid #7C868D';

  if(number=='01'){
    this.componentdetails=true;
    this.categorydetails=false;
  }
  if(number=='02'){
    this.componentdetails=true;
    this.categorydetails=false;
  }
  if(number=='03'){
    this.componentdetails=true;
    this.categorydetails=false;
  }
  if(number=='04'){
    this.componentdetails=true;
    this.categorydetails=false;
  }
  }

  emplyeedetails(emp: string){
    this.empcategorydetails=true;
    this.categorydetails=true;
    this.vencustcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.purchasecategorydetails=false;
    this.salescategorydetails=false;
    this.financecategorydetails=false;
    this.stockcategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = emp;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  venandcustdetails(vencust: string){
    this.vencustcategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.purchasecategorydetails=false;
    this.salescategorydetails=false;
    this.financecategorydetails=false;
    this.stockcategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = vencust;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  catandproddetails(category: string){
    this.catandprodcategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.vencustcategorydetails=false;
    this.purchasecategorydetails=false;
    this.salescategorydetails=false;
    this.financecategorydetails=false;
    this.stockcategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = category;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  purchasedetails(purchase: string){
    this.purchasecategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.vencustcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.salescategorydetails=false;
    this.financecategorydetails=false;
    this.stockcategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = purchase;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  salesdetails(sales: string){
    this.salescategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.vencustcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.purchasecategorydetails=false;
    this.financecategorydetails=false;
    this.stockcategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = sales;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  financedetails(finance: string){
    this.financecategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.vencustcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.purchasecategorydetails=false;
    this.salescategorydetails=false;
    this.stockcategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = finance;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  stockdetails(stock: string){
    this.stockcategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.vencustcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.purchasecategorydetails=false;
    this.salescategorydetails=false;
    this.financecategorydetails=false;
    this.reportcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = stock;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }
  reportdetails(report: string){
    this.reportcategorydetails=true;
    this.categorydetails=true;
    this.empcategorydetails=false;
    this.vencustcategorydetails=false;
    this.catandprodcategorydetails=false;
    this.purchasecategorydetails=false;
    this.salescategorydetails=false;
    this.financecategorydetails=false;
    this.stockcategorydetails=false;
    if(this.temp!==null){
      document.getElementById(this.temp).style.border='none';
      this.temp=null;
    }
    this.temp = report;
    document.getElementById(this.temp).style.border='5px solid #7C868D';
  }

}
