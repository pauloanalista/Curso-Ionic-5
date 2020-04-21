import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(tarefa: string) {
    let url = 'http://localhost:17901/api/todo';

    var header = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    }

    let param = { nome: tarefa };

    return this.http.post(url, param, header).toPromise();
  }

  update(tarefa: any) {
    let url = 'http://localhost:17901/api/todo';

    var header = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    }

    return this.http.put(url, tarefa, header).toPromise();
  }

  list() {
    let url = 'http://localhost:17901/api/todo';

    return this.http.get(url).toPromise();
  }

  delete(id: any) {
    let url = 'http://localhost:17901/api/todo/' + id;

    return this.http.delete(url).toPromise();
  }
}
