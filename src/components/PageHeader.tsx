import React from 'react';
import { StageFilter, Stage, StageId } from '../App';
import { Hero } from '.';

type PageHeaderProps = {
  onStageFilterClick: (stageId: StageId) => void;
  stageFilter: StageFilter;
};
export function PageHeader(props: PageHeaderProps): JSX.Element {
  const { onStageFilterClick, stageFilter } = props;

  function getButtonClass(stageId: Stage): string {
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
            className={'galaxy stage-button' + getButtonClass(Stage.GALAXY_BARN)}
            onClick={(): void => onStageFilterClick(Stage.GALAXY_BARN)}
          >
            Galaxy
          </button>
          <button
            className={'lucky stage-button' + getButtonClass(Stage.LUCKY_BARN)}
            onClick={(): void => onStageFilterClick(Stage.LUCKY_BARN)}
          >
            Lucky
          </button>
          <button
            className={'mthood stage-button' + getButtonClass(Stage.MT_HOOD_STAGE)}
            onClick={(): void => onStageFilterClick(Stage.MT_HOOD_STAGE)}
          >
            Hood
          </button>
          <button
            className={'starlight stage-button' + getButtonClass(Stage.STARLIGHT_STAGE)}
            onClick={(): void => onStageFilterClick(Stage.STARLIGHT_STAGE)}
          >
            Star
          </button>
          <button
            className={'treeline stage-button' + getButtonClass(Stage.TREELINE_STAGE)}
            onClick={(): void => onStageFilterClick(Stage.TREELINE_STAGE)}
          >
            Tree
          </button>
          <button
            className={'wood stage-button' + getButtonClass(Stage.WOOD_STAGE)}
            onClick={(): void => onStageFilterClick(Stage.WOOD_STAGE)}
          >
            Wood
          </button>
        </div>
      </div>
    </div>
  );
}
