import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'home', loadChildren: './platform/home/home.module#HomePageModule' },
  { path: 'schmoekern', loadChildren: './platform/schmoekern/schmoekern.module#SchmoekernPageModule' },
  { path: 'anfrage', loadChildren: './platform/anfrage/anfrage.module#AnfragePageModule' },
  { path: 'home', loadChildren: './börse/home/home.module#HomePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
