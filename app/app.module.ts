import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { AppComponent } from "./app.component";
import { SlidesModule } from 'nativescript-ng2-slides';

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { appComponents, appRoutes } from "./app.routing";

@NgModule({
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
              NativeScriptFormsModule,
              NativeScriptHttpModule,
              SlidesModule,
              NativeScriptRouterModule,
              NativeScriptRouterModule.forRoot(appRoutes)],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
