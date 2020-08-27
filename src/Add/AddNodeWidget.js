import * as React from 'react';
import { PortWidget, PortModelAlignment } from '@projectstorm/react-diagrams';

export class AddNodeWidget extends React.Component {
  componentWillUpdate() {
    const links = this.props.engine.model.getLinks();
    console.log({ links });
    const Id = this.props.node.getPorts('in');
    console.log({ Id });

    if (links.length > 0) {
      const sProt = links[0].getSourcePort();
      console.log({ sProt, Id: this.props.node.getID() });
      const parent = links[0].getTargetPort();

      if (parent) {
        console.log({ parent: parent.getParent().options });
      }
    }
  }
  render() {
    return (
      <div className='custom-node'>
        {console.log(this.props.node.getPorts())}
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
        >
          <div className='circle-port in' />
        </PortWidget>

        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
        >
          <div className='circle-port in' />
        </PortWidget>

        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
        >
          <div className='circle-port' />
        </PortWidget>
        <div
          onClick={() => {
            console.log(this.props.node.getID());
          }}
          className='custom-node-color'
          style={{ backgroundColor: this.props.node.color }}
        >
          {this.props.node.add()}
        </div>
      </div>
    );
  }
}
