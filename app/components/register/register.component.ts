import { Component } from "@angular/core";
import {Router} from "@angular/router";

import { UserModel } from './../../models/user.model';
import { DataBaseService } from './../../services/dataBase.service'

@Component({
    selector: "register",
    providers: [DataBaseService],
    templateUrl: "./components/register/register.component.html",
    styleUrls: ["./components/register/register.css"]
})
export class RegisterComponent { 
    user: UserModel;
    public constructor(private dataBaseService: DataBaseService) {
        this.user = new UserModel();
    }

    public submit(){
        console.log("You’re using: " + this.user.name);
        if(this.user.password === this.user.confirmPassword){
            this.dataBaseService.register(this.user);
            console.log("User is registered");
        }
    }
}

