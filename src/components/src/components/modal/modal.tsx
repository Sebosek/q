import { Component, Prop, Watch } from "@stencil/core";
import { show, hide } from "../../services/modal";

@Component({
  tag: 'q-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
  @Prop({ reflectToAttr: true, mutable: true }) shown : boolean = true

  @Watch('shown') async watchShown() {
    this.el.classList.toggle('closing', !this.shown)
    this.el.classList.toggle('opening', this.shown)

    if (this.shown) {
      await show()
      return
    }

    await hide();
  }

  el : HTMLElement

  componentDidLoad() {
    this.el.classList.toggle('closing', !this.shown)
  }

  render() {
    return (
      <div
        class="modal"
        ref={(el : HTMLElement) => this.el = el}
      >
        <div class="header">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <svg
            class="close"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => this.shown = false}
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
            </g>
          </svg>
        </div>
        <div class="divider"></div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer">
          <div class="content">
            <slot name="footer"></slot>
          </div>
          <div class="buttons">
            <slot name="buttons"></slot>
          </div>
        </div>
      </div>
    )
  }
}
