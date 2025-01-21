import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { SubmitComponent } from './submit/submit.component'; // Import SubmitComponent
import { ViewConfessComponent } from './view-confess/view-confess.component'; // Import ViewConfessComponent
import { TaggedComponent } from './tagged/tagged.component'; // Import TaggedComponent

export const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'submit', component: SubmitComponent }, // Menambahkan rute untuk SubmitComponent
  { path: 'view-confess/:id', component: ViewConfessComponent }, // Menambahkan rute untuk ViewConfessComponent
  { path: 'tagged', component: TaggedComponent }, // Menambahkan rute untuk TaggedComponent
  { path: '**', component: NotFoundComponent }, // Menangani rute yang tidak ditemukan
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
