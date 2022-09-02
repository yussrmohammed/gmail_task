import { AfterViewInit, Component,  OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle} from '@angular/material/button-toggle';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { IEmails } from './emails';

import { EmailsService } from './emails.service';
@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit ,AfterViewInit {

 
dataSource=new MatTableDataSource<IEmails>()



  displayedColumns= ['sender', 'subject', 'description','actions'];
  @ViewChild(MatPaginator) paginator:MatPaginator | any
  constructor(private emailservice:EmailsService) { }

  ngAfterViewInit(): void {
    
      this.dataSource.paginator=this.paginator
      
   
      
    
  }
  ngOnInit(): void {

    this.emailservice.getemails().subscribe((res:IEmails|any)=>{
      
      this.dataSource.data=res
     
    })
    
  }
  

  readedToggle(button:MatButtonToggle){
    
    if(button.value=="envelope"){
     button.value='envelope-open'
     button._buttonElement.nativeElement.parentNode?.parentNode?.parentElement?.parentElement?.classList.remove('notreaded')
    
    }
    else
    {
        button.value = "envelope";
        button._buttonElement.nativeElement.parentNode?.parentNode?.parentElement?.parentElement?.classList.add('notreaded')
      
        
    }
button.checked=!button.checked
}
starToggle(btn:MatButtonToggle){
  if(btn.checked){
    btn._buttonElement.nativeElement.parentElement?.classList.add('stared')
    console.log(btn._buttonElement.nativeElement.parentElement?.classList)
    
  }
else{
  btn._buttonElement.nativeElement.parentElement?.classList.remove('stared')
  

}


  
  

}
  

}
