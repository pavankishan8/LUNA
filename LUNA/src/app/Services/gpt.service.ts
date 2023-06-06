import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor(private http: HttpClient) { }

  APIKey = "http://localhost:61537/api/LunaGPT";

  getData(request: string): Observable<any>{
    return this.http.get(this.APIKey + "?request=" + request, {responseType:'text'});
  }
}
