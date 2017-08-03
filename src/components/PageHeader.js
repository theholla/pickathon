import React from 'react'
import { Navbar, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import {
    GALAXY_BARN,
    LUCKY_BARN,
    MT_HOOD_STAGE,
    STARLIGHT_STAGE,
    TREELINE_STAGE,
    WOOD_STAGE,
} from '../constants'

export function PageHeader(props) {
    const { buttonBarStyle } = styles
    const { onStageFilterClick, stageFilter } = props

    function isOn(stageId) {
        if (stageFilter[stageId]) {
            return ' showStage'
        }
        return
    }

    return (<Navbar fixedTop>
        <Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Brand>
                    Pickathon Lil Sched
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar.Header>
        <Navbar.Form>
            <FormGroup style={buttonBarStyle} className={'stageButtonBar'}>
                <Button className={'galaxy stageButton' + isOn(GALAXY_BARN)}
                    onClick={() => onStageFilterClick(GALAXY_BARN)} >glxy</Button>
                <Button className={'lucky stageButton' + isOn(LUCKY_BARN)}
                    onClick={() => onStageFilterClick(LUCKY_BARN)} >lcky</Button>
                <Button className={'mthood stageButton' + isOn(MT_HOOD_STAGE)}
                    onClick={() => onStageFilterClick(MT_HOOD_STAGE)} >hood</Button>
                <Button className={'starlight stageButton' + isOn(STARLIGHT_STAGE)}
                    onClick={() => onStageFilterClick(STARLIGHT_STAGE)} >star</Button>
                <Button className={'treeline stageButton' + isOn(TREELINE_STAGE)}
                    onClick={() => onStageFilterClick(TREELINE_STAGE)} >tree</Button>
                <Button className={'wood stageButton' + isOn(WOOD_STAGE)}
                    onClick={() => onStageFilterClick(WOOD_STAGE)} >wood</Button>
            </FormGroup>
        </Navbar.Form>
    </Navbar>)
}

const styles = {
    buttonBarStyle: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    }
}
