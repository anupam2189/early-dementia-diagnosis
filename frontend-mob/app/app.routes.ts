import {HomeComponent} from "./pages/home/home-component";
import {LoginComponent} from "./pages/login/login-component";
import {RecordingsListComponent} from "./pages/recordings-list/recordings-list-component";
import {InformationComponent} from "./pages/information/information-component";
import {SettingsComponent} from "./pages/settings/settings-component";
import {TutorialComponent} from "./pages/tutorial/tutorial-component";
import {RegisterPatientFormComponent} from "./pages/forms/register-patient-component";
import {PatientListComponent} from "./pages/settings/patient-list-component";
import {RecordingComponent} from "./pages/recordings-list/record-component";
import {PhotoComponent} from "./pages/photos/photo-component";

/**
 * Created by EleanorLeung on 25/03/2017.
 */

export const routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "tutorial", component: TutorialComponent},
    {path: "register-patient-form", component: RegisterPatientFormComponent},
    {path: "patient-list", component: PatientListComponent},
    {path: "recording", component: RecordingComponent},
    {path: "photo", component: PhotoComponent},

]
