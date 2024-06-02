import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpTokenInterceptor } from '../core/intereceptors/Http-token-interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// I18n support with ngx-translate (https://www.npmjs.com/package/@ngx-translate/http-loader)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpBackend],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    TranslateService,
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation()),
    ]),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
    provideAnimationsAsync(),
  ],
};
// Usage example:
// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <h1>{{ 'HELLO' | translate }}</h1>
//       <button (click)="switchLanguage('en')">English</button>
//       <button (click)="switchLanguage('es')">Español</button>
//     </div>
//   `,
// })
// export class AppComponent {
//   constructor(private translate: TranslateService) {
//     translate.setDefaultLang('en');
//   }

//   switchLanguage(language: string) {
//     this.translate.use(language);
//   }
// }
