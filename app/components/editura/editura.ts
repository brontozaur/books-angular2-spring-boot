import {Component, EventEmitter} from "@angular/core";

import { EdituraModel } from '../interfaces.d';

@Component({
    selector: 'editura',
    templateUrl: "/app/components/editura/editura.html"
})
export class Editura {
    private oldEditura: EdituraModel;

    private hasSelection: boolean;

    private edituri: EdituraModel[];

    public ngOninit() {

    }

}