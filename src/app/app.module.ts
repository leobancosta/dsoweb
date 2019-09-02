import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/home/header/header.component';
import { SquadComponent } from './modules/squad/squad.component';
import { ProjectComponent } from './modules/project/project.component';
import { MemberComponent } from './modules/member/member.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MemberListComponent } from './modules/member/member-list/member-list.component';
import { MemberEditComponent } from './modules/member/member-edit/member-edit.component';
import { MemberDetailComponent } from './modules/member/member-detail/member-detail.component';
import { MemberStartComponent } from './modules/member/member-start/member-start.component';
import { MemberItemComponent } from './modules/member/member-list/member-item/member-item.component';
import { MemberService } from './core/services/member.service';
import { LoginService } from './core/services/login.service';
import { ApiService } from './core/http/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SquadComponent,
    ProjectComponent,
    MemberComponent,
    DashboardComponent,
    MemberListComponent,
    MemberEditComponent,
    MemberDetailComponent,
    MemberStartComponent,
    MemberItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MemberService, LoginService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
