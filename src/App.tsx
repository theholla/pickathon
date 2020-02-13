import React, { Component, ReactElement } from 'react';
import uuid from 'uuid/v4';
import schedule from './lib/master-schedule.json';
import { EventCard } from './components/EventCard';
import { PageHeader } from './components/PageHeader';
import moment from 'moment';

export enum Stage {
  GALAXY_BARN = 'GALAXY_BARN',
  LUCKY_BARN = 'LUCKY_BARN',
  MT_HOOD_STAGE = 'MT_HOOD_STAGE',
  STARLIGHT_STAGE = 'STARLIGHT_STAGE',
  TREELINE_STAGE = 'TREELINE_STAGE',
  WOOD_STAGE = 'WOOD_STAGE',
}

function stageIdFromLocation(location: string): StageId {
  switch (location) {
    case 'Treeline Stage':
      return Stage.TREELINE_STAGE;
    case 'Mt. Hood Stage':
      return Stage.MT_HOOD_STAGE;
    case 'Galaxy Barn':
      return Stage.GALAXY_BARN;
    case 'Starlight Stage':
      return Stage.STARLIGHT_STAGE;
    case 'Lucky Barn':
      return Stage.LUCKY_BARN;
    case 'Woods Stage':
      return Stage.WOOD_STAGE;
    default:
      return Stage.TREELINE_STAGE;
  }
}

interface RawEvent {
  artist: string;
  location: string;
  startTime: string;
  endTime: string;
  endDateTime: string;
  day: string;
  gig: string;
}

export type StageId = keyof typeof Stage;
export type Event = RawEvent & {
  uuid: string;
  isSelected: boolean;
  onClick: () => void;
  stageId: StageId;
};

type EventDictionary = {
  [key: string]: Event;
};

export interface StageFilter {
  GALAXY_BARN: boolean;
  LUCKY_BARN: boolean;
  MT_HOOD_STAGE: boolean;
  STARLIGHT_STAGE: boolean;
  TREELINE_STAGE: boolean;
  WOOD_STAGE: boolean;
}
type SearchParams = string;
interface AppState {
  eventDictionary: EventDictionary;
  stageFilter: StageFilter;
  searchParams: SearchParams;
}

class App extends Component<{}, AppState> {
  constructor(props: object) {
    super(props);

    // enhance event dictionary
    const eventDictionary: EventDictionary = {};
    schedule.forEach((rawEvent: RawEvent): void => {
      const id = uuid();
      const event = {
        uuid: id,
        isSelected: false,
        onClick: this.onEventClick.bind(this, id),
        stageId: stageIdFromLocation(rawEvent.location),
        ...rawEvent,
      };
      eventDictionary[id] = event;
    });

    this.state = {
      eventDictionary,
      searchParams: '',
      stageFilter: {
        GALAXY_BARN: false,
        LUCKY_BARN: false,
        MT_HOOD_STAGE: false,
        STARLIGHT_STAGE: false,
        TREELINE_STAGE: false,
        WOOD_STAGE: false,
      },
    };
  }

  onEventClick(uuid: string): void {
    return this.setState(prevState => {
      const isSelected = prevState.eventDictionary[uuid].isSelected;
      prevState.eventDictionary[uuid].isSelected = !isSelected;
      return prevState;
    });
  }

  handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    return this.setState({ searchParams: e.target.value });
  }

  onStageFilterClick(stageId: StageId): void {
    return this.setState(prevState => {
      const isToggled = prevState.stageFilter[stageId];
      prevState.stageFilter[stageId] = !isToggled;
    });
  }

  doesArtistMatchSearch(artist: string): boolean {
    const searchParams = this.state.searchParams;
    if (searchParams.length >= 2) {
      const name = artist.toLowerCase();
      const params = searchParams.toLowerCase();
      return name.includes(params);
    }
    return false;
  }

  isStageSelected(stageId: StageId): boolean {
    return this.state.stageFilter[stageId];
  }

  isEventTooOld(endDateTime: string): boolean {
    return (
      moment(endDateTime).utc() >
      moment()
        .subtract(1, 'week')
        .utc()
    );
  }

  toEventArray(eventDictionary: EventDictionary): Array<Event> {
    return Object.values(eventDictionary);
  }

  renderEmptyState(): ReactElement {
    return <p className={'results-empty'}>Nothing to see here. Did you select a stage name?</p>;
  }

  render() {
    const eventArray = this.toEventArray(this.state.eventDictionary)
      .filter(event => this.isStageSelected(event.stageId))
      .filter(event => this.isEventTooOld(event.endDateTime))
      .map(details => EventCard(details));

    const searchResultsArray = this.toEventArray(this.state.eventDictionary)
      .filter(event => this.doesArtistMatchSearch(event.artist))
      .filter(event => this.isEventTooOld(event.endDateTime))
      .map(details => EventCard(details));

    return (
      <div>
        <PageHeader onStageFilterClick={this.onStageFilterClick.bind(this)} stageFilter={this.state.stageFilter} />
        <div>
          <form>
            <label className={'search-container'}>
              <input
                className={'search-input'}
                type="text"
                placeholder="filter by artist"
                onChange={this.handleSearchChange.bind(this)}
              />
            </label>
          </form>
        </div>
        <div className={'results'}>
          {searchResultsArray.length ? searchResultsArray : eventArray}
          {!eventArray.length && !searchResultsArray.length && this.renderEmptyState()}
        </div>
      </div>
    );
  }
}

export default App;
