import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';

@Module({
  imports: [],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}