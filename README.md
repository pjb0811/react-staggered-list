# react-staggered-list

> staggered list app using react &amp; react-motion.

[![NPM](https://img.shields.io/npm/v/react-staggered-list.svg)](https://www.npmjs.com/package/react-staggered-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-staggered-list
```

## Usage

[demo](https://codesandbox.io/s/w01nwo9r0l)

```tsx
import * as React from 'react';

import StaggeredList from 'react-staggered-list';

class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>react-staggered-list</h1>
        <div
          style={{
            width: 100,
            height: 100,
            margin: '0 auto'
          }}
        >
          <StaggeredList>
            <div style={{ widht: 100, height: 100, background: 'green' }} />
            <div style={{ widht: 100, height: 100, background: 'red' }} />
            <div style={{ widht: 100, height: 100, background: 'blue' }} />
          </StaggeredList>
        </div>
      </div>
    );
  }
}
```

## License

MIT © [pjb0811](https://github.com/pjb0811)
