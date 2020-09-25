import React, { Component } from 'react'
import { View, Text } from 'react-native'

import TabContent from '../Tabs/TabContent'

class TabContentContainer extends Component {
  state = {
    articles: [],
    isLoading: true,
    source: this.props.source || 'bbc-news'
  }

  render() {
    return <TabContent />
  }
}

export default TabContentContainer
