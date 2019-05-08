import { Component, Prop, Watch, Element } from "@stencil/core";
import { Portal } from "../../services/portal";

@Component({
  tag: 'q-pop-up',
  styleUrl: 'popup.scss',
  shadow: true
})
export class Popup {
  private portal : Portal

  constructor() {
    this.styles = this.styles.bind(this)
    this.portal = new Portal()
  }

  @Element() el : HTMLElement

  @Prop({ reflectToAttr: true, mutable: true }) state: 'shown' | 'hidden' = 'hidden'

  @Watch('state') watchState(newValue: 'shown' | 'hidden') {
    if (newValue === 'shown') {
      this.portal.mount(this.el)
    }

    if (newValue === 'hidden') {
      this.portal.unmount()
    }
  }

  render() {
    return (
      <div {...this.styles()}>
        <slot></slot>
      </div>
    )
  }

  private styles() {
    return ({
      'class': {
        'popup': true,
        'shown': this.state === 'shown',
      }
    })
  }
}
