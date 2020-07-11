import React from 'react';
import clsx from 'clsx';
import './scroll.css';
export default function scroll() {
  return (
    <div className='root'>
      <div className={clsx({ 'top-element': true })}></div>
      <div className='parent'>
        <div className='child-one'>
          <div className='child-three'>three</div>
        </div>
        <div className='child-two'>
          {[1, 2, 3, 5, 6, 7, 8].map((_, index) => (
            <div className={clsx('item', { sticky: index === 2 })}>
              {' '}
              tiem +{index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
