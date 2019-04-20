import { Component } from "@stencil/core";

@Component({
  tag: "q-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})
export class Checkbox {
  render() {
    return (
      <label class="checkbox" tabindex="0">
        <input type="checkbox" />
        <div class="checkbox__control">
          <div class="checkbox__control__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
              </g>
            </svg>
          </div>
        </div>
      </label>
    );
  }
}
