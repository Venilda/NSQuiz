"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var nativescript_ng2_slides_1 = require('nativescript-ng2-slides');
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var dataBase_service_1 = require('../app/services/dataBase.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent].concat(app_routing_1.appComponents),
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                nativescript_ng2_slides_1.SlidesModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes)],
            providers: [dataBase_service_1.DataBaseService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxvQ0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSxxQkFBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSxzQkFBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUdyRSw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3Q0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUV2RCx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUN2RSw0QkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsaUNBQWdDLGtDQUFrQyxDQUFDLENBQUE7QUFjbkU7SUFBQTtJQUF5QixDQUFDO0lBWjFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsNEJBQVksU0FBSywyQkFBYSxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsc0NBQVk7Z0JBQ1osaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsdUJBQVMsQ0FBQyxDQUFDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNsaWRlc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItc2xpZGVzJztcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBwQ29tcG9uZW50cywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuXHJcbmltcG9ydCB7IERhdGFCYXNlU2VydmljZSB9IGZyb20gJy4uL2FwcC9zZXJ2aWNlcy9kYXRhQmFzZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIC4uLmFwcENvbXBvbmVudHNdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICAgICAgICBTbGlkZXNNb2R1bGUsXHJcbiAgICAgICAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyldLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0YUJhc2VTZXJ2aWNlXSxcclxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=