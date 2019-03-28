import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambrianServiceService {

  constructor() { }
  getCambrian() {
    return[
      {id : 1, name: 'Etihad', Country : 'Abu Dhabi,UAE' },
      {id : 2, name: 'Emirates', Country: 'Dubai,UAE' },
      {id : 3, name: 'Singapore Airlines', Country: 'Singapore' },
      {id : 4, name: 'Qatar Airways', Country: 'Qatar' },
    ];
  }
}
