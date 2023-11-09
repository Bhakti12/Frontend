import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})

export class About implements OnInit{
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
}