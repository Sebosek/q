import { Component } from "@stencil/core";

@Component({
  tag: 'q-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true
})
export class MenuItem {
  render() {
    return (
      <div class="menu-item">
        <slot></slot>
      </div>
    )
  }
}
