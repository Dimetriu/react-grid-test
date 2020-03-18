import React from 'react';
import {
  ContentHeading as StyledContentHeading
} from './ContentHeading.styles';

export default function ContentHeading() {
  return (
    <StyledContentHeading>
      <h3 className="H3">Candy cotton candy sesame snaps biscuit</h3>
      <p>
        Candy cotton candy sesame <span className="tag">#Design</span>{' '}
        <span className="tag">#HR</span> biscuit dessert topping halvah marshmallow
        gummies. Pie toffee dragée chocolate toffee biscuit. Icing chocolate
        cake ice cream jelly beans chocolate cake soufflé candy.
      </p>
    </StyledContentHeading>
  );
}
