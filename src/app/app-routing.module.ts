import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ViewStoriesComponent } from './view-stories/view-stories.component';
import { StoryComponent } from './story/story.component';
import { ShareStoryComponent } from './share-story/share-story.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'view-stories', component: ViewStoriesComponent},
  {path: 'story', component: StoryComponent},
  {path: 'share-story', component: ShareStoryComponent},
  {path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
