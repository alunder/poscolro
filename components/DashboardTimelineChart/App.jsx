/* eslint-disable import/no-unresolved */
import React, { Component,useState } from 'react'
import Timeline from 'react-timelines'

import 'react-timelines/lib/css/style.css'
import './index.css';
import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS } from './constants'

import { buildTimebar, buildTrack } from './builders'

import { fill } from './utils';

const timebar = buildTimebar()


const TimelineChart =()=> {
  const [tracks, setTracks] = useState(Object.values(fill(NUM_OF_TRACKS).reduce((acc, i) => {
    const track = buildTrack(i + 1)
    acc[track.id] = track
    return acc
  }, {})));

    //const {  tracks } = this.state
    const zoom = 2;
    const start = new Date(`${START_YEAR}`)
    const end = new Date(`${START_YEAR + NUM_OF_YEARS}`)
    return (
      <div className="app">
        <Timeline
          scale={{
            start,
            end,
            zoom,
          }}
          timebar={timebar}
          tracks={tracks}
        />
      </div>
    )

}

export default TimelineChart
