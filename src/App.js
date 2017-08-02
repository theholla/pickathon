import React, { Component } from 'react';
import schedule from './masterschedule.json';
import { Row, Col } from 'react-bootstrap';
import { Event } from './components/Event';
import uuid from 'uuid/v4';

class App extends Component {
    getInitialState(schedule) {
        return schedule.map(event => {
            event.uuid = uuid()
            return event
        })
    }
    constructor(props) {
        super(props)
        const newSchedule = this.getInitialState(schedule)
        this.state = { schedule: newSchedule }
    }

    render() {
        const { schedule } = this.state
        return (
            <div>
                <div>
                    Lil' Sched
                </div>
                {schedule.map(details => Event(details))}
            </div>
        )
    }
}

export default App;
