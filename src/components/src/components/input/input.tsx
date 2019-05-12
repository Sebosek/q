import { Component, Prop, Element, Method } from '@stencil/core';
import { InputEvent } from '../shared/common';

@Component({
  tag: 'q-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  constructor() {
    this.setValue = this.setValue.bind(this)
  }

  @Prop({ reflectToAttr: true, mutable: true }) placeholder: string
  @Prop({ reflectToAttr: true, mutable: true }) type: string
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop() prefixes: Array<(input: HTMLQInputElement) => HTMLElement> = []
  @Prop() suffixes: Array<(input: HTMLQInputElement) => HTMLElement> = []

  @Element() el : HTMLQInputElement

  @Method() async clean() {
    this.value = null
  }

  render() {
    return (
      <div class="input">
        {this.prefixes && this.prefixes.map((prefix) =>
          <div class="input__addon">
            <div class="input__addon__control">{prefix(this.el)}</div>
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
            <div class="input__addon__control">{sufix(this.el)}</div>
          </div>
        )}
      </div>
    );
  }

  private setValue(ev: Event & InputEvent) {
    this.value = ev.target.value
  }
}
