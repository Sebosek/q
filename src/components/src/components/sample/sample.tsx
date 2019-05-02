import { Component } from '@stencil/core';

@Component({
  tag: 'q-sample',
  shadow: false
})
export class Sample {
  render() {
    return (
      <q-input
        name="sample"
        prefixes={[
          (control) => <span onClick={_ => control.value = ''}>hello</span>,
        ]}
      >
      </q-input>
    );
  }
}
