import { Controller, Post, Body } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create costumer',
      payload,
    };
  }
}
