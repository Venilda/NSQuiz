import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
 
export const appRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent }
];
 
export const appComponents: any = [
    HomeComponent,
    LoginComponent
];