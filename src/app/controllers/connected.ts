import { Component } from '@angular/core';

import { TabsPage } from './tabs';

@Component({
    templateUrl: '../views/connected.html'
})
export class Connected {

    rootPage:any = TabsPage;
    constructor() {

    }
}