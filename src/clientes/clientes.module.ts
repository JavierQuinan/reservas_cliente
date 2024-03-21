import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { Cliente, ClienteSchema } from './schema/cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }]), 
  ],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
