import { Component, Prop, Event, EventEmitter, Watch, Listen } from "@stencil/core";

@Component({
  tag: "q-toggle",
  styleUrl: "toggle.scss",
  shadow: true
})
export class Toggle {
  @Prop({ reflectToAttr: true, mutable: true }) switched: boolean = false

  @Event() changed: EventEmitter<boolean>

  @Watch('switched') watchSwitched() {
    this.el.classList.toggle('switcher--switched', this.switched)
    this.el.classList.toggle('switcher--play-switched', this.switched)
    this.el.classList.toggle('switcher--play-unswitched', !this.switched)
    this.changed.emit(this.switched)
  }

  @Listen('keydown') handleKeyDown(ev: KeyboardEvent) {
    const keys = [' ', 'Enter']
    if (keys.includes(ev.key)) {
      this.toggle()
    }
  }

  private el: HTMLElement

  handleClick() {
    this.toggle()
  }

  componentDidLoad() {
    this.el.classList.toggle('switcher--switched', this.switched)
  }

  render() {
    return (
      <div
        class="switcher"
        tabindex="0"
        ref={(el: HTMLElement) => this.el = el}
        onClick={this.handleClick.bind(this)}>
      </div>
    );
  }

  private toggle() {
    this.switched = !this.switched
  }
}
