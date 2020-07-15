import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://PracticalLightyellowEvaluations--darraghmoloney.repl.co";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendPostRequest(newMusic: object) {
    console.log(newMusic)
    return this.httpClient.post(this.REST_API_SERVER, newMusic);
    
  }

  public sendDeleteRequest(id: string) {
    return this.httpClient.delete(this.REST_API_SERVER + '/' + id)
  }

  public sendUpdateRequest(id: string, updateObject: object) {
    return this.httpClient.put(this.REST_API_SERVER + '/' + id, updateObject);
  }
}
