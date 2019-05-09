import { Component, EventEmitter, Event, Prop, Listen, Watch } from "@stencil/core";

@Component({
  tag: "q-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})
export class Checkbox {
  constructor() {
    this.toggle = this.toggle.bind(this);
  }

  @Prop({ reflectToAttr: true, mutable: true }) checked: boolean = false
  @Prop({ reflectToAttr: true, mutable: true }) intermediate: boolean = false
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number
  @Prop({ reflectToAttr: true, mutable: true }) disabled: boolean = false
  @Prop() tabindex: number = 0

  @Watch('intermediate') watchIntermediate() {
    this.el.classList.toggle('checkbox--indeterminate', this.intermediate)
  }

  @Watch('disabled') watchDisabled() {
    this.el.classList.toggle('checkbox--disabled', this.disabled)
  }

  @Event() changed: EventEmitter<string | number | boolean>

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    const keys = [' ', 'Enter']
    if (keys.includes(ev.key)) {
      this.toggle()
    }
  }

  @Listen('click') handleClick(ev: MouseEvent) {
    ev.stopPropagation()
    this.toggle()
  }

  private el: HTMLElement

  componentDidLoad() {
    this.el.classList.toggle('checkbox--indeterminate', this.intermediate)
  }

  render() {
    return (
      <div
        class="checkbox"
        tabindex={this.tabindex}
        ref={(el: HTMLElement) => this.el = el}
      >
        <input
          type="checkbox"
          checked={this.checked}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
        />
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
      </div>
    );
  }

  private toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked
    this.intermediate = false;
    const value = !this.checked || (this.value || true)

    this.changed.emit(value)
  }
}
