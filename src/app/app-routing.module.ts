import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { UxComponent } from './pages/ux/ux.component';
import { ArComponent } from './pages/ar/ar.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { UpdateComponent } from './pages/update/update.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { CourseComponent } from './pages/course/course.component';
import { LayoutComponent } from './dashboard/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LayoutComponent },
  { path: 'admin/ux', component: UxComponent },
  { path: 'admin/ar', component: ArComponent },
  { path: 'admin/submission', component: SubmissionComponent },
  { path: 'admin/updates', component: UpdateComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/illustration', component: ChatComponent },
  { path: 'admin/documentation', component: DocumentationComponent },
  { path: 'admin/course', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
