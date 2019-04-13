import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchmoekernPage } from './schmoekern.page';

const routes: Routes = [
  {
    path: '',
    component: SchmoekernPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchmoekernPage]
})
export class SchmoekernPageModule {}
