import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  api = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  findAll():Observable<Person[]> {
    return this.http.get<Person[]>(this.api).pipe(
      catchError(error=>{
        
        console.error(error)
        return EMPTY;
      }
      )
     
    );
  }

  create(person: Person):Observable<Person> {
    return this.http.post<Person>(this.api, person).pipe(
      catchError(error=>{
        
        console.error(error)
        return EMPTY;
      }
      )
     
    );
  }
  delete(id:string|undefined ){
    return this.http.delete(`${this.api}/${id}`).pipe(
      catchError(error=>{
        
        console.error(error)
        return EMPTY;
      }
      )
     
    )
  }
  findById(id:string|undefined ):Observable<Person>{
    return this.http.get<Person>(`${this.api}/${id}`).pipe(
      catchError(error=>{
        
        console.error(error)
        return EMPTY;
      }
      )
     
    )
  }
  update(id:string|null,person:Person ){
    return this.http.put<Person>(`${this.api}/${id}`,person).pipe(
      catchError(error=>{
        
        console.error(error)
        return EMPTY;
      }
      )
     
    )
  }
}
