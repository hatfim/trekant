import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Image', module)
  .addWithJSX('16/9 img', () => (
    <div style={{ maxWidth: '500px' }}>
      <div className="ImgContainer--16by9">
        <img src="https://source.unsplash.com/random/800x800" />
      </div>
    </div>
  ))
  .addWithJSX('3/4 img', () => (
    <div style={{ maxWidth: '400px' }}>
      <div className="ImgContainer--3by4">
        <img src="https://source.unsplash.com/random/800x1200" />
      </div>
    </div>
  ))
  .addWithJSX('16/9 background', () => (
    <div style={{ maxWidth: '500px' }}>
      <div
        className="Background--16by9"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/800x800)`
        }}
      />
    </div>
  ))
  .addWithJSX('3/4 background', () => (
    <div style={{ maxWidth: '400px' }}>
      <div
        className="Background--3by4"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/800x1200)`
        }}
      />
    </div>
  ));