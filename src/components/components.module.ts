import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { PersonService } from './../providers/person/person.service';

@NgModule({
	declarations: [PersonComponent],
	imports: [],
	exports: [PersonComponent],
	providers: [PersonService]
})
export class ComponentsModule { }
