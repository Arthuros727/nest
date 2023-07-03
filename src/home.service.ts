import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getHome(): string {
    return '<a href="/AddEvent"><button>add event</button></a>  <a href="/show/events"><button>Show event</button></a>';
  }
}

//realy .

//Make view