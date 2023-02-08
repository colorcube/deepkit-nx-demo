import { AutoIncrement, entity, MaxLength, MinLength, PrimaryKey } from '@deepkit/type';

@entity.name('book')
export class Book {
    id: number & PrimaryKey & AutoIncrement = 0;
    created: Date = new Date;

    author: string & MaxLength<128>;

    description: string & MaxLength<4096> = '';

    price: number = 0;
    isbn: string & MaxLength<64> = '';

    constructor(
        public title: string & MaxLength<128> & MinLength<3>,
    ) {
    }
}
