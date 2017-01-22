import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

// data in object
import { DbModel } from "./../models/db.model";

@Injectable()
export class DataBaseService {
    constructor(private data: DbModel){
        
    }

    postUserData(user: any){
        return this.data.users.push(user);
    }

    getUserData(user: any){
        return this.data.users.filter(user => user.name);
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