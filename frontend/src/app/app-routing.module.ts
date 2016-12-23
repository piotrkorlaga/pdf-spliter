import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

const appRoutes: Routes = [
  {
    path: 'form-upload',
    loadChildren: 'app/form-upload/form-upload.module#FormUploadModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {}
