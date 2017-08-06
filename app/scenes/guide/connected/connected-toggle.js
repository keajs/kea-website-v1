import React, { Component } from 'react'
import { connect } from 'kea'

import featuresLogic from '../features-logic'

@connect({
  actions: [
    featuresLogic, [
      'toggleFeature'
    ]
  ],
  props: [
    featuresLogic, [
      'features'
    ]
  ]
})
export default class ConnectedToggle extends Component {
  render () {
    const { features } = this.props
    const { toggleFeature } = this.actions

    return (
      <div>
        <p>{features.something ? 'Something enabled' : 'Something disabled'}</p>
        <button onClick={() => toggleFeature('something')}>Toggle something</button>
      </div>
    )
  }
}