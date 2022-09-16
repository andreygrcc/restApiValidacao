import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeDeUsuario: 'andrey',
      email: 'agzinhogamer@gmail.com',
      senha: '123456',
      nomeCompleto: 'andrey giovanni',
      dataDeEntrada: new Date(),
    },
  ];

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario == nomeDeUsuario,
    );
  }

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
}
