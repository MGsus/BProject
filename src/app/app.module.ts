import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ArchiveService } from './services/archive.service';
import { TextService } from './services/text.service';
import { TweetService } from './services/tweet.service';
import { SharedModule } from './shared/shared.module';
import { TextComponent } from './text/text.component';
import { TweetComponent } from './tweet/tweet.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryComponent,
    AboutComponent,
    HomeComponent,
    TweetComponent,
    TextComponent,
    ArchiveComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [TweetService, TextService, ArchiveService],
  bootstrap: [AppComponent],
})
export class AppModule {}
