import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { SquadComponent } from './modules/squad/squad.component';
import { ProjectComponent } from './modules/project/project.component';
import { MemberComponent } from './modules/member/member.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MemberEditComponent } from './modules/member/member-edit/member-edit.component';
import { MemberListComponent } from './modules/member/member-list/member-list.component';
import { MemberStartComponent } from './modules/member/member-start/member-start.component';
import { MemberDetailComponent } from './modules/member/member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'squad',
        component: SquadComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'member',
        component: MemberComponent,
        children: [
          { path: '', component: MemberStartComponent },
          { path: 'new', component: MemberEditComponent },
          { path: ':id', component: MemberDetailComponent },
          { path: ':id/edit', component: MemberEditComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
