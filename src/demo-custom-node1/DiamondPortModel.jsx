import {
  LinkModel,
  PortModel,
  DefaultLinkModel,
  PortModelAlignment,
} from '@projectstorm/react-diagrams';

export class DiamondPortModel extends PortModel {
  constructor(alignment, name) {
    super({
      type: 'diamond',
      name: name,
      alignment: alignment,
    });
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
}
