import { Component } from '@angular/core';

import { Ajouter } from './ajouter';
import { ConnectedHome } from './connected-home';
import { Gallery } from './gallery';

@Component({
  templateUrl: '../views/tabs.html'
})
export class TabsPage {

  tab1Root = ConnectedHome;
  tab2Root = Ajouter;
  tab3Root = Gallery;

  constructor() {

  }
}
