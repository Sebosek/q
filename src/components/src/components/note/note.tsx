import { Component } from '@stencil/core';

@Component({
  tag: 'q-note',
  styleUrl: 'note.scss',
  shadow: true
})
export class Note {
  render() {
    return (
      <small>
        <slot />
      </small>
    );
  }
}
