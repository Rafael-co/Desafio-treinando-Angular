import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/service/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 @Input()
 people:Person[] = []
 @Output() reloadPage = new EventEmitter<boolean>(); 

 constructor(private personService:PersonService,private router: Router){}

 delete(id: string | undefined,name: string | undefined): void {
  if (!id) return;

  Swal.fire({
    title: `Tem certeza que quer excluir o usuário ${name}?`,
    showDenyButton: true,
    confirmButtonText: "excluir",
    denyButtonText: `Cancelar`
  })
  .then(result => {
    if (result.isConfirmed) {
      this.personService.delete(id)
      .subscribe(() => {
        Swal.
        fire({
          title: `Usuário ${name} foi excluído com sucesso!`,
          icon: 'success',
          });
        this.reloadPage.emit(true)
      });
    }
  });
}

  

}
