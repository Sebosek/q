import { Component } from '@stencil/core';

@Component({
  tag: 'q-paragraph',
  styleUrl: 'paragraph.scss',
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
