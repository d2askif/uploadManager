import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { SourceNodeModel } from './SourceNodeMode';
import { SourceNodeWidget } from './SourceWidget';

export class SourceNodeFactory extends AbstractReactFactory {
  constructor() {
    super('source-node');
  }

  generateModel() {
    return new SourceNodeModel();
  }

  generateReactWidget(event) {
    return <SourceNodeWidget engine={this.engine} node={event.model} />;
  }
}
