import { TestService } from './test-service';
import { HtmlResponse, http } from '@deepkit/http';

export class TestHttpController {
    constructor(
        private testService: TestService,
    ) {
    }

    @http.GET('/test')
    hello() {
        return new HtmlResponse(this.testService.render());
    }
}
