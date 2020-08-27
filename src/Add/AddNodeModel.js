import {
  DefaultPortModel,
  NodeModel,
  PortModelAlignment,
} from '@projectstorm/react-diagrams';
import { DiamondPortModel } from './PortModel';

export class AddNodeModel extends NodeModel {
  constructor(option = {}) {
    super({
      ...option,
      type: 'Add-node',
    });
    this.result = option.value || 0;
    const port1 = new DiamondPortModel({
      in: true,
      name: 'num1',
    });
    port1.registerListener({
      selectionChanged: () => console.log('sourcePortChanged'),
    });
    this.addPort(port1);

    this.addPort(
      new DiamondPortModel({
        in: true,
        name: 'num2',
        alignment: PortModelAlignment.BOTTOM,
      })
    );

    this.addPort(
      new DiamondPortModel({
        in: false,
        name: 'out',
      })
    );
  }

  serialize() {
    return { ...super.serialize(), result: this.result };
  }

  deserialize(obj, engine) {
    super.deserialize(obj, engine);
  }

  add() {
    return 43;
  }
}
