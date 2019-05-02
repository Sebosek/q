import { Component, Event, EventEmitter, Listen, Prop, Watch } from "@stencil/core";

@Component({
  tag: "q-radio",
  styleUrl: "radio.scss",
  shadow: true
})
export class Radio {
  constructor() {
    this.select = this.select.bind(this);
  }

  @Prop({ reflectToAttr: true, mutable: true }) checked: boolean = false
  @Prop({ reflectToAttr: true, mutable: true }) name: string
  @Prop({ reflectToAttr: true, mutable: true }) value: string | number | null
  @Prop({ reflectToAttr: true, mutable: true }) disabled: boolean = false
  @Prop({ mutable: true }) tabindex: number = 0

  @Watch('disabled') watchDisabled() {
    this.el.classList.toggle('disabled', this.disabled)
  }

  @Event() selected: EventEmitter<void | string | number>

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    const keys = [' ', 'Enter']
    if (keys.includes(ev.key)) {
      this.select()
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
      <div
        class="radio"
        tabindex={this.tabindex}
        ref={(el: HTMLElement) => this.el = el}
        onClick={this.select}
      >
        <input
          type="radio"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          value={this.value}
        />
        <div class="control" />
      </div>
    );
  }

  private select() {
    if (this.checked) {
      return
    }

    this.checked = true
    this.selected.emit(this.value)
  }
}
