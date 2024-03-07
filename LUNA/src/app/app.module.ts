import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ChatBotComponent } from './Components/chat-bot/chat-bot.component';
import { AngBotComponent } from './Components/ang-bot/ang-bot.component';
import { ProfilePageComponent } from './Components/profile-page/profile-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FeaturesComponent } from './Components/features/features.component';
import { AboutComponent } from './Components/about/about.component';
import { LUNAMainComponent } from './Components/luna-main/luna-main.component';
import { ProfileComponent } from './Components/profile/profile.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LogInPageComponent } from './Components/log-in-page/log-in-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPageComponent } from './Components/video-page/video-page.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { NgFor } from '@angular/common';

const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'Login', component: LogInPageComponent},
  {path:'Home', component: HomeComponent},
  {path:'LUNA', component: LUNAMainComponent},
  {path:'GPT', component: ChatBotComponent},
  {path:'AngBot', component: AngBotComponent},
  {path:'Features', component: FeaturesComponent},
  {path:'About', component: AboutComponent},
  {path:'Profile', component: ProfileComponent},
  {path:'ProfileP', component: ProfilePageComponent},
  {path:'Videos', component: VideoPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChatBotComponent,
    AngBotComponent,
    NavBarComponent,
    FeaturesComponent,
    AboutComponent,
    LUNAMainComponent,
    ProfileComponent,
    ProfilePageComponent,
    LogInPageComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    NgxDaterangepickerMd.forRoot(),
    MatAutocompleteModule,
    MatFormFieldModule,
    NgFor,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
