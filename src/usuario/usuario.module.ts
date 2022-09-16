import { Module } from '@nestjs/common';
import { isNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico.validator';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, isNomeDeUsuarioUnicoConstraint],
})
export class UsuarioModule {}
