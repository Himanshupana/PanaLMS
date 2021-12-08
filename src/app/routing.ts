import { Routes } from "@angular/router";
import { SigninComponent } from "./Authetication/signin/signin.component";
import { SignupComponent } from "./Authetication/signup/signup.component";
import { AuthgardService } from "./Service/authgard.service";
export const routing:Routes = [
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent,canActivate:[AuthgardService]},]