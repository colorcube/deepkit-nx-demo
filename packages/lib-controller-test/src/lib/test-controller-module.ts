import { createModule } from '@deepkit/app';
import { TestService } from './test-service';
import { TestHttpController } from './test-http-controller';


export class TestControllerModule extends createModule({
  controllers: [TestHttpController],
  providers: [TestService],
}) {}
