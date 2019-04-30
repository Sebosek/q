import { Component } from '@stencil/core';

@Component({
  tag: 'q-text',
  styleUrls: ['text.scss'],
  shadow: true
})
export class Text {
  render() {
    return (
      <p>
        <slot />
      </p>
    );
  }
}
