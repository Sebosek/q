import { Component, Element, Prop, Watch } from "@stencil/core";

@Component({
  tag: 'q-backdrop',
  styleUrl: 'backdrop.scss',
  shadow: true
})
export class Backdrop {
  @Prop({ reflectToAttr: true, mutable: true }) shown : boolean = false

  @Watch('shown') watchShown(newValue : boolean) {
    this.el.classList.toggle('closing', !this.shown)
    if (newValue) {
      this.el.classList.toggle('closed', false)
    }

    if (!newValue) {
      setTimeout(() => this.el.classList.toggle('closed', true), 200)
    }
  }

  @Element() el : HTMLElement

  componentDidLoad() {
    this.el.classList.toggle('closing', !this.shown)
  }

  render() {
    return (
      <div></div>
    )
  }
}
