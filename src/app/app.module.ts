import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './views/analytics.component';
import { HTML_n_CSSComponent } from './views/category/html-n-css.component';
import { JavascriptComponent } from './views/category/javascript.component';
import { PHP_n_MySQLComponent } from './views/category/php-n-mysql.component';
import { ChartComponent } from './views/chart.component';
import { DashboardComponent } from './views/dashboard.component';
import { DefaultComponent } from './views/default.component';
import { ExploreComponent } from './views/explore.component';
import { HistoryComponent } from './views/history.component';
import { BoxIconsComponent } from './views/plugins/box-icons.component';
import { PigmentsComponent } from './views/plugins/pigments.component';
import { UIFaceComponent } from './views/plugins/ui-face.component';
import { CardDesignComponent } from './views/posts/card-design.component';
import { LoginFormComponent } from './views/posts/login-form.component';
import { WebDesignComponent } from './views/posts/web-design.component';
import { SettingComponent } from './views/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DashboardComponent,
    HTML_n_CSSComponent,
    JavascriptComponent,
    PHP_n_MySQLComponent,
    WebDesignComponent,
    LoginFormComponent,
    CardDesignComponent,
    AnalyticsComponent,
    ChartComponent,
    UIFaceComponent,
    PigmentsComponent,
    BoxIconsComponent,
    ExploreComponent,
    HistoryComponent,
    SettingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
