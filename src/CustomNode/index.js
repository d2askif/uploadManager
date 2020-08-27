import React from 'react';
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
} from '@projectstorm/react-diagrams';

import { JSCustomNodeFactory } from './CustomNodeFactory';
import { JSCustomNodeModel } from './CustomNodeModel';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../helper/DemoCanvasWidget.jsx';

export default () => {
  const engine = createEngine();
  engine.getNodeFactories().registerFactory(new JSCustomNodeFactory());

  const model = new DiagramModel();
  const node1 = new JSCustomNodeModel({ color: 'rgb(192,255,0)' });
  node1.setPosition(50, 50);
  const node2 = new JSCustomNodeModel({ color: 'rgb(192,255,0)' });
  node1.setPosition(150, 50);

  model.addAll(node1, node2);
  model.registerListener({
    //linksUpdated: (link) => console.log(link),
    nodesUpdated: (e) => {
      console.log(e);
    },
  });
  engine.setModel(model);

  return (
    <DemoCanvasWidget>
      <CanvasWidget
        engine={engine}
        actions={{
          deleteItems: false,
          copy: false,
          paste: false,
          selectAll: false,
          deselectAll: false,
        }}
      />
    </DemoCanvasWidget>
  );
};
