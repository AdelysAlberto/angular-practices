import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
    constructor() {}
    mostrar = true
    info = {
        title: 'Title Lorem',
        text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt quasi autem illum! Amet corporis optio officiis nisi, odit quasi velit earum vel impedit minus saepe est.',
    }

    characters = ['Venon', 'Spiderman', 'Dr. Octupus']

    ngOnInit(): void {}
}
