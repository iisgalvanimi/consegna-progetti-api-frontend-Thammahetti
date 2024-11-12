import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Emoji } from '../models/emoji.model';
import { FRUITS } from '../models/emoji.model';
import { ANIMALS } from '../models/emoji.model';
@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
    genVect : Emoji[]= [{name:"", emoji:""}];

    constructor(private route: ActivatedRoute) {
    
      this.route.paramMap.subscribe(this.getRouterParam);
    }
   
 
    getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); 
      console.log (uri_param);
      if (uri_param == 'fruits') this.genVect = FRUITS;
      if (uri_param == 'animals') this.genVect = ANIMALS;
    
    }
}
