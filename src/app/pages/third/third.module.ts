import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '@shared/navbar/navbar.module';
import { DirectiveModule } from '@shared/directive/directive.module';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdComponent } from './third.component';

@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule,
    ThirdRoutingModule,
    NavbarModule,
    MatCardModule,
    DirectiveModule,
  ],
})
export class ThirdModule {}

