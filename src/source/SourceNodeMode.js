import {
  NodeModel,
  DefaultPortModel,
  PortModelAlignment,
} from '@projectstorm/react-diagrams';

export class SourceNodeModel extends NodeModel {
  constructor(option = {}) {
    super({
      ...option,
      type: 'source-node',
    });

    this.value = option.value || 0;
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
        alignment: PortModelAlignment.BOTTOM,
      })
    );
  }
  serialize() {
    return {
      ...super.serialize(),
      value: this.value,
    };
  }
}
