import React, { Component } from 'react';

import StaggeredList from 'react-staggered-list';

export default class App extends Component {
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
