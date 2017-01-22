import { Component } from "@angular/core";
import { UserModel } from './../../models/user.model';

@Component({
    selector: "login",
    templateUrl: "./components/login/login.component.html",
    styleUrls: ["./components/login/login.css"]
})
export class LoginComponent { 
    user: UserModel;
    public constructor() {
        this.user = new UserModel();
    }

    public submit(){
        console.log("You’re using: " + this.user.name);
        console.log("You’re password: " + this.user.password);
        
    }
}

