import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionPage2Component } from './components/accordion-page2/accordion-page2.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'product1', component: AccordionComponent},
    { path: 'product2', component: AccordionPage2Component },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'product1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
