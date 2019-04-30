import { Component, Listen, Prop, Watch } from "@stencil/core";

@Component({
  tag: "q-radio",
  styleUrl: "radio.scss",
  shadow: true
})
export class Radio {
  @Prop({ reflectToAttr: true, mutable: true }) checked: boolean = false
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number
  @Prop({ reflectToAttr: true, mutable: true }) disabled: boolean = false
  @Prop({ mutable: true }) tabindex: number = 0

  @Watch('disabled') watchDisabled() {
    this.el.classList.toggle('disabled', this.disabled)
  }

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    const keys = [' ', 'Enter']
    if (keys.includes(ev.key)) {
      this.checked = true
    }
  }

  private el: HTMLElement

  componentDidLoad() {
    this.el.classList.toggle('disabled', this.disabled)
    if (this.disabled) {
      this.tabindex = -1
    }
  }

  render() {
    return (
      <label
        class="radio"
        tabindex={this.tabindex}
        ref={(el: HTMLElement) => this.el = el}
      >
        <input
          type="radio"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          value={this.value}
        />
        <div class="control" />
      </label>
    );
  }
}
