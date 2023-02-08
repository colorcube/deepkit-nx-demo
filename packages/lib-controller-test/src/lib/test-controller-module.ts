import { createModule } from '@deepkit/app';
import { TestHttpController } from './test-http-controller';


export class TestControllerModule extends createModule({
  controllers: [TestHttpController],
}) {}
