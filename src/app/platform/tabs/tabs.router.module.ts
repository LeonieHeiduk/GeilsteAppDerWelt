import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../platform/home/home.module#HomePageModule'
          }
        ]},
      {
        path: 'anfrage',
        children: [
          {
            path: '',
            loadChildren: '../platform/anfrage/anfrage.module#AnfragePageModule'
        }
      ]},
    {
      path: 'schmoekern',
      children: [
        {
          path: '',
          loadChildren: '../platform/schmoekern/schmoekern.module#SchmoekernPageModule'
        }
      ]}
    ]},
    {
      path: '',
      redirectTo: '/platform/home',
      pathMatch: 'full'
  }];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TabsRouterModule { }
