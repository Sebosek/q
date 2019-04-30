import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'q-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Prop({ reflectToAttr: true, mutable: true }) placeholder: string;

  render() {
    return (
      <div class="input">
        <div class="input__addon">
          <div class="input__addon__control">Prefix</div>
        </div>
        <div class="input__addon">
          <div class="input__addon__control">Prefix</div>
        </div>
        <input type="text" placeholder="Placeholder"></input>
        <div class="input__addon">
          <div class="input__addon__control">Sufix</div>
        </div>
        <div class="input__addon">
          <div class="input__addon__control">Sufix</div>
        </div>
      </div>
    );
  }
}
