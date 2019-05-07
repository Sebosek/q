import { Component } from "@stencil/core";

@Component({
  tag: 'q-portal',
  shadow: true
})
export class Portal {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    )
  }
}
