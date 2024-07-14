import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPersonComponent } from './pages/person/new-person/new-person.component';
import { PersonListComponent } from './pages/person/person-list/person-list.component';
import { UpdatePersonComponent } from './pages/person/update-person/update-person.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent
  },
  {path:'people',component : PersonListComponent},
  {path:"new",component: NewPersonComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'edit/:id', component:UpdatePersonComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
