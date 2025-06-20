import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  async getPokemonList(limit:number = 100):Promise<any[]> {
    const response = await firstValueFrom(
      this.http.get<any>(`${this.apiUrl}?limit=${limit}`)
    )
    return response.results;
  }

  async getPokemonDetail(url:string):Promise<any> {
    return firstValueFrom(this.http.get<any>(url))
  }
}
