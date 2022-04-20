import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  get() {
    return {
      message: 'brands',
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create brands',
      payload,
    };
  }
}
