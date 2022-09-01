import { IconName, IconPrefix } from "@fortawesome/free-solid-svg-icons";

export interface List_Items {
    name:string
    id:number,
    prefix:IconPrefix
    icon:IconName
}

export interface tree_items {
    name: string;
    children?: tree_items[];
}


export interface flat_Node {
    expandable: boolean;
    name: string;
    level: number;
  }
