import { ApplicationRef, Injector, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NzLayoutModule,
    NzProgressModule,
    NzGridModule,
    NzTimelineModule,
    NzCardModule,
    NzStatisticModule
    // RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) { }
  // ngDoBootstrap(appRef: ApplicationRef): void {
  //   const el = createCustomElement(AppComponent, { injector: this.injector });
  //   customElements.define('loy-portal-dashboard', el);
  // }
}
