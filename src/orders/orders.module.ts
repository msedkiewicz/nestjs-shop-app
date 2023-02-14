import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaOrderService } from '../shared/orders/prisma.order';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController, PrismaOrderService],
})
export class OrdersModule {}
