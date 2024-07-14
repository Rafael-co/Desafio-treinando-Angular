import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] = [
    {
      'name': 'Home',
      'url': 'home'
    },
    
    {
      'name': 'Nova Pessoa',
      'url': '/new',
    },
    {
      'name': 'Lista de Pessoas',
      'url': '/people',
    },
  ]
}
