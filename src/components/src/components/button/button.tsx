import { Component, Prop } from '@stencil/core';
import { role } from './button.role';

@Component({
  tag: 'q-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  constructor() {
    this.buildRole = this.buildRole.bind(this)
    this.buildGhost = this.buildGhost.bind(this)
    this.buildType = this.buildType.bind(this)
  }

  @Prop({ reflectToAttr: true, mutable: true }) ghost : boolean;
  @Prop({ reflectToAttr: true, mutable: true }) htmlType : boolean;
  @Prop({ reflectToAttr: true, mutable: true }) disabled : boolean;
  @Prop({ reflectToAttr: true, mutable: true }) role : role = 'default';

  private buildRole() {
    const result = {};
    if (this.role !== 'default') {
      result[`${this.role}`] = true;
    }

    return result;
  }

  private buildGhost() {
    return { 'ghost': this.ghost };
  }

  private buildType() {
    if (this.htmlType === false) {
      return 'button';
    }

    const dict = {
      'default': 'button',
      'primary': 'submit',
      'danger': 'reset',
    }

    return dict[this.role];
  }

  private buttonData() {
    return ({
      'class': { ...this.buildRole(), ...this.buildGhost() },
      'type': this.buildType(),
      'disabled': this.disabled,
    });
  }

  render() {
    return (
      <button { ...this.buttonData() }>
        <slot />
      </button>
    );
  }
}
