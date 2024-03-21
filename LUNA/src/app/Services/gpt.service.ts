import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor(private http: HttpClient) { }

  APIKey = "http://localhost:61537/api/LunaGPT";
  url: string="";

  getData(request: string): Observable<any>{
    return this.http.get(this.APIKey + "?request=" + request, {responseType:'text'});
  }

  search(message :string,level :string) {
    this.url = "http://localhost:51497/";
    debugger
    return this.http.get<any>(this.url + "api/log_viewer/GetData?message="+message+"&level="+level,
      {
        observe: "response"
      });

  }
}
