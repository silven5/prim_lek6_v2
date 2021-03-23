import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2v1PageRoutingModule } from './tab2v1-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2v1Page } from './tab2v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2v1PageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [Tab2v1Page]
})
export class Tab2v1PageModule {}
