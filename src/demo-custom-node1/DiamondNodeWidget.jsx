import * as React from 'react';
import { DiamondNodeModel } from './DiamondNodeModel';
import {
  DiagramEngine,
  PortModelAlignment,
  PortWidget,
} from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

export const Port = styled.div`
  width: 16px;
  height: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

export const PortIn = styled.div`
  width: 34px;
  height: 20px;
  z-index: 10;
  border: 1px solid rgb(60, 60, 60);
  background-color: #e4e2e4;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  box-shadow: 0px 2px 3px #000;
  font-size: 11px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #b3d657;
    border-color: #fafafa;
  }
`;

export const PortOut = styled.div`
  width: 34px;
  height: 20px;
  z-index: 10;
  border: 1px solid rgb(60, 60, 60);
  background-color: #f9aa33;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  text-align: center;
  box-shadow: 0px 2px 3px #000;
  color: #fafafa;
  font-size: 11px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #b3d657;
    border-color: #fafafa;
  }
`;

export const Title = styled.div`
  height: 34px;
  background-color: rgba(36, 36, 36);
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.75);
  color: #fafafa;
  text-align: left;
  box-sizing: border-box;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const Input = styled.input`
  width: 80%;
  background-color: rgba(0, 0, 0, 0);
  height: 24px;
  border: 1px solid #625f77;

  border-radius: 4px;
  margin-bottom: 8px;
  position: absolute;
  outline: none;
  color: #fafafa;
  top: 150px;
  left: 16px;
  padding-left: 8px;
  box-sizing: border-box;
  z-index: 0;
`;

export const Select = styled.select`
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 24px;
  border: 1px solid #625f77;

  border-radius: 4px;
  margin-bottom: 8px;
  position: absolute;
  outline: none;
  color: #fafafa;
  top: 182px;
  left: 16px;
  padding-left: 8px;
  box-sizing: border-box;
  z-index: 0;
`;

export const Logo = styled.div`
  position: absolute;
  left: -3px;
  top: -3px;
  background-color: #f9aa33;
  height: 36px;
  width: 40px;
  border-radius: 2px;
  border-top-left-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/**
 * @author Dylan Vorster
 */
export class DiamondNodeWidget extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div
        className={'diamond-node'}
        style={{
          position: 'relative',
          width: this.props.size + 120,
          height: this.props.size + 200,
          backgroundColor: 'rgba(0, 0, 0,0.4)',
          border: '3px solid  #f9aa33',
          borderRadius: 4,
          boxShadow: '0px 1px 12px 0px rgba(0,0,0,0.75)',
          textAlign: 'center',
          paddingBottom: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PortWidget
          style={{
            top: 50,
            left: -3,
            position: 'absolute',
          }}
          port={this.props.node.getPort(PortModelAlignment.LEFT)}
          engine={this.props.engine}
        >
          <PortIn>IN</PortIn>
        </PortWidget>
        <PortWidget
          style={{
            top: 78,
            left: -3,
            position: 'absolute',
          }}
          port={this.props.node.getPort(PortModelAlignment.TOP)}
          engine={this.props.engine}
        >
          <PortIn>IN</PortIn>
        </PortWidget>
        <PortWidget
          style={{
            left: 139,
            top: 50,
            position: 'absolute',
          }}
          port={this.props.node.getPort(PortModelAlignment.RIGHT)}
          engine={this.props.engine}
        >
          <PortOut>OP</PortOut>
        </PortWidget>
        <PortWidget
          style={{
            left: 139,
            top: 78,
            position: 'absolute',
          }}
          port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
          engine={this.props.engine}
        >
          <PortOut>OP</PortOut>
        </PortWidget>
        <Title>
          <Logo>
            <img src={require('./settings1.svg')} height={24}></img>
          </Logo>
          Timer
        </Title>

        <Input
          value={this.props.node.value}
          onFocus={() => this.props.node.setLocked(true)}
          onBlur={() => this.props.node.setLocked(false)}
          onChange={(e) => {
            this.props.node.setValue(e.target.value);
            this.props.engine.repaintCanvas();
          }}
        />
        <Select>
          <option value='volvo'>Option 1</option>
          <option value='saab'>Option 2</option>
          <option value='mercedes'>Option 3</option>
          <option value='audi'>Option 4</option>
        </Select>
      </div>
    );
  }
}
