import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  getDataCV() {
    return {
      name: 'Donny',
      age: 25,
      phone: '+12 3123123',
      image: 'public/rickandmortyapi.jpg',
      email: 'donny@gmail.com',
      address: 'halan halan',
      techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular']
    }
  }

  constructor() { }
}
