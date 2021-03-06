import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { QuizListComponent } from "./components/quizList/quiz-list.component";
 
export const appRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "quiz-list", component: QuizListComponent }
    
];
 
export const appComponents: any = [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    QuizListComponent
];