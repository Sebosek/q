import { h, Component, Prop } from '@stencil/core';
import { level } from './title.level';

@Component({
  tag: 'q-title',
  styleUrls: ['title.scss'],
  shadow: true
})
export class Title {
  /**
   * Defines general column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) level: level = 1;

  render() {
    switch (this.level) {
      case 1:
        return <h1><slot /></h1>;
      case 2:
        return <h2><slot /></h2>;
      case 3:
        return <h3><slot /></h3>;
      case 4:
        return <h4><slot /></h4>;
    }
  }
}
