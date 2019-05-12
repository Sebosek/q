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
          input => <span onClick={() => input.clean()}>clean</span> as HTMLElement
        ]}
      >
      </q-input>
    );
  }
}
