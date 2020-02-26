import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  cep: string = "26115470";
  resultado: any = { cep: '', logradouro: '' };
  result: any;
  constructor(private cepService: CepService, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  consultarCep() {
    this.cepService.obterEndereco(this.cep)
      .then((json) => {
        this.resultado = json;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  get() {
    //chama a tela de aguarde
    this.usuarioService.obterUsuarioPorId(4)
      .then((response) => {
        this.result = JSON.stringify(response);
        //fecha tela de aguarde
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
        //fecha tela de aguarde
      });
  }

  post() {
    let usuario = { id: 50, nome: 'Zeca' };

    this.usuarioService.adicionar(usuario).then((response: any) => {
      this.result = JSON.stringify(response);
    })
      .catch((response) => {
        this.result = JSON.stringify(response);
      });
  }

  put() {
    let usuario = { id: 4, nome: 'Tereza' };

    this.usuarioService.atualizar(usuario).then((response: any) => {
      this.result = JSON.stringify(response);
    })
      .catch((response) => {
        this.result = JSON.stringify(response);
      });
  }

  delete() {
    //chama a tela de aguarde
    this.usuarioService.excluirPorId(4)
      .then((response) => {
        this.result = JSON.stringify(response);
        //fecha tela de aguarde
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
        //fecha tela de aguarde
      });
  }
}
