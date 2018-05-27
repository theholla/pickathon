import React from 'react';
import {
  GALAXY_BARN,
  LUCKY_BARN,
  MT_HOOD_STAGE,
  STARLIGHT_STAGE,
  TREELINE_STAGE,
  WOOD_STAGE
} from '../lib/constants';

export function PageHeader(props) {
  const { onStageFilterClick, stageFilter } = props;

  function isOn(stageId) {
    if (stageFilter[stageId]) {
      return ' show-stage';
    }
    return '';
  }

  return (
    <div>
      <div>
        <div>
          <div>Pickathon Quick Sched</div>
        </div>
      </div>
      <div>
        <div className={'stage-button-bar'}>
          <button
            className={'galaxy stage-button' + isOn(GALAXY_BARN)}
            onClick={() => onStageFilterClick(GALAXY_BARN)}
          >
            Galaxy
          </button>
          <button
            className={'lucky stage-button' + isOn(LUCKY_BARN)}
            onClick={() => onStageFilterClick(LUCKY_BARN)}
          >
            Lucky
          </button>
          <button
            className={'mthood stage-button' + isOn(MT_HOOD_STAGE)}
            onClick={() => onStageFilterClick(MT_HOOD_STAGE)}
          >
            Hood
          </button>
          <button
            className={'starlight stage-button' + isOn(STARLIGHT_STAGE)}
            onClick={() => onStageFilterClick(STARLIGHT_STAGE)}
          >
            Star
          </button>
          <button
            className={'treeline stage-button' + isOn(TREELINE_STAGE)}
            onClick={() => onStageFilterClick(TREELINE_STAGE)}
          >
            Tree
          </button>
          <button
            className={'wood stage-button' + isOn(WOOD_STAGE)}
            onClick={() => onStageFilterClick(WOOD_STAGE)}
          >
            Wood
          </button>
        </div>
      </div>
    </div>
  );
}
