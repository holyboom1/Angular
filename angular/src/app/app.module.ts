import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderPostComponent } from './post/header-post/header-post.component';
import { BodyOfPostComponent } from './post/body-of-post/body-of-post.component';
import { FooterOfPostComponent } from './post/footer-of-post/footer-of-post.component';
import {FormsModule} from "@angular/forms";
import { CommentsComponent } from './post/footer-of-post/comment/comments.component';
import { OneCommentComponent } from './post/footer-of-post/comment/one-comment/one-comment.component';
import { AddcommentComponent } from './post/footer-of-post/comment/addcomment/addcomment.component';
import { MypipePipe } from './pipes/mypipe.pipe';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { LikedDirective } from './liked.directive';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderPostComponent,
    BodyOfPostComponent,
    FooterOfPostComponent,
    CommentsComponent,
    OneCommentComponent,
    AddcommentComponent,
    MypipePipe,
    LikedDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
