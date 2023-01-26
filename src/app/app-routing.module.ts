import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './views/default.component';
import { DashboardComponent } from './views/dashboard.component';
import { HTML_n_CSSComponent } from './views/category/html-n-css.component';
import { JavascriptComponent } from './views/category/javascript.component';
import { PHP_n_MySQLComponent } from './views/category/php-n-mysql.component';
import { WebDesignComponent } from './views/posts/web-design.component';
import { LoginFormComponent } from './views/posts/login-form.component';
import { CardDesignComponent } from './views/posts/card-design.component';
import { AnalyticsComponent } from './views/analytics.component';
import { ChartComponent } from './views/chart.component';
import { UIFaceComponent } from './views/plugins/ui-face.component';
import { PigmentsComponent } from './views/plugins/pigments.component';
import { BoxIconsComponent } from './views/plugins/box-icons.component';
import { ExploreComponent } from './views/explore.component';
import { HistoryComponent } from './views/history.component';
import { SettingComponent } from './views/setting.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'html-n-css', component: HTML_n_CSSComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'php-n-mysql', component: PHP_n_MySQLComponent },
  { path: 'posts/web-design', component: WebDesignComponent },
  { path: 'posts/login-form', component: LoginFormComponent },
  { path: 'posts/card-design', component: CardDesignComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'ui-face', component: UIFaceComponent },
  { path: 'pigments', component: PigmentsComponent },
  { path: 'box-icons', component: BoxIconsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
