// Modules
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module.module';
import { SharedModule } from './shared/shared.module';

//Components
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { BpComponent } from './bp/bp.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import { TweetComponent } from './tweet/tweet.component';
import { BpDetailComponent } from './bp-detail/bp-detail.component';
import { NewBPComponent } from './new-bp/new-bp.component';
import { OppComponent } from './opp/opp.component';

//Services
import { ArchiveService } from './services/archive.service';
import { TextService } from './services/text.service';
import { TweetService } from './services/tweet.service';
import { BpService } from './services/bp.service';
import { AuthService } from './services/auth.service';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { DataTableOppComponent } from './data-table-opp/data-table.component';
import { OppEditComponent } from './opp-edit/opp-edit.component';
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
    DataTableOppComponent,
    BpComponent,
    BpDetailComponent,
    NewBPComponent,
    OppComponent,
    ChartComponent,
    OppEditComponent,
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
    ChartsModule,
  ],
  providers: [
    TweetService,
    TextService,
    ArchiveService,
    BpService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
