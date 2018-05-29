import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
<<<<<<< HEAD
import { ColorPickerModule } from 'ngx-color-picker';
=======
>>>>>>> fb56b5eb9dcc5fd89b7f417a5d1cb87244d72c28
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    ColorPickerModule,
=======
>>>>>>> fb56b5eb9dcc5fd89b7f417a5d1cb87244d72c28
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
