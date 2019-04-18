import { Component } from '@stencil/core';

@Component({
  tag: 'q-caption',
  styleUrls: ['caption.scss'],
  shadow: true
})
export class Caption {
  render() {
    return (
      <small>
        <slot />
      </small>
    );
  }
}
