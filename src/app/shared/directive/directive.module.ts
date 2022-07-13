import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceHtmlDirective } from './replace-html.directive';

@NgModule({
  declarations: [ReplaceHtmlDirective],
  imports: [CommonModule],
  exports: [ReplaceHtmlDirective],
})
export class DirectiveModule {}

