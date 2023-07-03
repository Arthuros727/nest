// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { EventModule } from './event.module';
import { HomeModule } from './home.module';
import { ShowModule } from './showEvent/show.module';

@Module({
  imports: [
    EventModule,
    HomeModule,
    ShowModule, // add all your module here !
    RouterModule.register([
      {
        path: 'AddEvent',
        module: EventModule,
      },
      {
        path: 'home',
        module: HomeModule, // using HomeMOdule to route -> home !
      },
      {
        path: 'show',
        module: ShowModule, // ^ -> show
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


