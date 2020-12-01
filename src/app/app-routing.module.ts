import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { TweetComponent } from './tweet/tweet.component';
import { TextComponent } from './text/text.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: 'historial', component: HistoryComponent },
  { path: 'acerca', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'tweet/:hashtag', component: TweetComponent },
  { path: 'texto', component: TextComponent },
  { path: 'archivo', component: ArchiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
