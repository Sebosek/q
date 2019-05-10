import { Component, Prop, Watch } from "@stencil/core";
import { size } from "./avatar.size";
import { info } from "../../services/logger";

@Component({
  tag: 'q-avatar',
  styleUrl: 'avatar.scss',
  shadow: true
})
export class Avatar {
  @Prop({ reflectToAttr: true, mutable: true }) size : size = 'm'
  @Prop({ reflectToAttr: true, mutable: true }) initials : string
  @Prop({ reflectToAttr: true, mutable: true }) src : string

  @Watch('initials') watchInitials(newValue : string) {
    if (!newValue) {
      info('avatar', `Initials can't be a empty string.`)
    }

    this.initials = newValue.trim().substr(0, 2)
  }

  render() {
    return (
      <figure { ...this.attrs() }>
        {this.src && <img src={this.src} />}
      </figure>
    )
  }

  private attrs() {
    return ({
      'class': {
        'avatar': true,
        [this.size]: true,
      },
      'data-initials': !!this.initials && this.initials
    })
  }
}
