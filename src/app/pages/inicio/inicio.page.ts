import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarios: Usuario[] = [];
  textoBuscar = "";
  public buscadorAbierto = false;

  constructor(private menuCtrl: MenuController, private uService: UsuariosService) {
    this.uService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  ngOnInit() {
  }

  openMenu(){
    this.menuCtrl.toggle();
  }

  openSearch(){
    this.buscadorAbierto = true;
  }

  click(item){
    console.log(item);
  }

  buscarUsuario(event){
    const texto = event.target.value;
    this.textoBuscar = texto;
    console.log(texto);
  }

}