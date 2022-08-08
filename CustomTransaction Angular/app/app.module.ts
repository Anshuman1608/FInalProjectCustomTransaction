import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AuthGuard } from './guard/auth.guard';
import { UpdatefiltersComponent } from './components/updatefilters/updatefilters.component';
import { CompletereportComponent } from './components/completereport/completereport.component';

const route : Routes = [{ path : "" , component : WelcomeComponent},
{ path : "login" , component : LoginComponent},
{ path : "transact" ,canActivate: [AuthGuard], component : TransactionsComponent},
{path : "updateFilter" ,canActivate: [AuthGuard], component : UpdatefiltersComponent},
{path : "completereport" ,canActivate: [AuthGuard], component : CompletereportComponent},
{path : "updateFilter/:merchantid" ,canActivate: [AuthGuard], component : UpdatefiltersComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TransactionsComponent,
    UpdatefiltersComponent,
    CompletereportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
