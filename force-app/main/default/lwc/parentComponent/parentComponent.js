import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleEvent(){
        alert('Event handler');
    }
}