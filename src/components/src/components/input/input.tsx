import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'q-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Prop({ reflectToAttr: true, mutable: true }) placeholder: string
  @Prop({ reflectToAttr: true, mutable: true }) type: string
  @Prop({ reflectToAttr: true, mutable: true }) default: string
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  // @Prop() prefixes: Array<JSX.Element>
  // @Prop() suffixes: Array<JSX.Element>
  @Prop() prefixes: Array<any> = []
  @Prop() suffixes: Array<any> = []

  render() {
    return (
      <div class="input">
        {this.prefixes && this.prefixes.map((prefix) =>
          <div class="input__addon">
            <div class="input__addon__control">{prefix}</div>
          </div>
        )}

        <input
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
        />

        {this.suffixes && this.suffixes.map((sufix) =>
          <div class="input__addon">
            <div class="input__addon__control">{sufix}</div>
          </div>
        )}
      </div>
    );
  }
}
