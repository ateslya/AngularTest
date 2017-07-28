﻿import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'main',
    templateUrl: '/Views/Home/app/app.component.html',
    providers: [HttpService]
})

export class AppComponent {
    URL: string;
    newURL: string;
    done: boolean = false;

    constructor(private httpService: HttpService)
    {
    }

    zipURL(URL: string) {
        this.httpService.postData(URL).subscribe((data) => {
            this.newURL = data; this.done = true;
        });
    }

}