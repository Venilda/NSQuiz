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
        this.router.navigate(["login"]);
    }
}