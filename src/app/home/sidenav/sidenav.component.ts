import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource,  MatTreeFlattener} from '@angular/material/tree';
import{tree_items , flat_Node, List_Items } from './items'
import { ItemsService } from './items.service';





@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit {


  list_Items:List_Items[]=[]
  private _transformer = (node: tree_items, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<flat_Node>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor( private itemservice:ItemsService) {

    this.itemservice.getItems().subscribe((res:List_Items|any)=>{
      this.list_Items=res
      
    })
    this.itemservice.getTreeItems().subscribe((res:tree_items|any)=>{
      this.dataSource.data=res
    })
    
   
  }

  hasChild = (_: number, node: flat_Node) => node.expandable;


  ngOnInit(): void {
  
  }

}
