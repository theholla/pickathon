import React from 'react'
import { Navbar, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import {
    GALAXY_BARN,
    LUCKY_BARN,
    MT_HOOD_STAGE,
    STARLIGHT_STAGE,
    TREELINE_STAGE,
    WOOD_STAGE,
} from '../colorConstants'

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
                <Button style={{...galaxyStyle, ...button}}></Button>
                <Button style={{...luckyStyle, ...button}}></Button>
                <Button style={{...mtHoodStyle, ...button}}></Button>
                <Button style={{...starlightStyle, ...button}}></Button>
                <Button style={{...treelineStyle, ...button}}></Button>
                <Button style={{...woodStyle, ...button}}></Button>
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
        backgroundColor: GALAXY_BARN,
    },
    luckyStyle: {
        backgroundColor: LUCKY_BARN,
    },
    mtHoodStyle: {
        backgroundColor: MT_HOOD_STAGE,
    },
    starlightStyle: {
        backgroundColor: STARLIGHT_STAGE,
    },
    treelineStyle: {
        backgroundColor: TREELINE_STAGE,
    },
    woodStyle: {
        backgroundColor: WOOD_STAGE,
    }
}