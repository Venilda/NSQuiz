import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "./components/home/home.component.html",
})
export class HomeComponent { 
    public constructor(private router: Router) {
 
    }
 
    public onTap() {
        this.router.navigate(["quiz-list"]);
    }

    public singIn(){
        this.router.navigate(["login"]);
        console.log("SingIn is work!");
    }
    public singUp(){
        this.router.navigate(["register"]);
        console.log("SingUp is work!");
    }
}