import React from 'react'
import { Navbar, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import {
    GALAXY_BARN_COLOR,
    LUCKY_BARN_COLOR,
    MT_HOOD_STAGE_COLOR,
    STARLIGHT_STAGE_COLOR,
    TREELINE_STAGE_COLOR,
    WOOD_STAGE_COLOR,
    GALAXY_BARN,
    LUCKY_BARN,
    MT_HOOD_STAGE,
    STARLIGHT_STAGE,
    TREELINE_STAGE,
    WOOD_STAGE,
} from '../constants'

export function PageHeader(props) {
    const {
        buttonBarStyle,
        button,
        galaxyStyle,
        luckyStyle,
        mtHoodStyle,
        starlightStyle,
        treelineStyle,
        woodStyle,
    } = styles

    const { onStageFilterClick } = props

    return (<Navbar fixedTop>
        <Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Brand>
                    Pickathon Lil Sched
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar.Header>
        <Navbar.Form>
            <FormGroup style={buttonBarStyle}>
                <Button style={{...galaxyStyle, ...button}}
                    onClick={() => onStageFilterClick(GALAXY_BARN)} />
                <Button style={{...luckyStyle, ...button}}
                    onClick={() => onStageFilterClick(LUCKY_BARN)} />
                <Button style={{...mtHoodStyle, ...button}}
                    onClick={() => onStageFilterClick(MT_HOOD_STAGE)} />
                <Button style={{...starlightStyle, ...button}}
                    onClick={() => onStageFilterClick(STARLIGHT_STAGE)} />
                <Button style={{...treelineStyle, ...button}}
                    onClick={() => onStageFilterClick(TREELINE_STAGE)} />
                <Button style={{...woodStyle, ...button}}
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
    },
    button: {
        flex: 1,
        padding: '1em',
        margin: '.2em',
    },
    galaxyStyle: {
        backgroundColor: GALAXY_BARN_COLOR,
    },
    luckyStyle: {
        backgroundColor: LUCKY_BARN_COLOR,
    },
    mtHoodStyle: {
        backgroundColor: MT_HOOD_STAGE_COLOR,
    },
    starlightStyle: {
        backgroundColor: STARLIGHT_STAGE_COLOR,
    },
    treelineStyle: {
        backgroundColor: TREELINE_STAGE_COLOR,
    },
    woodStyle: {
        backgroundColor: WOOD_STAGE_COLOR,
    }
}
