import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const element =
      document.createElement('div');

    const directive = new Highlight(
      new ElementRef(element)
    );

    expect(directive).toBeTruthy();
  });
});