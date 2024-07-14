import Swal from 'sweetalert2';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/service/person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
idPerson: string | null = this.route.snapshot.paramMap.get('id');
person:Person = {
  name: '',
  role: '',
  age: 0,
  email: ''
}
constructor(private personService:PersonService ,
  private route: ActivatedRoute,
  private router: Router
){

}
  ngOnInit(): void {
    this.initializaFields()
  }

 initializaFields(){
   
  if(this.idPerson){
    this.personService.findById(this.idPerson).subscribe(
      result =>{
        this.person = result;


      }
    )
    
  }else{
    Swal.fire({
      title: 'Pessoa Não encontrada!',
      icon: 'error',
    })
    this.router.navigate(["/home"])
  }
 }
 onSubmit(formUpdate: NgForm) {
  if(formUpdate.valid){
    this.personService.update(this.idPerson,this.person)
    .subscribe(
      result =>{
        Swal.fire({
          title: 'Pessoa atualizada com sucesso!',
          icon: 'success',
        })
        this.router.navigate(["/people"])
      }
      )
  }
 } 
}
