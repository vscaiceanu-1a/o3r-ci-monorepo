/* eslint-disable no-console */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationDevtoolsConsoleService, ApplicationDevtoolsMessageService } from '@o3r/application';
import { inject } from '@angular/core';
import { runInInjectionContext } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .then((m) => { runInInjectionContext(m.injector, () => { inject(ApplicationDevtoolsMessageService); }); return m; })
  .then((m) => { runInInjectionContext(m.injector, () => { inject(ApplicationDevtoolsConsoleService); }); return m; })
  .catch((err) => console.error(err));
