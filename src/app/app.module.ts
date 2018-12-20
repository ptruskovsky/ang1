import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetItemComponent } from './widget-item/widget-item.component';
import { SafePipe } from './pipes/safe.pipe';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { SelectedTypePipe } from './pipes/selected-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialComponent,
    WidgetComponent,
    WidgetItemComponent,
    SafePipe,
    TypeFilterPipe,
    SelectedTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
