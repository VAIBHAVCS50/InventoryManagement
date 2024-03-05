
import {Component} from '@angular/core';
import {equipments,equipmentsdetails} from './EquStructure';
import { CommonModule } from '@angular/common';



  @Component({

  selector: 'alfainv-equipments',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './equipments.component.html',
  
  styleUrl: './equipments.component.css',

})

export class EquipmentsComponent {
    companyName='Alfa Laval';
    // let nums:number;
    value=false;
    // equipments:equipments ={
    //   EqId:1,
    //   Name:'heat-exchanger',
    //   Desc:'food-and-water',
    //   Status:'working',
    //   CurrHoldId:'123',
    //   UsageHistory:'New Equipment'
    // }
    equipments:equipments ={
      total_equip:30,
      availableeq:20,
      bookedeq:5
    }

    equiList:equipmentsdetails[]=[{
      EqId:1,
      Name:'heat-exchanger',
      Desc:'food-and-water',
      Status:'working',
      CurrHoldId:'123',
      UsageHistory:'New Equipment'
    },
    {
      EqId:2,
      Name:'Decanter',
      Desc:'food-and-water',
      Status:'Out-of-service',
      CurrHoldId:'124',
      UsageHistory:'New Equipment'
    },
    {
      EqId:3,
      Name:'Decanter',
      Desc:'food-and-water',
      Status:'working',
      CurrHoldId:'126',
      UsageHistory:'New Equipment'
    }
  ]
    toggle(){
      console.log("i am in side the toggle function");
      this.value=!this.value;
    }
}
