/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'my-dir',
    template: `
                <div>
                    <h1>{{ title }}</h1>
                    <ul>
                    <li *ngFor="#item of arrray">{{ item }}</li>
                    </ul>
                </div>
`
})

class AppComponent {

    title: string;
    arrray: string[];

    constructor() {
        this.title = 'Заголовок';
        this.arrray = ['Выучить Angular 2', 'Выучить TypeScript 2'];
    }
}

bootstrap(AppComponent);