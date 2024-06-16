import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// dashboard components
import { LayoutComponent } from './dashboard/layout/layout.component';
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { OverlayComponent } from './dashboard/overlay/overlay.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemsComponent } from './dashboard/sidebar/sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './dashboard/sidebar/sidebar-header/sidebar-header.component';
import { SidebarItemSectionComponent } from './dashboard/sidebar/sidebar-item-section/sidebar-item-section.component';

// pages
import { UxComponent } from './pages/ux/ux.component';
import { ArComponent } from './pages/ar/ar.component';
import { HomeComponent } from './pages/home/home.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { UpdateComponent } from './pages/update/update.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IllustrationComponent } from './pages/illustration/illustration.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { CourseComponent } from './pages/course/course.component';

// icons
import { ArIconComponent } from './dashboard/icons/ar-icon/ar-icon.component';
import { UxIconComponent } from './dashboard/icons/ux-icon/ux-icon.component';
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { AppsIconComponent } from './dashboard/icons/apps-icon/apps-icon.component';
import { VideoIconComponent } from './dashboard/icons/video-icon/video-icon.component';
import { UpdatesIconComponent } from './dashboard/icons/updates-icon/updates-icon.component';
import { PhotographyIconComponent } from './dashboard/icons/photography-icon/photography-icon.component';
import { IllustrationIconComponent } from './dashboard/icons/illustration-icon/illustration-icon.component';
import { GraphicDesignIconComponent } from './dashboard/icons/graphic-design-icon/graphic-design-icon.component';

// others
import { DocComponent } from './components/docs/doc/doc.component';
import { ContentComponent } from './components/content/content.component';
import { SnippetComponent } from './components/docs/snippet/snippet.component';
import { FolderIconComponent } from './components/docs/icons/folder-icon/folder-icon.component';
import { AngularIconComponent } from './components/docs/icons/angular-icon/angular-icon.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // dashboard
    LayoutComponent,
    TopBarComponent,
    OverlayComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemsComponent,
    SidebarHeaderComponent,
    SidebarItemSectionComponent,

    // pages
    UxComponent,
    ArComponent,
    HomeComponent,
    SubmissionComponent,
    UpdateComponent,
    DashboardComponent,
    IllustrationComponent,
    CourseComponent,
    DocumentationComponent,

    // icons
    ArIconComponent,
    UxIconComponent,
    DocIconComponent,
    AppsIconComponent,
    VideoIconComponent,
    UpdatesIconComponent,
    PhotographyIconComponent,
    IllustrationIconComponent,
    GraphicDesignIconComponent,

    // others
    DocComponent,
    SnippetComponent,
    ContentComponent,
    FolderIconComponent,
    AngularIconComponent,
    HomeContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
