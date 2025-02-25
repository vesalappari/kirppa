import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { User } from '../entitys/user.entity';
import { Product } from '../entitys/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Product])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
