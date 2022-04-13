import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = "http://lucasreno.kinghost.net/love-calculator/";
  nome1: string = "";
  nome2: string = "";
  porcentagem = 0;

  constructor(private http: HttpClient) { }

  calcular() {
    let urlCompleta = this.url + this.nome1 + "/" + this.nome2;
    this.http.get<any>(urlCompleta).subscribe(
      resposta => {
        this.porcentagem = resposta;
      }
  
  }
    );
  }

}
