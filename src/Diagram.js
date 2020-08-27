import createEngine, {
  DiagramModel,
  DefaultNodeModel,
  DefaultLinkModel,
  NodeModelListener,
} from '@projectstorm/react-diagrams';
import * as React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './helper/DemoCanvasWidget.jsx';
import {
  Action,
  ActionEvent,
  InputType,
} from '@projectstorm/react-canvas-core';
import * as _ from 'lodash';

class CustomDeleteItemsAction extends Action {
  constructor(options = {}) {
    options = {
      keyCodes: [46, 8, 59, 17],
      ...options,
    };
    super({
      type: InputType.KEY_DOWN,
      fire: (event) => {
        console.log(event);

        if (options.keyCodes.indexOf(event.event.keyCode) !== -1) {
          const selectedEntities = this.engine.getModel().getSelectedEntities();
          if (selectedEntities.length > 0) {
            const confirm = window.confirm('Are you sure you want to delete?');

            if (confirm) {
              _.forEach(selectedEntities, (model) => {
                console.log(model);

                // only delete items which are not locked
                if (!model.isLocked()) {
                  model.remove();
                }
              });
              this.engine.repaintCanvas();
            }
          }
        }
      },
    });
  }
}

export default () => {
  //1) setup the diagram engine
  var engine = createEngine();

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel({
    name: 'Node 1',
    color: 'rgb(0,192,255)',
  });
  node1.setPosition(100, 100);
  let port1 = node1.addOutPort('Out');

  //3-B) create another default node
  var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
  let port2 = node2.addInPort('In');
  node2.setPosition(400, 100);
  // link the ports
  let link1 = port1.link(port2); //link < DefaultLinkModel > port2;
  link1.getOptions().testName = 'Test';
  link1.addLabel('Hello World!');

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);
  //5) load model into engine
  engine.setModel(model);
  engine.getActionEventBus().registerAction(new CustomDeleteItemsAction());

  //6) render the diagram!
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
