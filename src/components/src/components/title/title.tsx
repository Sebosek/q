import { Component, Prop } from '@stencil/core';
import { level } from './title.level';

@Component({
  tag: 'q-title',
  styleUrl: 'title.scss',
  shadow: true
})
export class Title {
  constructor() {
    this.titleData = this.titleData.bind(this)
  }

  /**
   * Defines general column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) level: level = 1

  @Prop({ reflectToAttr: true, mutable: true }) spaceless: boolean

  render() {
    switch (this.level) {
      case 1:
        return <h1 { ...this.titleData() }><slot /></h1>;
      case 2:
        return <h2 { ...this.titleData() }><slot /></h2>;
      case 3:
        return <h3 { ...this.titleData() }><slot /></h3>;
      case 4:
        return <h4 { ...this.titleData() }><slot /></h4>;
    }
  }

  private titleData() {
    return ({
      'class': {
        'spaceless': this.spaceless
      }
    })
  }
}
