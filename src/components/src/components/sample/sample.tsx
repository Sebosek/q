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
          <span>hello</span>
        ]}
      >
      </q-input>
    );
  }
}
