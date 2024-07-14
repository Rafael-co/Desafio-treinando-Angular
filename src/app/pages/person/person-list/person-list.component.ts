import { PersonService } from '../../../service/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-profile-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  profiles:Person[] = []

 constructor(private personService:PersonService){}

 reloadPage(isReload:boolean){
   if(isReload){
    this.ngOnInit();
   }
 }

ngOnInit(): void {
  this.personService.findAll().subscribe(result => 
    this.profiles = result

  )
}


}
