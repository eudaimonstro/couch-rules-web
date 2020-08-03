import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agendas/agenda/agenda.component';
import { AgendaItemComponent } from './agendas/agenda-item/agenda-item.component';
import { MotionsModule } from './motions/motions.module';
import { MeetingsModule } from './meetings/meetings.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/app.reducer';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };
@NgModule({
  declarations: [AppComponent, AgendaComponent, AgendaItemComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    AuthModule,
    MotionsModule,
    MeetingsModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
