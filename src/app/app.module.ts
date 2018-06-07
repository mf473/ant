import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ColorPickerModule } from 'ngx-color-picker';
import { AngularSplitModule } from 'angular-split';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ButtonComponent } from './button/button.component';
import { Button } from 'protractor';
import { ErrorComponent } from './error/error.component';
import { QuestionComponent } from './question/question.component';
import {power} from './guard/canActive.guard';
import {powerNo} from './guard/canDeActive.guard';
import { HomeComponent } from './home/home.component';
import { ViewsComponent } from './views/views.component';
import { ListComponent } from './list/list.component';
import { ListPipe } from './pipe/list.pipe';
import { SentDataComponent } from './sent-data/sent-data.component';
registerLocaleData(zh);

const appRoutes: Routes = [
  //{ path: 'button', component: ButtonComponent }
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {
      path:'home',
      component:HomeComponent
  },
  { path: 'button/:id', component: ButtonComponent, data:[{'onOff': true}] },
  {path: 'views',component: ViewsComponent,canActivate:[power],canDeactivate:[powerNo]},
  {path:'question',component: QuestionComponent,outlet: 'aux',},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ErrorComponent,
    QuestionComponent,
    HomeComponent,
    ViewsComponent,
    ListComponent,
    ListPipe,
    SentDataComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSplitModule,
    ColorPickerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgZorroAntdModule.forRoot()
  ],
  providers: [power,powerNo],
  bootstrap: [AppComponent]
})
export class AppModule { }
