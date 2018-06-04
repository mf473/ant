import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
registerLocaleData(zh);

const appRoutes: Routes = [
  //{ path: 'button', component: ButtonComponent }
  {path:'',redirectTo: '/app',pathMatch:'full'},
  {path:'app',component:AppComponent},
  { path: 'button/:id', component: ButtonComponent, data:[{'onOff': true}] },
  {path:'**',component: ErrorComponent},
  {path:'**',component: QuestionComponent,outlet: 'aux'}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ErrorComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
