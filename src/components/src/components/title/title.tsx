import { Component, Prop } from '@stencil/core';
import { level } from './title.size';

@Component({
  tag: 'q-title',
  shadow: true
})
export class Title {
  /**
   * Defines general column size
   * @type {cols}
   */
  @Prop({ reflectToAttr: true, mutable: true }) level: level = 1;
}
