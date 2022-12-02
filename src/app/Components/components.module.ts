import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetMainComponent} from './weather-widget-main/weather-widget-main.component';
import { MindicadorComponent } from './mindicador/mindicador.component';
import { ConductoresComponent } from './conductores/conductores.component';



@NgModule({
  declarations: [WeatherWidgetMainComponent, MindicadorComponent, ConductoresComponent],
  imports: [
    CommonModule
  ],
  exports: [WeatherWidgetMainComponent, MindicadorComponent, ConductoresComponent]
})
export class ComponentsModule { }
