import { Module } from '@nestjs/common';
import { CatsController } from './catsController/cats.controller';
import { CatsServiceService } from './catsService/cats-service/cats-service.service';

@Module({
  controllers: [CatsController],
  providers: [CatsServiceService],
  exports: [CatsServiceService],
})
export class CatsModule {}
