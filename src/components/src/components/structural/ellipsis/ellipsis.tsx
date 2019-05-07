import { Component, Prop, Element, Watch } from "@stencil/core";
import { error } from "../../../services/logger";

@Component({
  tag: 'q-ellipsis',
  styles: `
    :host {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  shadow: true
})
export class Ellipsis {
  @Prop({ reflectToAttr: true, mutable: true }) width : number = 320

  @Watch('width') watchWidth(newValue: number, oldValue: number) {
    if (newValue < 0) { error('Ellipsis', 'Width can not be under the zero.') }
    if (oldValue === newValue) { return }

    this.maxWidth()
  }

  @Element() el! : HTMLElement

  componentDidLoad() {
    this.maxWidth()
  }

  render() {
    return (<slot></slot>);
  }

  private maxWidth() {
    this.el.style.maxWidth = `${this.width}px`;
  }
}
