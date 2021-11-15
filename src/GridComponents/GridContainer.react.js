import './styles/GridContainer.css';
import GridCell from './GridCell.react';

export default function GridContainer() {
  return (
    <div className="GridContainer">
      <GridCell covered={true} />
      <GridCell covered={false} />
    </div>
  );
}