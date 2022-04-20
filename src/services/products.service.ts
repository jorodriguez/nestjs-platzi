import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Ariel polvo',
      description: 'Jabón en polvo',
      price: 100,
      stock: 100,
      image:
        'https://img.freepik.com/vector-gratis/castillo-magico-rosa_107791-3704.jpg?t=st=1650472962~exp=1650473562~hmac=4ceeb25ea60c0b184995312a0cd0ade210cd59f1c1881832af40129fb12517cc&w=740',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }

    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  //reto crear metodo de actualizar y eliminar
  update(id: number, payload: Product) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const product = this.findOne(id);
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    return product;
  }
}
