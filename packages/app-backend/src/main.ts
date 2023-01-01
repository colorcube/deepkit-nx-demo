import { App } from '@deepkit/app';
import { FrameworkModule } from '@deepkit/framework';
import { ControllerModule } from './app/controller/controller-module';


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
        new ControllerModule()
    ],
})
    .loadConfigFromEnv()
    .run();
