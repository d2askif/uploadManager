import RenderProps from './Resource';

import React from 'react';

function test() {
  return (
    <RenderProps
      renderProps={({ date, loading, error }) => {
        if (error) {
          return <div>Error</div>;
        }
        if (loading) {
          return <div>Loading</div>;
        }
      }}
    />
  );
}

export default test;
