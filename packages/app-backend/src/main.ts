import { App } from '@deepkit/app';
import { FrameworkModule } from '@deepkit/framework';
import { ControllerModule } from './app/controller/controller-module';
import { TestControllerModule } from '@deepkit-nx-demo/lib-controller-test';
import { BookModule, TestService } from '@deepkit-nx-demo/lib-book';


export class AppConfig {
    something: 'abc';
}


new App({
    config: AppConfig,
    imports: [
        new FrameworkModule({
            debug: true,
            migrateOnStartup: true,
            httpLog: true,
        }),
        new ControllerModule(),
        new BookModule(),
        new TestControllerModule(),
    ],
    // makes no difference to import BookModule()
    // providers: [
    //     TestService
    // ]
})
    .loadConfigFromEnv()
    .run();
