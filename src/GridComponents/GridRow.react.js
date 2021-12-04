import './styles/GridRow.css';
import React from 'react';
import GridCell from './GridCell.react.js';

export default function GridRow(props: Props) {
    return (
      <div className="GridRow">
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
          <GridCell covered={true} />
      </div>
    );
}