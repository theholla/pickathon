import React, { ReactElement } from 'react';
import { Performance } from '../App';
import { EventCard } from '.';

interface ResultsProps {
  performances: Array<Performance>;
  searchResults: Array<Performance>;
}

function renderEmptyState(): ReactElement {
  return <p className={'results-empty'}>Nothing to see here. Did you select a stage name?</p>;
}

export function Results(props: ResultsProps) {
  const { performances, searchResults } = props;
  return (
    <div className={'results'}>
      {searchResults.length
        ? searchResults.map(details => EventCard(details))
        : performances.map(details => EventCard(details))}
      {!performances.length && !searchResults.length && renderEmptyState()}
    </div>
  );
}
