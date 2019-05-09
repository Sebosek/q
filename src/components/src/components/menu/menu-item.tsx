import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'q-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true
})
export class MenuItem {
  @Prop({ reflectToAttr: true, mutable: true }) defaultCursor : boolean = false

  render() {
    return (
      <div { ...this.styles() }>
        <slot></slot>
      </div>
    )
  }

  private styles() {
    return ({
      'class': {
        'menu-item': true,
        'default': this.defaultCursor,
      }
    })
  }
}
