import { Controller, Get, Render } from '@nestjs/common';
import { ShowService } from './show.service';

@Controller('events')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  @Get()
  @Render('event') // Specify view you want to be render -> ../view/???
  async getEvents() {
    try {
      const events = await this.showService.getEvents();
      return { events };
    } catch (error) {
      console.error('Error to get data', error);
      return { message: 'Error to get data' };
    }
  }
}


