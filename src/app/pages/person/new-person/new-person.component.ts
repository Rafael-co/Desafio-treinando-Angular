import { PersonService } from '../../../service/person.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent {
  constructor(private personService: PersonService,
    private formBuilder: FormBuilder,
     private router: Router) {}
  
  personForm :FormGroup=  this.formBuilder.group( {
    name: ['', Validators.required],
    role: ['', Validators.required],
    age: [0, [Validators.required, Validators.min(1)]],
    email :['', [Validators.required, Validators.email]],
    isActive:[''],
    experience:[""],
    country:[""],
  })

  onSubmit() {
    const person:Person = this.personForm.value;
    this.personService.create(person).subscribe(result => {

      Swal.fire({
        title: 'Pessoa cadastrada com sucesso!',
        icon: 'success',
      })
      this.router.navigateByUrl('/people')
    });
  }
}
