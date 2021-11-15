import './styles/GridCell.css';
import React from 'react';
import CoveredCell from './CoveredCell.react';
import UncoveredCell from './UncoveredCell.react';

type Props = {
    covered: Boolean;
}

export default function GridCell(props: Props) {
    const {covered} = props;

    return (
      <div className="GridCell">
        {covered ? <CoveredCell /> : <UncoveredCell />}
      </div>
    );
}