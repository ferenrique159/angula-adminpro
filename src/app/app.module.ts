import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';


// Components
import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
