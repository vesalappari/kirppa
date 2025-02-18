import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

export const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'my-products', component: MyProductsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'contact', component: ContactComponent },
];
