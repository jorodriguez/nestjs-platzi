import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    //@Query('limit') limit: number, //declaracion sin valor por defecto
    //@Query('offset') offset: number, //declaracion sin valor por defecto
    @Query('limit') limit = 100, //como se especifica el 100 typescript infiere que por defecto es number
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return { message: `yo soy un filtro` };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED) // ejemplo para especificar un httpCode
  getOne(
    @Res() response: Response,
    @Param('productId', ParseIntPipe) productId: number, //ParseIntPipe es para hacer un parseo a int de forma explicita y marcar error en caso de no mandar un number
  ) {
    //return { message: `product ${productId}` };
    //Se puede escribir una respuesta con express pero no se recomienda ya que se apegaria a la tecnologia Express
    //response.status(200).send({ message: `product ${productId}` });
    //return this.productsService.findOne(+productId);
    response.status(200).send(this.productsService.findOne(productId));
  }

  @Post()
  create(@Body() payload: any) {
    //o create(@Body('name') name: string) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(+id);
  }
}
