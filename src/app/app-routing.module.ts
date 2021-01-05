import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { TweetComponent } from './tweet/tweet.component';
import { TextComponent } from './text/text.component';
import { ArchiveComponent } from './archive/archive.component';
import { BpComponent } from './bp/bp.component';
import { BpDetailComponent } from './bp-detail/bp-detail.component';
import { NewBPComponent } from './new-bp/new-bp.component';
import { OppComponent } from './opp/opp.component';
import { OppEditComponent } from './opp-edit/opp-edit.component';

const routes: Routes = [
  { path: 'historial', component: HistoryComponent },
  { path: 'acerca', component: AboutComponent },
  { path: '', component: BpComponent },
  { path: 'tweet/:hashtag', component: TweetComponent },
  { path: 'texto', component: TextComponent },
  { path: 'archivo', component: ArchiveComponent },
  { path: 'bp', component: BpComponent },
  { path: 'bp-detail/:name', component: BpDetailComponent },
  { path: 'new-bp', component: NewBPComponent },
  { path: 'opp', component: OppComponent },
  { path: 'opp-detail/:name/:opp', component: OppEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
