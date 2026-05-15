import { Injectable, Logger } from '@nestjs/common';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { envs } from './config';
import { PrismaClient } from './generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  private readonly logger: Logger = new Logger(PrismaService.name);
  constructor() {
    const adapter: PrismaBetterSqlite3 = new PrismaBetterSqlite3({
      url: envs.databaseUrl,
    });
    super({ adapter });

    this.logger.log('Prisma Service Initialized');
  }
}
