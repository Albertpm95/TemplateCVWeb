import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "a[href]",
})
export class ExternalLinkDirective {
  @HostBinding("attr.rel") relAttr = "";
  @HostBinding("attr.target") targetAttr = "";
  @HostBinding("attr.href") hrefAttr = "";
  @Input() href: string = "";
  constructor() {}

  ngOnChanges() {
    this.hrefAttr = this.href;

    if (this.isLinkExternal()) {
      this.relAttr = "noopener";
      this.targetAttr = "_blank";
    }
  }
  private isLinkExternal(): boolean {
    return !this.href.includes(location.hostname);
  }
}
