import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material-module.module';
import { LoadingComponent } from './loading/loading.component';

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
    LoadingComponent,
  ],
  declarations: [LoadingComponent],
  providers: [LoadingComponent],
})
export class SharedModule {}
