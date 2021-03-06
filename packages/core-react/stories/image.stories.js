import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../src/components/Image';

function ExampleImageWrapper(props) {
  // eslint-disable-next-line react/prop-types
  return <div style={{ maxWidth: '300px' }}>{props.children}</div>;
}

storiesOf('Image', module)
  .add('16by9', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="16by9"
      />
    </ExampleImageWrapper>
  ))
  .add('3by4', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="3by4"
      />
    </ExampleImageWrapper>
  ))
  .add('4by3', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="4by3"
      />
    </ExampleImageWrapper>
  ))
  .add('cinema', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="cinema"
      />
    </ExampleImageWrapper>
  ))
  .add('1by1', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="1by1"
      />
    </ExampleImageWrapper>
  ))

  .add('bg, 16by9', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="16by9"
        bg
      />
    </ExampleImageWrapper>
  ))
  .add('bg, 3by4', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="3by4"
        bg
      />
    </ExampleImageWrapper>
  ))
  .add('bg, 4by3', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="4by3"
        bg
      />
    </ExampleImageWrapper>
  ))
  .add('bg, cinema', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="cinema"
        bg
      />
    </ExampleImageWrapper>
  ))
  .add('bg, 1by1', () => (
    <ExampleImageWrapper>
      <Image
        src="https://source.unsplash.com/random/800x450?minimalist"
        aspect="1by1"
        bg
      />
    </ExampleImageWrapper>
  ));
