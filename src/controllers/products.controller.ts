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
} from '@nestjs/common';

import { response, Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    //@Query('limit') limit: number, //declaracion sin valor por defecto
    //@Query('offset') offset: number, //declaracion sin valor por defecto
    @Query('limit') limit = 100, //como se especifica el 100 typescript infiere que por defecto es number
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return { message: `limit=> ${limit} offset=> ${offset} brand ${brand}` };
  }

  @Get('filter')
  getProductFilter() {
    return { message: `yo soy un filtro` };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED) // ejemplo para especificar un httpCode
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    //return { message: `product ${productId}` };
    //Se puede escribir una respuesta con express pero no se recomienda ya que se apegaria a la tecnologia Express
    response.status(200).send({ message: `product ${productId}` });
  }

  @Post()
  create(@Body() payload: any) {
    //o create(@Body('name') name: string) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Deleted ${id}`,
      id,
    };
  }
}
