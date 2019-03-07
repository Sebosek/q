import { Component, Prop } from '@stencil/core';
import { cols } from './column.cols';

@Component({
  tag: 'q-column',
  styleUrl: 'column.scss',
  shadow: true
})
export class Column {
  /**
   * Defines general column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) size: cols | undefined;

  /**
   * Defines extra small column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) sizeXs: cols | undefined;

  /**
   * Defines small column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) sizeSm: cols | undefined;

  /**
   * Defines medium column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) sizeMd: cols | undefined;

  /**
   * Defines large column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) sizeLg: cols | undefined;

  private buildSizes() {
    const result = {};
    const sizes = [
      { key: `col-${this.size}`, fnc: () => this.size },
      { key: `col-xs-${this.sizeXs}`, fnc: () => this.sizeXs },
      { key: `col-sm-${this.sizeSm}`, fnc: () => this.sizeSm },
      { key: `col-md-${this.sizeMd}`, fnc: () => this.sizeMd },
      { key: `col-lg-${this.sizeLg}`, fnc: () => this.sizeLg },
    ];

    for (let item of sizes) {
      if (!item.fnc()) {
        continue;
      }

      result[item.key] = true;
    }
    return result;
  }

  hostData() {
    return ({
      'class': this.buildSizes()
    });
  }

  render() {
    return (
      <div class="col-3">
        <slot></slot>
      </div>
    );
  }
}
