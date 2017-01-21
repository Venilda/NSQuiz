import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { Observable as RxObservable } from 'rxjs/Observable';
import {Router} from "@angular/router";

export class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: "quiz-list",
    templateUrl: "./components/quizList/quiz-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListComponent { 
    public myItems: RxObservable<Array<DataItem>>;

    constructor() {
        var items = [];
        for (var i = 0; i < 3; i++) {
            items.push(new DataItem(i, "data item " + i));
        }

        var subscr;
        this.myItems = RxObservable.create(subscriber => {
            subscr = subscriber;
            subscriber.next(items);
            return function () {
                console.log("Unsubscribe called!!!");
            }
        });

        let counter = 2;
        let intervalId = setInterval(() => {
            counter++;
            items.push(new DataItem(counter, "data item " + counter));
            subscr.next(items);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 15000);
    }
}