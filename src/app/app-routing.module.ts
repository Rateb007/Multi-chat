import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatsComponent} from "./components/chats/chats.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'chats'},
  {path: 'chats', pathMatch: 'full', component:ChatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
