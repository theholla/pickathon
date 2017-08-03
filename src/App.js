import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import uuid from 'uuid/v4'
import schedule from './masterschedule.json'
import { Event } from './components/Event'
import { PageHeader } from './components/PageHeader'
import {
    GALAXY_BARN,
    LUCKY_BARN,
    MT_HOOD_STAGE,
    STARLIGHT_STAGE,
    TREELINE_STAGE,
    WOOD_STAGE,
} from './constants'

function mapLocationToStageId(location) {
    switch(location) {
        case 'Treeline Stage': return TREELINE_STAGE
        case 'Mt. Hood Stage': return MT_HOOD_STAGE
        case 'Galaxy Barn': return GALAXY_BARN
        case 'Starlight Stage': return STARLIGHT_STAGE
        case 'Lucky Barn': return LUCKY_BARN
        case 'Woods Stage': return WOOD_STAGE
        default: return undefined
    }
}

class App extends Component {
    constructor(props) {
        super(props)

        // enhance event dictionary
        const eventDictionary = {}
        schedule.forEach(event => {
            const id = uuid()
            event.uuid = id
            event.isSelected = false
            event.onClick = this.onEventClick.bind(this, id)
            event.stageId = mapLocationToStageId(event.location)
            eventDictionary[id] = event
        })

        const stageFilter = {
            GALAXY_BARN: true,
            LUCKY_BARN: false,
            MT_HOOD_STAGE: false,
            STARLIGHT_STAGE: false,
            TREELINE_STAGE: false,
            WOOD_STAGE: false,
        }

        this.state = {
            eventDictionary,
            stageFilter,
        }
    }

    onEventClick(uuid) {
        this.setState(prevState => {
            const isSelected = prevState.eventDictionary[uuid].isSelected
            prevState.eventDictionary[uuid].isSelected = !isSelected
            return prevState
        })
    }

    onStageFilterClick(stage) {
        this.setState(prevState => {
            const isToggled = prevState.stageFilter[stage]
            prevState.stageFilter[stage] = !isToggled
        })
    }

    filterStages(stageId) {
        return this.state.stageFilter[stageId]
    }

    toEventArray(eventDictionary) {
        return Object.values(eventDictionary)
    }

    render() {
        const eventArray = this.toEventArray(this.state.eventDictionary)

        return (
            <div>
                <PageHeader onStageFilterClick={this.onStageFilterClick.bind(this)} stageFilter={this.state.stageFilter} />
                <Row className={'page-content'}>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        {eventArray
                            .filter(event => this.filterStages(event.stageId))
                            .map(details => Event(details))}
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </div>
        )
    }
}

export default App
