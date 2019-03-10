import { Component } from "@stencil/core";

@Component({
  tag: 'q-label',
  styleUrl: 'label.scss',
  shadow: true
})
export class Label {
  render() {
    return (
      <div class="label">
        <slot />
      </div>
    );
  }
}
