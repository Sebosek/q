import { Component, Prop, State } from '@stencil/core';
import { InputInterface } from './input.interface';
import { InputEvent } from '../shared/common';

@Component({
  tag: 'q-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input implements InputInterface {
  constructor() {
    this.setValue = this.setValue.bind(this)
  }

  @Prop({ reflectToAttr: true, mutable: true }) placeholder: string
  @Prop({ reflectToAttr: true, mutable: true }) type: string
  @Prop({ reflectToAttr: true, mutable: true }) default: string | number
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop() prefixes: Array<(input: InputInterface) => JSX.Element> = []
  @Prop() suffixes: Array<(input: InputInterface) => JSX.Element> = []

  @State() value: string | number = this.default

  render() {
    return (
      <div class="input">
        {this.prefixes && this.prefixes.map((prefix) =>
          <div class="input__addon">
            <div class="input__addon__control">{prefix(this)}</div>
          </div>
        )}

        <input
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          onInput={this.setValue}
        />

        {this.suffixes && this.suffixes.map((sufix) =>
          <div class="input__addon">
            <div class="input__addon__control">{sufix(this)}</div>
          </div>
        )}
      </div>
    );
  }

  private setValue(ev: Event & InputEvent) {
    this.value = ev.target.value

    return Promise.resolve();
  }
}
