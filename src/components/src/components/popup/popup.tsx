import { Component, Prop, Watch, Element, Listen } from "@stencil/core";
import { portal } from "../../services/portal";

@Component({
  tag: 'q-pop-up',
  styleUrl: 'popup.scss',
  shadow: true
})
export class Popup {
  constructor() {
    this.styles = this.styles.bind(this)
    this.handleOffClick = this.handleOffClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  @Element() el : HTMLElement

  @Prop({ reflectToAttr: true, mutable: true }) state : 'shown' | 'hidden' = 'hidden'
  @Prop({ reflectToAttr: true, mutable: true }) offclickCloses : boolean = false
  @Prop({ reflectToAttr: true, mutable: true }) multipleClicks : boolean = false

  @Watch('state') watchState(newValue : 'shown' | 'hidden') {
    if (newValue === 'shown') {
      portal.mount(this.el)

      if (this.offclickCloses) {
        setTimeout(() => document.addEventListener('click', this.handleOffClick), 0)
      }
    }

    if (newValue === 'hidden') {
      portal.unmount()

      if (this.offclickCloses) {
        document.removeEventListener('click', this.handleOffClick)
      }
    }
  }

  @Listen('click') handleClick() {
    if (this.multipleClicks) {
      return
    }

    portal.source.setAttribute('state', 'hidden')
  }

  handleOffClick(ev : MouseEvent) {
    const target = ev.target as HTMLElement
    if (!target) {
      return
    }

    if (target.closest('q-pop-up')) {
      // click inside pop-up
      return
    }

    this.state = 'hidden'
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
