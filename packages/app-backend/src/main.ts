import { App } from '@deepkit/app';
import { FrameworkModule } from '@deepkit/framework';
import { ControllerModule } from './app/controller/controller-module';
import { TestControllerModule } from '@deepkit-nx-demo/lib-controller-test';


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
        new TestControllerModule()
    ],
})
    .loadConfigFromEnv()
    .run();
