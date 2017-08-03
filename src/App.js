import React, { Component } from 'react';
import schedule from './masterschedule.json';
import { Row, Col } from 'react-bootstrap';
import { Event } from './components/Event';
import uuid from 'uuid/v4';

class App extends Component {
    constructor(props) {
        super(props)
        const eventDictionary = {}
        const eventArray = schedule.map(event => {
            const id = uuid()
            event.uuid = id
            event.isSelected = false
            event.onClick = this.onEventClick.bind(this, id)
            eventDictionary[id] = event
            return event
        })
        this.state = { eventDictionary }
    }

    getScheduleArray(eventDictionary) {
        return Object.values(eventDictionary)
    }

    onEventClick(eventUuid) {
        this.setState(prevState => {
            console.log(prevState)
            const isSelected = prevState.eventDictionary[eventUuid].isSelected
            prevState.eventDictionary[eventUuid].isSelected = !isSelected
            return prevState
        })
    }

    toEventArray(eventDictionary) {
        return Object.values(eventDictionary)
    }

    render() {
        const { eventDictionary } = this.state
        const eventArray = this.toEventArray(eventDictionary)
        console.log(eventArray)
        return (
            <div>
                <div>
                    Lil' Sched
                </div>
                {eventArray.map(details => Event(details))}
            </div>
        )
    }
}

export default App;
