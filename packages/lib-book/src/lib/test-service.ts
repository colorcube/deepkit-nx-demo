import { Book } from './model/book';
import { deserialize, serialize } from '@deepkit/type';

export class TestService {
    render() {

        const b1 = new Book('Hyperion');
        b1.author = 'Dan Simmons';
        b1.isbn = '75893754375043270';
        b1.price = 9.99;
        b1.description = 'Hyperion is a 1989 science fiction novel by American author Dan Simmons.';
        const b1_code = JSON.stringify(serialize<Book>(b1), null, 2);


        const b2 = deserialize<Book>(b1);
        const b2_code = JSON.stringify(serialize<Book>(b2), null, 2);

        const b3_string = `{
  "id": 0,
  "created": "1999-01-05T17:06:38.986Z",
  "author": "Dan Simmons",
  "description": "Hyperion is a 1989 science fiction novel by American author Dan Simmons.",
  "price": 9.99,
  "isbn": "75893754375043270",
  "title": "Hyperion"
}`;
        const b3 = deserialize<Book>(JSON.parse(b3_string));
        const b3_code = JSON.stringify(serialize<Book>(b3), null, 2);

        return `<!DOCTYPE html>
            <html>
            <head>
                <title>Serialize Tests</title>
            </head>

            <body>
                <h3>Tests if serialze/deserialize works</h3>
                <hr/>
                    <h4>Book serialize</h4>
                    <pre>${b1_code}</pre>
                <hr/>
                    <h4>Book deserialize from JSON object</h4>
                    <pre>${b2_code}</pre>
                <hr/>
                    <h4>Book deserialize from JSON string</h4>
                    <pre>${b3_code}</pre>
                <hr/>
            </body>
            </html>`;
    }
}
