import React from 'react';
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
  PortModel,
  PortModelAlignment,
  DefaultNodeModel,
} from '@projectstorm/react-diagrams';

import { AddNodeFactory } from './AddNodeFactory';
import { AddNodeModel } from './AddNodeModel';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../helper/DemoCanvasWidget.jsx';
import { SourceNodeFactory } from '../source/SourceModelFactory';
import { SourceNodeModel } from '../source/SourceNodeMode';
import { SimplePortFactory } from './PortFactory';
import { DiamondPortModel } from './PortModel';

export default () => {
  const engine = createEngine();
  engine
    .getPortFactories()
    .registerFactory(
      new SimplePortFactory(
        'Add-node',
        (config) => new DiamondPortModel(PortModelAlignment.TOP)
      )
    );
  engine.getNodeFactories().registerFactory(new AddNodeFactory());
  engine.getNodeFactories().registerFactory(new SourceNodeFactory());
  const model = new DiagramModel();
  const node1 = new AddNodeModel({ color: 'rgb(192,255,0)' });
  console.log('node 1 optons', node1.getOptions());
  node1.setPosition(50, 50);
  const node2 = new SourceNodeModel({ color: 'rgb(192,255,0)', value: 1 });
  const node3 = new SourceNodeModel({ color: 'rgb(192,255,0)', value: 2 });
  const node4 = new DefaultNodeModel();
  node4.addInPort('in');

  node2.setPosition(120, 90);
  node2.setPosition(150, 50);
  console.log('node 2 optons', node2.getOptions());
  console.log('node 3 optons', node3.getOptions());

  console.log('node 1 serialize', node1.serialize());
  console.log('node 2 serialize', node2.serialize());

  /* const ports = node1.getPorts();
  for (let item in ports) {
    ports[item].registerListener({
      linksUpdated: () => console.log('port element linksUpdated'),
      eventDidFire: () => console.log('port element eventDidFire'),
      selectionChanged: () => console.log('selectionChanged'),
      sourcePortChanged: () => console.log('port sourcePortChanged'),
    });
  } */

  model.addAll(node1, node2, node3, node4);
  node2.registerListener({
    linksUpdated: () => console.log('linksUpdated'),
  });
  node3.registerListener({
    linksUpdated: () => console.log('linksUpdated'),
  });
  node1.registerListener({
    linksUpdated: () => console.log('linksUpdated'),
  });

  model.registerListener({
    linksUpdated: function (event) {
      event.link.registerListener({
        // New created link events here
        selectionChanged: () => console.log('selectionChanged'),
        entityRemoved: () => console.log('entityRemoved'),
        sourcePortChanged: () => console.log('sourcePortChanged'),
      });
    },
  });

  engine.setModel(model);

  return (
    <DemoCanvasWidget>
      <CanvasWidget engine={engine} />
    </DemoCanvasWidget>
  );
};
