import React from 'react';

export function Event(props) {
    const {
        artist,
        ageLimit,
        location,
        startTime,
        endTime,
        day,
        gig,
        onClick,
        isSelected
    } = props;

    function getStyles() {
      const { selectedStyle } = styles
      if (isSelected) {
        return selectedStyle
      }
    }
    return (
        <p style={getStyles(isSelected)} onClick={onClick}>
            {artist}<br/>
            {startTime} - {endTime}<br/>
            Gig: {gig}
        </p>
    )
}

const styles = {
  selectedStyle: {
    backgroundColor: 'red'
  }
}
