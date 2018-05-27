import React from 'react';
import { Navbar, Button, FormGroup } from 'react-bootstrap';
import {
  GALAXY_BARN,
  LUCKY_BARN,
  MT_HOOD_STAGE,
  STARLIGHT_STAGE,
  TREELINE_STAGE,
  WOOD_STAGE
} from '../constants';

export function PageHeader(props) {
  const { onStageFilterClick, stageFilter } = props;

  function isOn(stageId) {
    if (stageFilter[stageId]) {
      return ' show-stage';
    }
    return '';
  }

  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Brand>Pickathon Quick Sched</Navbar.Brand>
        </Navbar.Collapse>
      </Navbar.Header>
      <Navbar.Form>
        <FormGroup className={'stage-button-bar'}>
          <Button
            className={'galaxy stage-button' + isOn(GALAXY_BARN)}
            onClick={() => onStageFilterClick(GALAXY_BARN)}
          >
            Galaxy
          </Button>
          <Button
            className={'lucky stage-button' + isOn(LUCKY_BARN)}
            onClick={() => onStageFilterClick(LUCKY_BARN)}
          >
            Lucky
          </Button>
          <Button
            className={'mthood stage-button' + isOn(MT_HOOD_STAGE)}
            onClick={() => onStageFilterClick(MT_HOOD_STAGE)}
          >
            Hood
          </Button>
          <Button
            className={'starlight stage-button' + isOn(STARLIGHT_STAGE)}
            onClick={() => onStageFilterClick(STARLIGHT_STAGE)}
          >
            Star
          </Button>
          <Button
            className={'treeline stage-button' + isOn(TREELINE_STAGE)}
            onClick={() => onStageFilterClick(TREELINE_STAGE)}
          >
            Tree
          </Button>
          <Button
            className={'wood stage-button' + isOn(WOOD_STAGE)}
            onClick={() => onStageFilterClick(WOOD_STAGE)}
          >
            Wood
          </Button>
        </FormGroup>
      </Navbar.Form>
    </Navbar>
  );
}
