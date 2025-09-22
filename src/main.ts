import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import 'zone.js'

bootstrapApplication(App, {
  providers: [provideHttpClient()]
} )
  .catch((err) => console.error(err));
