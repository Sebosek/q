import { Component } from '@stencil/core';

@Component({
  tag: 'q-paragraph',
  styleUrls: ['paragraph.scss'],
  shadow: true
})
export class Paragraph {
  render() {
    return (
      <p>
        <slot />
      </p>
    );
  }
}
