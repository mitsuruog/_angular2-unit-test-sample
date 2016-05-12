import { describe, it, inject, async, expect, beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { SayHelloComponent } from './say-hello.component';

@Component({
  selector: 'test-container',
  template: '<div></div>',
  directives: [SayHelloComponent]
})
class TestComponent {
}

describe('Test: SayHelloComponent', () => {
  let builder;
  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));

  it('Should display Hello', async(() => {
    let template = '<say-hello></say-hello>';
    return builder.overrideTemplate(TestComponent, template)
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        let div = fixture.nativeElement.querySelector('div');
        expect(div).toHaveText('Hello');
      });
  }));
});
