import React from 'react';
import { StageFilter, Stage, StageId } from '../App';
import { Hero } from '.';

type PageHeaderProps = {
  onStageFilterClick: (stageId: StageId) => void;
  stageFilter: StageFilter;
};
export function PageHeader(props: PageHeaderProps) {
  const { onStageFilterClick, stageFilter } = props;

  function isOn(stageId: Stage) {
    if (stageFilter[stageId]) {
      return ' show-stage';
    }
    return '';
  }

  return (
    <div>
      <Hero />
      <div>
        <div className={'stage-button-bar'}>
          <button
            className={'galaxy stage-button' + isOn(Stage.GALAXY_BARN)}
            onClick={() => onStageFilterClick(Stage.GALAXY_BARN)}
          >
            Galaxy
          </button>
          <button
            className={'lucky stage-button' + isOn(Stage.LUCKY_BARN)}
            onClick={() => onStageFilterClick(Stage.LUCKY_BARN)}
          >
            Lucky
          </button>
          <button
            className={'mthood stage-button' + isOn(Stage.MT_HOOD_STAGE)}
            onClick={() => onStageFilterClick(Stage.MT_HOOD_STAGE)}
          >
            Hood
          </button>
          <button
            className={'starlight stage-button' + isOn(Stage.STARLIGHT_STAGE)}
            onClick={() => onStageFilterClick(Stage.STARLIGHT_STAGE)}
          >
            Star
          </button>
          <button
            className={'treeline stage-button' + isOn(Stage.TREELINE_STAGE)}
            onClick={() => onStageFilterClick(Stage.TREELINE_STAGE)}
          >
            Tree
          </button>
          <button
            className={'wood stage-button' + isOn(Stage.WOOD_STAGE)}
            onClick={() => onStageFilterClick(Stage.WOOD_STAGE)}
          >
            Wood
          </button>
        </div>
      </div>
    </div>
  );
}
