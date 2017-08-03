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
    const { onStageFilterClick } = props
    const { buttonBarStyle } = styles

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
                <Button className={'galaxy stageButton'}
                    onClick={() => onStageFilterClick(GALAXY_BARN)} />
                <Button className={'lucky stageButton'}
                    onClick={() => onStageFilterClick(LUCKY_BARN)} />
                <Button className={'mthood stageButton'}
                    onClick={() => onStageFilterClick(MT_HOOD_STAGE)} />
                <Button className={'starlight stageButton'}
                    onClick={() => onStageFilterClick(STARLIGHT_STAGE)} />
                <Button className={'treeline stageButton'}
                    onClick={() => onStageFilterClick(TREELINE_STAGE)} />
                <Button className={'wood stageButton'}
                    onClick={() => onStageFilterClick(WOOD_STAGE)} />
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