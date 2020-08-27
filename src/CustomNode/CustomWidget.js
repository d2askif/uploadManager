import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export class JSCustomNodeWidget extends React.Component {
  render() {
    console.log(this.props.engine.model.getLinks());

    return (
      <div className='custom-node'>
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort('in')}
        >
          <div className='circle-port in' />
        </PortWidget>
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort('out')}
        >
          <div className='circle-port' />
        </PortWidget>
        <div
          onClick={() => {
            console.log(this.props.node.getID());
            console.log('port', this.props.node.getPort('in').getLinks());
          }}
          className='custom-node-color'
          style={{ backgroundColor: this.props.node.color }}
        ></div>
      </div>
    );
  }
}
