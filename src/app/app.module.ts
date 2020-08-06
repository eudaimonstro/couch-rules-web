import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from './auth/services/auth.service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgendaItemComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
