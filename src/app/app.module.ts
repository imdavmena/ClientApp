import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Icons
import { IconsModule } from '@app/icons/icons.module';

// Helpers
import { JwtInterceptor, ErrorInterceptor } from '@app/_helpers';

// Routing
import { AppRoutingModule } from '@app/app-routing.module';

// View
import { DashboardComponent } from '@app/view/dashboard';
import { LoginComponent } from '@app/login';
import { ViewComponent } from '@app/view';
import { FollowUpStructureComponent } from '@app/view/follow-up-structure';
import { TerritorialMonitoringComponent } from '@app/view/territorial-monitoring';

//Components
import { AppComponent } from '@app/app.component';
import { SharedModule } from './shared/shared.module';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        ViewComponent,
        FollowUpStructureComponent,
        TerritorialMonitoringComponent,        
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
        provideAnimations(),
        provideToastr(),
    ],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        IconsModule,
        FormsModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        AppRoutingModule,
        JwtModule,
        ToastrModule.forRoot(),
        SharedModule
    ]
})

export class AppModule {}
