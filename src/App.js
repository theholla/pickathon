import React, { Component } from 'react';
import uuid from 'uuid/v4';
import schedule from './lib/master-schedule.json';
import { Event } from './components/Event';
import { PageHeader } from './components/PageHeader';
import moment from 'moment';
import { GALAXY_BARN, LUCKY_BARN, MT_HOOD_STAGE, STARLIGHT_STAGE, TREELINE_STAGE, WOOD_STAGE } from './lib/constants';

function mapLocationToStageId(location) {
  switch (location) {
    case 'Treeline Stage':
      return TREELINE_STAGE;
    case 'Mt. Hood Stage':
      return MT_HOOD_STAGE;
    case 'Galaxy Barn':
      return GALAXY_BARN;
    case 'Starlight Stage':
      return STARLIGHT_STAGE;
    case 'Lucky Barn':
      return LUCKY_BARN;
    case 'Woods Stage':
      return WOOD_STAGE;
    default:
      return undefined;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    // enhance event dictionary
    const eventDictionary = {};
    schedule.forEach(event => {
      const id = uuid();
      event.uuid = id;
      event.isSelected = false;
      event.onClick = this.onEventClick.bind(this, id);
      event.stageId = mapLocationToStageId(event.location);
      eventDictionary[id] = event;
    });

    const stageFilter = {
      GALAXY_BARN: false,
      LUCKY_BARN: false,
      MT_HOOD_STAGE: false,
      STARLIGHT_STAGE: false,
      TREELINE_STAGE: false,
      WOOD_STAGE: false,
    };

    const searchParams = '';

    this.state = {
      eventDictionary,
      stageFilter,
      searchParams,
    };
  }

  onEventClick(uuid) {
    this.setState(prevState => {
      const isSelected = prevState.eventDictionary[uuid].isSelected;
      prevState.eventDictionary[uuid].isSelected = !isSelected;
      return prevState;
    });
  }

  handleSearchChange(event) {
    this.setState({ searchParams: event.target.value });
  }

  onStageFilterClick(stage) {
    this.setState(prevState => {
      const isToggled = prevState.stageFilter[stage];
      prevState.stageFilter[stage] = !isToggled;
    });
  }

  filterStages(stageId) {
    return this.state.stageFilter[stageId];
  }

  filterSearchParams(artist) {
    const searchParams = this.state.searchParams;
    if (searchParams.length >= 2) {
      const name = artist.toLowerCase();
      const params = searchParams.toLowerCase();
      return name.includes(params);
    }
  }

  toEventArray(eventDictionary) {
    return Object.values(eventDictionary);
  }

  renderEmptyState(eventArray, searchResultsArray) {
    if (!eventArray.length && !searchResultsArray.length) {
      return <p>Click a stage name to filter events by stage</p>;
    }
  }

  filterOutOldEvents(endDateTime) {
    return (
      moment(endDateTime).utc() >
      moment()
        .subtract(1, 'week')
        .utc()
    );
  }

  render() {
    const eventArray = this.toEventArray(this.state.eventDictionary)
      .filter(event => this.filterStages(event.stageId))
      .filter(event => this.filterOutOldEvents(event.endDateTime))
      .map(details => Event(details));
    const searchResultsArray = this.toEventArray(this.state.eventDictionary)
      .filter(event => this.filterSearchParams(event.artist))
      .filter(event => this.filterOutOldEvents(event.endDateTime))
      .map(details => Event(details));

    return (
      <div>
        <PageHeader onStageFilterClick={this.onStageFilterClick.bind(this)} stageFilter={this.state.stageFilter} />
        <div>
          <form>
            <label className={'search-container'}>
              <input
                className={'search-input'}
                type="text"
                placeholder="search by artist"
                onChange={this.handleSearchChange.bind(this)}
              />
            </label>
          </form>
        </div>
        <div>
          {searchResultsArray.length ? searchResultsArray : eventArray}
          {this.renderEmptyState(eventArray, searchResultsArray)}
        </div>
      </div>
    );
  }
}

export default App;
