import React from 'react';

interface SearchBarProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function SearchBar(props: SearchBarProps): JSX.Element {
  return (
    <form>
      <label className={'search-container'}>
        <input className={'search-input'} type="text" placeholder="filter by artist" onChange={props.onSearch} />
      </label>
    </form>
  );
}
