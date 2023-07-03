import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { EventService } from './home.service';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly HomeService: HomeService) {}

  @Get()
  getHome(): string {
    return this.HomeService.getHome();
  }
}
