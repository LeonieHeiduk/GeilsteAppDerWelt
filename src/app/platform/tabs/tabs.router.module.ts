import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: TabsPage,
    children: [
      { path: 'home', 
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]},
      {
        path: 'anfrage',
        children: [
          {
            path: '',
            loadChildren: '../anfrage/anfrage.module#AnfragePageModule'
        }
      ]},
    {
      path: 'schmoekern',
      children: [
        {
          path: '',
          loadChildren: '../schmoekern/schmoekern.module#SchmoekernPageModule'
        }
      ]}
    ]},
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRouterModule { }
