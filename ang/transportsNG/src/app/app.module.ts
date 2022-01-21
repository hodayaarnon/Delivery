import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewDeliveryComponent } from './homepage/view-delivery/view-delivery.component';
import { ManageDeliveryComponent } from './homepage/manage-delivery/manage-delivery.component';
import { ViewHistoryComponent } from './homepage/view-history/view-history.component';
import { JoinCommunityComponent } from './homepage/join-community/join-community.component';
import { ManageCommunityComponent } from './homepage/manage-community/manage-community.component';
import { SignInComponent } from './homepage/sign-in/sign-in.component';
import { AddDeliveryComponent } from './homepage/view-delivery/add-delivery/add-delivery.component';
import { ViewDetailsComponent } from './homepage/view-delivery/view-details/view-details.component';
import { AddSuggestComponent } from './homepage/view-delivery/view-details/add-suggest/add-suggest.component';
import { ViewSuggestionsComponent } from './homepage/manage-delivery/view-suggestions/view-suggestions.component';
import { HomecontentComponent } from './homepage/homecontent/homecontent.component';
import { MessagesComponent } from './homepage/manage-delivery/messages/messages.component';
import { ViewDeliveryDetailsComponent } from './homepage/manage-delivery/view-delivery-details/view-delivery-details.component';
import { SubscribeComponent } from './homepage/sign-in/subscribe/subscribe.component';
import { ConnectComponent } from './homepage/sign-in/connect/connect.component';
import { MapComponent } from './homepage/view-delivery/map/map.component';
import { PanelComponent } from './homepage/view-delivery/panel/panel.component';
import { NewsComponent } from './homepage/view-delivery/news/news.component';
import { DetailsonpanelComponent } from './homepage/view-delivery/panel/detailsonpanel/detailsonpanel.component';
import { ViewdeliverycontentComponent } from './homepage/view-delivery/viewdeliverycontent/viewdeliverycontent.component';
import { EmptyComponent } from './empty/empty.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowResultsComponent,
    HomepageComponent,
    ViewDeliveryComponent,
    ManageDeliveryComponent,
    ViewHistoryComponent,
    JoinCommunityComponent,
    ManageCommunityComponent,
    SignInComponent,
    AddDeliveryComponent,
    ViewDetailsComponent,
    AddSuggestComponent,
    ViewSuggestionsComponent,
    HomecontentComponent,
    MessagesComponent,
    ViewDeliveryDetailsComponent,
    SubscribeComponent,
    ConnectComponent,
    MapComponent,
    PanelComponent,
    NewsComponent,
    DetailsonpanelComponent,
    ViewdeliverycontentComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
