import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './home/player/player.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './home/detail/detail.component';
import { TestComponent } from './home/test/test.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SquadComponent } from './build/squad/squad.component';
const routes:Routes=[
  {path:'home',component:PlayerComponent},
  {path:'home/:page',component:PlayerComponent},
  {path:'detail',component:DetailComponent},
  {path:'test',component:TestComponent},
  {path:'build',component:SquadComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DetailComponent,
    TestComponent,
    SquadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
