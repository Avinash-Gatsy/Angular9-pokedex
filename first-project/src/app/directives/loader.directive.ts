import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective implements OnChanges {
  @Input('appLoader') showLoader: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.showLoader) {
      //const parent = this.renderer.parentNode(this.el.nativeElement);  
      const div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'wrapper');
      const div2 = this.renderer.createElement('div');
      this.renderer.addClass(div2, "pokeball");
      this.renderer.appendChild(this.el.nativeElement, div);
      console.dir(this.el.nativeElement);
      this.renderer.appendChild(this.el.nativeElement.lastElementChild, div2);
    } else {
      Array.from(this.el.nativeElement.children).forEach(child => {
        if (child['className'] === 'wrapper') {
          this.renderer.removeChild(this.el.nativeElement, child);
        }
      });
    }
  }
}
