import { Client } from 'pg';
import { ssmAttributes } from '../services/ssm-service';

export class DBRepository {


  private async establishDBConnection() {
     try {
        const client = new Client(this.getParams());
        await client.connect();
        return client;
     } catch (error) {
        console.log('error::', error);
        throw new Error("Error establishing connection to database");
        
     }

  }

  private getParams() {
    const dbConfig = JSON.parse(ssmAttributes['/triec/lambda/db/config']);
    return { 
          host: dbConfig.host, 
          port: dbConfig.port, 
          user: dbConfig.user, 
          database: dbConfig.database,
          password: ssmAttributes['/triec/lambda/db/password'],
          ssl: {
              rejectUnauthorized: dbConfig.ssl
          },
          connectionTimeoutMillis: dbConfig.timeout

      }
    
  }
  private async closeConnection(client: Client) {
    try {
        await client.end();
        console.log('Connection closed');
    } catch (error) {
        console.log('error::', error);
        throw new Error("Error closing connection to database");
    }
  }
  public async persistRecord(sql: string, values: any[]) {
    let client: Client;
    try {
        client = await this.establishDBConnection();
        const response = await client.query(sql, values);
        return response.rows;
        
    } catch (error) {
        console.log('error::', error);
        throw new Error("Error creating record");
    } finally {
        if (client) {
            this.closeConnection(client);
        }
    }
  }
  public async retrieveRecord(sql: string, values: any[]) {
    let client: Client;
    try {
        client = await this.establishDBConnection();
        const response = await client.query(sql, values);
        return response.rows;
    } catch (error) {
        console.log('error::', error);
        throw new Error("Error while retrieving record");
    } finally {
        if (client) {
            this.closeConnection(client);
        }
    }
  }
}