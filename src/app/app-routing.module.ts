import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispalyComponent } from './components/dispaly/dispaly.component';
import { PostComponent } from './components/post/post.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  {path:'',component:PostComponent},
  {path:'add',component:PostComponent},
  {path:'display',component:DispalyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
