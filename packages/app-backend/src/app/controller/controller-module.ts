import { createModule } from '@deepkit/app';
import { http } from '@deepkit/http';

export class HelloWorldService {
  async helloWorld() {
    return 'Hello there!';
  }
}

class MyHttpController {
  constructor(
    private helloService: HelloWorldService,
  ) {}
  @http.GET('/hello')
  hello() {
    return this.helloService.helloWorld();
  }
}

export class ControllerModule extends createModule({
  controllers: [MyHttpController],
  providers: [HelloWorldService],
}) {}
