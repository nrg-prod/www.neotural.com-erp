//import { SubMenuItem } from "./subMenuItem.model";



export class MenuItem {
  name : string;
  //isExpanded: boolean;
  //subItems: SubMenuItem[];
  iconType: string;
  pageName : string

  constructor(name : string, pageName : string){
    this.name = name;
    //this.isExpanded = isExpanded;
    this.pageName = pageName;
    //this.subItems = subItems;
    this.iconType = "keyboard_arrow_right";
  

  }
 }
