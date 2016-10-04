import {Component, EventEmitter} from "@angular/core";

@Component({
    selector: 'editura',
    template: `
    <h2>Editura</h2>
    <input type ="text" #textInput value="{{textLevel1}}">
    <button (click)="onChange(textInput.value)">Change</button>
    `,
    inputs: ['textLevel1'],
    outputs:['changed']
})
export class Editura {
    textLevel1: string;
    changed = new EventEmitter();

    onChange(value) {
        this.textLevel1 = value;
        this.changed.emit(value);
    }

}