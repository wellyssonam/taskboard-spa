import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { Error404Component } from './shared/components/error404';
import { TasksModule } from './tasks';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
