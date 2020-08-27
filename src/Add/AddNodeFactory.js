import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { AddNodeModel } from './AddNodeModel';
import { AddNodeWidget } from './AddNodeWidget';

export class AddNodeFactory extends AbstractReactFactory {
  constructor() {
    super('Add-node');
  }

  generateModel() {
    return new AddNodeModel();
  }

  generateReactWidget(event) {
    return <AddNodeWidget engine={this.engine} node={event.model} />;
  }
}
