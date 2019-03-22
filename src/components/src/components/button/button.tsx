import { Component, Prop } from '@stencil/core';
import { role } from './button.role';

@Component({
  tag: 'q-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop({ reflectToAttr: true, mutable: true }) ghost: boolean;
  @Prop({ reflectToAttr: true, mutable: true }) htmlType: boolean;
  @Prop({ reflectToAttr: true, mutable: true }) role: role = 'default';

  private buildRole() {
    const result = {};
    if (this.role !== 'default') {
      result[`button--${this.role}`] = true;
    }

    return result;
  }

  private buildGhost() {
    return { 'button--ghost': this.ghost };
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
      'class': { ...this.buildRole(), ...this.buildGhost.bind(this)() },
      'type': this.buildType.bind(this)(),
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
