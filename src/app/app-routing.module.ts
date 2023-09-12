import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@app/login';
import { AuthGuard } from '@app/_helpers';
import { Role } from '@app/_models';
import { DashboardComponent } from '@app/view/dashboard';
import { AppComponent } from '@app/app.component';
import { ViewComponent } from '@app/view';
import { TerritorialMonitoringComponent } from '@app/view/territorial-monitoring';
import { FollowUpStructureComponent } from '@app/view/follow-up-structure';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
    // canActivate: [AuthGuard],
  },

  {
    path: 'view',
    component: ViewComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'seguimiento-territorial',
        component: TerritorialMonitoringComponent,
      },
      { path: 'seguimiento-estructura', component: FollowUpStructureComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent }
    ],
    canActivate: [AuthGuard],
    data: { roles: [Role.jefeequipo, Role.coordinadores] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
