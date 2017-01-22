import { Component } from "@angular/core";
import {Router} from "@angular/router";

import { UserModel } from './../../models/user.model';
import { UserService } from './../../services/user.service';

@Component({
    selector: "login",
    providers: [UserService],
    templateUrl: "./components/login/login.component.html",
    styleUrls: ["./components/login/login.css"]
})
export class LoginComponent { 
    user: UserModel;
    public constructor(private userService: UserService, private router: Router) {
        this.user = new UserModel();
    }

    public submit(){
        // this.userService.login(this.user.id);
        console.log("User is log!");
        this.router.navigate([""]);
    }
}

