import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module.module';

import { LoadingComponent } from './loading/loading.component';
import { MsgComponent } from './msg/msg.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Shared Components
    MsgComponent,
    LoadingComponent,
  ],
  declarations: [LoadingComponent, MsgComponent],
  providers: [LoadingComponent, MsgComponent],
})
export class SharedModule {}
