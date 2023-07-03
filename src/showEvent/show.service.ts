import { Injectable } from '@nestjs/common';
import { Pool } from 'pg'; // NEEDED

@Injectable()
export class ShowService {
  private pool: Pool;

  constructor() {
    // PostgreSQL connexion
    this.pool = new Pool({
      user: 'tix',
      host: 'localhost',
      database: 'reskue',
      password: 'password',
      port: 5432, // Postgresql port
    });
  }

  async getEvents(): Promise<any[]> {
    try {
      // querry to get all row from event
      const query = 'SELECT * FROM public.event';
      const result = await this.pool.query(query);

      // send data json object
      return result.rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      throw new Error('Erreur lors de la récupération des données');
    }
  }
}
