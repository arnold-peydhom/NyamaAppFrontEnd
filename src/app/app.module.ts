import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommandeComponent } from './commande/commande.component';
import { HttpClientModule } from '@angular/common/http';
import { DepensesComponent } from './depenses/depenses.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ListBoutiqueComponent } from './list-boutique/list-boutique.component';
import { ListDepensesComponent } from './list-depenses/list-depenses.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent,
    CommandeComponent,
    DepensesComponent,
    ComptabiliteComponent,
    UtilisateursComponent,
    ListBoutiqueComponent,
    ListDepensesComponent,
    ListCommandeComponent,
    EditShopComponent,
    EditOrderComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'boutique', component:BoutiqueComponent},
      {path:'commande', component:CommandeComponent},
      {path:'depenses', component:DepensesComponent},
      {path:'comptabilite', component:ComptabiliteComponent},
      {path:'utilisateurs', component:UtilisateursComponent},
      {path:'list-boutique', component:ListBoutiqueComponent},
      {path:'list-commande', component:ListCommandeComponent},
      {path:'list-depenses', component:ListDepensesComponent},
      {path:'edit-shop', component:EditShopComponent},
      {path:'edit-order', component:EditOrderComponent},
      {path:'edit-expense', component:EditExpenseComponent},
      {path: '', redirectTo: 'boutique',pathMatch:'full'},
      {path: '**', redirectTo: 'boutique',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
