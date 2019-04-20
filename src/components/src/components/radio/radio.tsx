import { Component } from "@stencil/core";

@Component({
  tag: "q-radio",
  styleUrl: "radio.scss",
  shadow: true
})
export class Radio {
  render() {
    return (
      <label class="radio" tabindex="0">
        <input type="radio" name="radio-group" checked />
        <div class="radio__control" />
      </label>
    );
  }
}
