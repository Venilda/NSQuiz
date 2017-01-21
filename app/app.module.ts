import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appComponents, appRoutes } from "./app.routing";

@NgModule({
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
              NativeScriptRouterModule,
              NativeScriptRouterModule.forRoot(appRoutes)],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
