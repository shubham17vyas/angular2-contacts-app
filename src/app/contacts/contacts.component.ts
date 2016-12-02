import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contacts;
    name;
    phone;
    appState = "default";
    oldName;
    oldPhone;
    
    constructor(private _contactService: ContactService) { }

    ngOnInit() {
        this.contacts = this._contactService.getContacts();
    }

    addContact(){
        var newContact = {
            name: this.name,
            phone: this.phone
        };
        this.contacts.push(newContact);
        this._contactService.addContact(newContact);
    }

    deleteContact(index){       
        this.contacts.splice(index, 1);
        this._contactService.deleteContact(index);
    }

    editContact(contact){
        this.appState="edit";
        this.oldName = contact.name;
        this.oldPhone = contact.phone;
        this.name = contact.name;
        this.phone = contact.phone;
    }

    updateContact(){
        for(var i=0; i<this.contacts.length;i++){
            if(this.contacts[i].name===this.oldName){
                this.contacts[i].name = this.name;
            }else if(this.contacts[i].phone===this.oldPhone){
                this.contacts[i].phone = this.phone;
            }
        }
        this._contactService.updateContact(this.oldName, this.name, this.oldPhone, this.phone);
    }

}
