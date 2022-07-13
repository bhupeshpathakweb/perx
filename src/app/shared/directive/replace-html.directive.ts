import { Directive, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReplaceHtml]',
})
export class ReplaceHtmlDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setProperty(
      this.eleRef.nativeElement,
      'innerHTML',
      'my new content'
    );

    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'green');
  }
}

