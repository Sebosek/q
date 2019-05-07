import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'q-pop-up',
  styleUrl: 'popup.scss',
  shadow: true
})
export class Popup {
  @Prop({ reflectToAttr: true, mutable: true }) state: 'shown' | 'hidden' = 'hidden'

  render() {
    return (
      <div class="popup">
        <slot></slot>
      </div>
    )
  }
}
