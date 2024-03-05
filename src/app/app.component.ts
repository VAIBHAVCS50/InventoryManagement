import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquipmentsComponent } from "./equipments/equipments.component";

import { CommonModule } from '@angular/common';
@Component({
    selector: 'alfainv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EquipmentsComponent,CommonModule]
})
export class AppComponent {
  title = 'inventoryManager';
  role='Admin';
}
 