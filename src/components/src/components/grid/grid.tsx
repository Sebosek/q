import { Component } from '@stencil/core';

@Component({
  tag: 'q-grid',
  styleUrl: 'grid.scss',
  shadow: true
})
export class Grid {
  render() {
    return <slot></slot>;
  }
}
