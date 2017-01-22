import { Component } from "@angular/core";

@Component({
    selector: "login",
    templateUrl: "./components/login/login.component.html",
    styleUrls: ["components/login/login.css"]
})
export class LoginComponent { 
    public constructor() {}

    public submit(){
        alert("hello");
    }
}

