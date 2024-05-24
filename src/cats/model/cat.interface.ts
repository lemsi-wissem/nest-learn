import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
export class Cat {
  id: string = uuidv4();

  @ApiProperty({
    description: 'The name of the Cat',
    example: 'Whiskers',
  })
  name: string;
  @ApiProperty({
    description: 'The age of the Cat',
    example: 3,
  })
  age: number;
  @ApiProperty({
    description: 'The breed of the Cat',
    example: 'Siamese',
  })
  breed: string;
}
