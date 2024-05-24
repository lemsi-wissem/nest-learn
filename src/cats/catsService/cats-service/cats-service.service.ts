import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/model/cat.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CatsServiceService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    cat.id = uuidv4();
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    console.log('cats', this.cats);
    return this.cats;
  }

  findById(id: string): Cat {
    console.log('id', id);
    console.log('cats', this.cats);
    return this.cats.find((c: Cat) => c.id == id);
  }

  update(cat: Cat) {
    const index = this.cats.findIndex((c: Cat) => c.id === cat.id);
    if (index > -1) {
      this.cats[index] = cat;
    }
  }

  delete(id: string) {
    const index = this.cats.findIndex((c: Cat) => c.id === id);
    if (index > -1) {
      this.cats.splice(index, 1);
    }
  }
}
