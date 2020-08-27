import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export class SourceNodeWidget extends React.Component {
  render() {
    console.log(this.props.engine.model.getLinks());

    return (
      <div className='custom-node source-node '>
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort('out')}
        >
          <div className='circle-port' />
        </PortWidget>
        <div
          onClick={() => {
            console.log(this.props.node.getID());
          }}
          className='custom-node-color'
          style={{ backgroundColor: this.props.node.color }}
        ></div>
      </div>
    );
  }
}
