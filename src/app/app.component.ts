import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './contact.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [ContactsComponent],
    providers:[ContactService]
})

export class AppComponent {
title = 'Contacts';
}
