import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pageNotFound',
    templateUrl: './pageNotFound.component.html',
    styleUrls: ['./pageNotFound.component.css'],
})
export class PageNotFoundComponent implements OnInit{
    
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}