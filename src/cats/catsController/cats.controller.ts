import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatsServiceService } from '../catsService/cats-service/cats-service.service';
import { Cat } from '../model/cat.interface';
import { ForbiddenException } from 'src/exceptions/forbiddent.exception';
import { HttpExceptionFilter } from 'src/exceptions/filters/http-exception.filter';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsServiceService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiBody({ type: Cat, description: 'The record to create.' })
  async create(@Body() cat: Cat) {
    console.log('cat', cat);
    this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return this.catsService.findAll();
    throw new ForbiddenException();
  }

  @Put()
  async update(@Body() updateCatDto: Cat) {
    this.catsService.update(updateCatDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.catsService.delete(id);
  }

  @Get('/exceptions/forbidden')
  async exception() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    try {
      this.catsService.create(null);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
