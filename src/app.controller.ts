import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'im new';
  }

  //no importa si se decalara con slash
  @Get('/ruta/')
  hello() {
    return 'with slash';
  }
}
