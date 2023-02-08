import { createModule } from '@deepkit/app';
import { TestService } from './test-service';


export class BookModule extends createModule({
  providers: [TestService],
  exports: [TestService],
}) {}
