import { Component } from "@angular/core";
import {Router} from "@angular/router";
// import { Button } from "ui/button";

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

    public buttonTap(){
        this.router.navigate(["login"]);
    }
}