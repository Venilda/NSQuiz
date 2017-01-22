import { Component } from "@angular/core";
import { UserModel } from './../../models/user.model';

@Component({
    selector: "register",
    templateUrl: "./components/register/register.component.html",
    styleUrls: ["./components/register/register.css"]
})
export class RegisterComponent { 
    user: UserModel;
    public constructor() {
        this.user = new UserModel();
    }

    public submit(){
        console.log("You’re using: " + this.user.name);
        console.log("You’re password: " + this.user.password);
        
    }
}

