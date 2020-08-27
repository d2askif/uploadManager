import {
  NodeModel,
  NodeModelGenerics,
  PortModelAlignment,
} from '@projectstorm/react-diagrams';
import { DiamondPortModel } from './DiamondPortModel';

export class DiamondNodeModel extends NodeModel {
  constructor(option = {}) {
    super({
      type: 'diamond',
      ...option,
    });

    this.value = option.value;
    this.addPort(
      new DiamondPortModel(PortModelAlignment.LEFT, PortModelAlignment.TOP)
    );
    this.addPort(
      new DiamondPortModel(PortModelAlignment.LEFT, PortModelAlignment.LEFT)
    );
    this.addPort(
      new DiamondPortModel(PortModelAlignment.RIGHT, PortModelAlignment.BOTTOM)
    );
    this.addPort(
      new DiamondPortModel(PortModelAlignment.RIGHT, PortModelAlignment.RIGHT)
    );
  }

  serialize() {
    return {
      ...super.serialize(),
      value: this.value,
    };
  }
  setValue(value) {
    this.value = value;
  }
}
