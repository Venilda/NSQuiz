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
    public isItemVisible: boolean = false;
    
    public message: string = "";

    public constructor(private dataBaseService: DataBaseService) {
        this.user = new UserModel();
    }

    public submit(){
        console.log("You’re using: " + this.user.name);
        this.makePostRequest();
    }

    private makePostRequest() {
        this.dataBaseService
            .postData({ username: this.user.name, password: this.user.password })
            .subscribe(res => {
                this.message = res.json.data.username;
                // >> (hide)
                console.log(this.message);
                this.isItemVisible = true;
                // << (hide)
            });
    }
}

