import { Injectable } from '@nestjs/common';
import { db, Order } from './../db';
import { v4 as uuidv4 } from 'uuid';
import { PrismaOrderService } from 'src/shared/orders/prisma.order';

@Injectable()
export class OrdersService {
  constructor(private prismaOrderService: PrismaOrderService) {}
  public getAll(): Promise<Order[]> {
    return this.prismaOrderService.order.findMany();
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaOrderService.order.findUnique({
      where: { id },
    });
  }
  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaOrderService.order.delete({
      where: { id },
    });
  }

  public create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    return this.prismaOrderService.order.create({
      data: orderData,
    });
  }
  public updateById(
    id: Order['id'],
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    return this.prismaOrderService.order.update({
      where: { id },
      data: orderData,
    });
  }
}
