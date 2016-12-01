export class Init{
    load(){
        if(localStorage.getItem('contacts')===null || localStorage.getItem('contacts') === undefined){
            console.log('No contacts found!... Creating...');
            var contacts = [
                {
                    name:'John Snow',
                    phone: '(435) 294-8888'
                },
                {
                    name:'Sansa Stark',
                    phone: '(435) 294-7777'
                },
                {
                    name:'Brandon Stark',
                    phone: '(435) 294-4444'
                },
                {
                    name:'Arya Stark',
                    phone: '(435) 294-5555'
                }
            ];
            
            localStorage.setItem('contacts', JSON.stringify(contacts));
            return 
        }else{
            console.log("Found Todos.");
        }
    }
}