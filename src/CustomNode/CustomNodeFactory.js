import * as React from 'react';
import { JSCustomNodeModel } from './CustomNodeModel';
import { JSCustomNodeWidget } from './CustomWidget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

export class JSCustomNodeFactory extends AbstractReactFactory {
  constructor() {
    super('js-custom-node');
  }

  generateModel(event) {
    return new JSCustomNodeModel();
  }

  generateReactWidget(event) {
    return <JSCustomNodeWidget engine={this.engine} node={event.model} />;
  }
}
