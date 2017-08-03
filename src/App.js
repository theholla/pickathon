import React, { Component } from 'react';
import schedule from './masterschedule.json';
import { Row, Col } from 'react-bootstrap';
import { Event } from './components/Event';
import uuid from 'uuid/v4';
import { PageHeader } from './components/PageHeader';

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
            eventDictionary[id] = event
        })

        this.state = { eventDictionary }
    }

    onEventClick(uuid) {
        this.setState(prevState => {
            const isSelected = prevState.eventDictionary[uuid].isSelected
            prevState.eventDictionary[uuid].isSelected = !isSelected
            return prevState
        })
    }

    toEventArray(eventDictionary) {
        return Object.values(eventDictionary)
    }

    render() {
        const eventArray = this.toEventArray(this.state.eventDictionary)
        const { pageBody } = styles

        return (
            <div>
                <PageHeader />
                <Row style={pageBody}>
                    <Col sm={0} md={3}></Col>
                    <Col sm={12} md={6}>
                        {eventArray.map(details => Event(details))}
                    </Col>
                    <Col sm={0} md={3}></Col>
                </Row>
            </div>
        )
    }
}

const styles = {
    pageBody: {
        marginTop: 100
    }
}

export default App
