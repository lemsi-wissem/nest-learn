import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CatMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    next();
  }
}
