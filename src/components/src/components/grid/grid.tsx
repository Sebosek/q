import { Component, Prop } from '@stencil/core';
import { gutter } from './grid.gutter';

@Component({
  tag: 'q-grid',
  styleUrl: 'grid.scss',
  shadow: true
})
export class Grid {
  @Prop({ reflectToAttr: true, mutable: true }) gutter: gutter | undefined;

  hostData() {
    if (!this.gutter) {
      return ({});
    }

    return ({
      'class': `gutter-${this.gutter}`,
    });
  }

  render() {
    return <slot></slot>;
  }
}
