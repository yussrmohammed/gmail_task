import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as fasstar,
  faInbox  ,
  faEnvelope, 
  faClock,
  faCircleExclamation  ,
  faPaperPlane,
  faEnvelopeOpen


} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    FontAwesomeModule

  ]
})
export class FontAwesomeModuleIcon { 

  constructor (library: FaIconLibrary){
    library.addIcons(fasstar,
      faInbox,
      faClock,
      faCircleExclamation,
      faPaperPlane,
      faEnvelope,
      faEnvelopeOpen
      
      )
      library.getIconDefinition("fas" , "circle-exclamation")
      library.getIconDefinition('fas','paper-plane')

      
  }
}
