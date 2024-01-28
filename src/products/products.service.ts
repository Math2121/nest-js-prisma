import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }

  create(createProductyDto: CreateProductDto) {

    return this.prisma.product.create({
      data: createProductyDto
    })

  }

  async findAll() {
    return await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  findOne(id: number) {
    return this.prisma.product.findUniqueOrThrow({
      where: {
        id
      }
    })
  }

  update(id: number, updateProductDto: UpdateCategoryDto) {
    return this.prisma.product.update({
      where: {
        id
      },
      data: updateProductDto
    })
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id
      }
    })
  }
}
