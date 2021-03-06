import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth-guard';
import {LoginComponent} from './pages/login/login.component';
import {PatientsComponent} from './pages/patients/patients.component';
import {TestsComponent} from './pages/tests/tests.component';
import {OverviewComponent} from './pages/overview/overview.component';
import {PatientComponent} from './pages/patient/patient.component';
import {CreateTestComponent} from './pages/tests/create-test/create-test.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]},
    {path: 'patients', component: PatientsComponent, canActivate: [AuthGuard]},
    {path: 'tests', component: TestsComponent, canActivate: [AuthGuard]},
    {path: 'create-test', component: CreateTestComponent, canActivate: [AuthGuard]},
    {path: 'patient/:patientId', component: PatientComponent, canActivate: [AuthGuard]},
];

export const routing = RouterModule.forRoot(appRoutes); //Need to add AuthGuard in here somewhere
