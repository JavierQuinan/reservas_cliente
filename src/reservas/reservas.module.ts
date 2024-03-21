import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservasController } from './reservas.controller';
import { ReservasService } from './reservas.service';
import { ClientesService } from 'src/clientes/clientes.service';

@Module({
  controllers: [ReservasController],
  providers: [ReservasService, ClientesService]
})
export class ReservasModule {}
