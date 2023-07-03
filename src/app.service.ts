import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<form action="http://localhost:7272/ajout" method="post"> <p>title:</p> <input type="text" name="title"></input> <p>description:</p> <input type="text" name="description"></input> <p>date</p><input type="date" name="date"></input> <p>location</p> <input type="text" name="location"></input> <p>how much tickets</p><input type="number" name="ticket"></input> <button type="submit">ok</button></form> ';
  }
}

// make view next time !
