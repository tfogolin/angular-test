import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegisterComponent } from './client-register/client-register.component'
import { ClientListComponent } from './client-list/client-list.component'
import { ClientEditComponent } from './client-edit/client-edit.component'

const routes: Routes = [
  { path: 'cadastro-de-clientes', component: ClientRegisterComponent },
  { path: 'busca-de-clientes', component: ClientListComponent },
  { path: 'atualizacao-cadastral/:id', component: ClientEditComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
