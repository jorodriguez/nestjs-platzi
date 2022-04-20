import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `product ${productId} id ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create categorie',
      payload,
    };
  }
}
