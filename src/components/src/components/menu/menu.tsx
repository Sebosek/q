import { Component } from "@stencil/core";

@Component({
  tag: 'q-menu',
  styleUrl: 'menu.scss',
  shadow: true
})
export class Menu {
  render() {
    return (
      <div class="menu">
        <slot></slot>
      </div>
    )
  }
}
