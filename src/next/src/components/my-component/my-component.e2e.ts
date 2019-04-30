import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {

    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil"></my-component>`,
    });

    //expect(root).toEqualHtml(``);
    expect(root.first).toHaveClass('Stencil');
  });

  // it('renders changes to the name data', async () => {
  //   const page = await newE2EPage();

  //   await page.setContent('<my-component></my-component>');
  //   const component = await page.find('my-component');
  //   const element = await page.find('my-component >>> div');
  //   expect(element.textContent).toEqual(`Hello, World! I'm `);

  //   component.setProperty('first', 'James');
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James`);

  //   component.setProperty('last', 'Quincy');
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

  //   component.setProperty('middle', 'Earl');
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  // });
});
