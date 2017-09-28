// creado con un snnipets, luego hay que incluirlo en el app.module.ts como un modulo
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: SobreComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
