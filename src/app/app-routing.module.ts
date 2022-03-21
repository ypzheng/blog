import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostsComponent } from './allposts/allposts.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'allPosts', component: AllpostsComponent },
  // { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'featuredposts', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
