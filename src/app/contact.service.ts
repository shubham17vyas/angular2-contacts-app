import { Injectable } from '@angular/core';
import { Init } from './init-contacts';

@Injectable()
export class ContactService extends Init{

  constructor() { 
    super();
    console.log("ContactService initialized!!"); 
    this.load();
  }
    
    
    getContacts(){
        var contacts = JSON.parse(localStorage.getItem('contacts'));
        
        return contacts;
    }
    
    addContact(newContact){
        var contacts = JSON.parse(localStorage.getItem('contacts'));
        //add new contacts
        contacts.push(newContact);
        
        //set new contacts
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    
    deleteContact(contact){
        
        
        var contacts = JSON.parse(localStorage.getItem('contacts'));
        

        for(var i =0;i<contacts.length;i++){
        
            if(contacts[i].name === contact.name){
                contacts.splice(i, 1);
                
            }
        }
        //set new contacts
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
}
