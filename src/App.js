import React, { Component } from 'react';
import schedule from './masterschedule.json';
import { Row, Col } from 'react-bootstrap';
import { Event } from './components/Event';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    Lil' Sched
                    <p>
                        Thursday Events:
                    </p>
                </div>
                {schedule
                    .filter(details => details.day === 'Thursday')
                    .map(details => Event(details))}
            </div>
        );
    }
}

export default App;
