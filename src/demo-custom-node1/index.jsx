import createEngine, {
  DefaultNodeModel,
  DiagramModel,
  PortModelAlignment,
} from '@projectstorm/react-diagrams';
import * as React from 'react';
import * as beautify from 'json-beautify';

// import the custom models
import { DiamondNodeModel } from './DiamondNodeModel';
import { DiamondNodeFactory } from './DiamondNodeFactory';
import { SimplePortFactory } from './SimplePortFactory';
import { DiamondPortModel } from './DiamondPortModel';
import {
  CanvasWidget,
  DeleteItemsAction,
} from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from '../helper/DemoCanvasWidget';

import { DemoWorkspaceWidget } from '../helper/DemoWorkspaceWidget';
import { log, mode } from 'mathjs';

/**
 * @Author Dylan Vorster
 */
export default () => {
  //1) setup the diagram engine
  const engine = createEngine({ registerDefaultDeleteItemsAction: true });

  // register some other factories as well
  engine
    .getPortFactories()
    .registerFactory(
      new SimplePortFactory(
        'diamond',
        (config) => new DiamondPortModel(PortModelAlignment.LEFT)
      )
    );
  engine.getNodeFactories().registerFactory(new DiamondNodeFactory());

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
  var port1 = node1.addOutPort('Out');
  node1.setPosition(100, 200);

  //3-B) create our new custom node
  var node2 = new DiamondNodeModel({
    name: 'Diamond node',
    value: 'daniel',
  });
  node2.setPosition(250, 108);

  var node3 = new DefaultNodeModel('Node 3', 'red');
  var port3 = node3.addInPort('In');
  node3.setPosition(600, 100);

  //3-C) link the 2 nodes together

  var node4 = new DefaultNodeModel('Node 4', 'rgb(0,192,255)');
  var port4 = node4.addOutPort('Out');
  node4.setPosition(100, 300);

  var link3 = port4.link(node2.getPort(PortModelAlignment.TOP));

  var node5 = new DefaultNodeModel('Node 5', 'mediumpurple');
  var port5 = node5.addInPort('In');
  node5.setPosition(600, 300);

  var link4 = port5.link(node2.getPort(PortModelAlignment.BOTTOM));

  //4) add the models to the root graph
  model.addAll(node1, node2, node3, node4, link3, link4, node5);

  //5) load model into engine
  engine.setModel(model);

  // register an DeleteItemsAction with custom keyCodes (in this case, only Delete key)
  engine
    .getActionEventBus()
    .registerAction(new DeleteItemsAction({ keyCodes: [16] }));

  //6) render the diagram!
  return (
    <DemoWorkspaceWidget
      buttons={
        <div>
          <button
            onClick={() => {
              console.log(beautify(model.serialize(), null, 2, 80));
            }}
          >
            Serialize
          </button>
          ' '
          <button
            onClick={() => {
              for (let i = 0; i < 3; i++) {
                const node = new DiamondNodeModel({ value: `value_${i}` });
                node.setPosition(20 + i * 10, 100);
                model.addNode(node);
              }
              engine.repaintCanvas();
            }}
          >
            Add cards
          </button>
          ' '<button onClick={() => engine.zoomToFit()}>Zoom to fit</button>
        </div>
      }
    >
      <DemoCanvasWidget
        onClick={() => {
          model.setLocked(false);
          console.log('click');
        }}
        background='#120f22'
      >
        <CanvasWidget engine={engine} />
      </DemoCanvasWidget>
    </DemoWorkspaceWidget>
  );
};
