import { Injectable } from "@angular/core";
// import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { Observable as RxObservable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

// data in object
import { DbModel } from "./../models/db.model";

@Injectable()
export class DataBaseService {
    constructor(private data: DbModel, public http: NativeScriptHttpModule){
       
    }

    postUserData(user: any){
        return this.data.users.push(user);
    }

    getUserData(user: any){
        return this.data.users.filter(user => user.name);
    }

    register(user) {
    console.log('Registering...');
    let BASE_URL = "http://superquiz.apphb.com/";
        return new Promise(function (resolve, reject) {
        this.http.request({
            url: BASE_URL + 'api/account/register',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            content: JSON.stringify(user)
        })
            .then(function (response) {
                this.processResponse(response);
                resolve();
            })
            .catch(function (error) {
                reject(error);
            });
        });
    }

    processResponse(response) {
    var status = response.statusCode;

    if (status < 400) {
        this.printResponse(response);

        // Important if no content .toJSON() will crash... hence the check
        if (response.content.raw.count > 0) {
            return response.content.toJSON();
        }

        return null;
    }

    // Will redirect to login
    if (status === 401 || status === 403) {
        this.handleUnauthorisedError({
            error: 'Not Authorised Error',
            content: response.content.toJSON()
        });

        return null;
    }

    if (status >= 400) {
        throw {
            error: 'Http Error',
            response: response,
            content: response.content.toJSON()
        };
    }
}

    printResponse(response) {
    console.log('==================== HTTP RESPONSE ====================');
    console.log('Http Success: status: %s, content: %s',
        response.statusCode,
        response.content.toString());
    console.log('=======================================================');
}

    handleUnauthorisedError( message) {
    if (!message) {
        message = "Please authenticate to use this function"
    }

    // dialogsModule
    //     .alert(message)
    //     .then(function() {
    //         navigation.goToLoginPage(true);
    //     });

    // logError(error);
}

    // // web server
    // private serverUrl = "http://superquiz.apphb.com/api/";

    // constructor(private http: Http) { }

    // postData(data: any) {
    //     let options = this.createRequestOptions();
    //     return this.http.post(this.serverUrl, { data }, options)
    //         .map(res => res.json());
    // }

    // getData() {
    //     let headers = this.createRequestHeader();
    //     return this.http.get(this.serverUrl, { headers: headers })
    //         .map(res => res.json());
    // }
    
    // getResponseInfo() {
    //     let headers = this.createRequestHeader();
    //     return this.http.get(this.serverUrl, { headers: headers })
    //         .do(res => res);
    // }

    // private createRequestOptions() {
    //     let headers = new Headers();
    //     headers.append("AuthKey", "my-key");
    //     headers.append("AuthToken", "my-token");
    //     headers.append("Content-Type", "application/json");
    //     let options = new RequestOptions({ headers: headers });
    //     return options;
    // }
    // private createRequestHeader() {
    //     let headers = new Headers();
    //     // set headers here e.g.
    //     headers.append("AuthKey", "my-key");
    //     headers.append("AuthToken", "my-token");
    //     headers.append("Content-Type", "application/json");
    //     return headers;
    // }
}