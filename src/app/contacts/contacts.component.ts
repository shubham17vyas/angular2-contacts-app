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
  
  deleteContact(contact){
    for(var i =0;i<this.contacts.length;i++){
        if(this.contacts[i] === contact){
            this.contacts.splice(i, 1);
            
        }
    }
    this._contactService.deleteContact(contact);
  }

}
