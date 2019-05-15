import { Component, Element, Prop, Watch, Listen } from "@stencil/core";

@Component({
  tag: 'q-backdrop',
  styleUrl: 'backdrop.scss',
  shadow: true
})
export class Backdrop {
  @Prop({ reflectToAttr: true, mutable: true }) shown : boolean = false

  @Watch('shown') watchShown(newValue : boolean) {
    this.el.classList.toggle('hiding', !this.shown)
    if (newValue) {
      this.el.classList.toggle('hidden', false)
      this.el.classList.toggle('showing', true)
    }

    if (!newValue) {
      setTimeout(() => this.el.classList.toggle('hidden', true), 200)
    }
  }

  @Element() el : HTMLElement

  @Listen('click') handleClick() {
    this.shown = false
  }

  // componentDidLoad() {
  //   this.el.classList.toggle('hiding', !this.shown)
  // }

  render() {
    return (
      <div></div>
    )
  }
}
