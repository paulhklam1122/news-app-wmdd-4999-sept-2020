import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Body,
  Container,
  Header,
  Left,
  Right,
  Tabs,
  Title,
  Tab
} from 'native-base'
import TabContentContainer from '../container/TabContentContainer'

const TabScreen = () => {
  const sources = [
    { name: 'BBC', id: 'bbc-news' },
    { name: 'Bloomberg', id: 'bloomberg' },
    { name: 'TechCrunch', id: 'techcrunch' }
  ]

  return (
    <Container>
      <Header style={styles.header} hasTabs>
        <Left />
        <Body>
          <Title style={styles.title}>News App</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={styles.tabs}>
        {sources.map((source, index) => (
          <Tab
            key={index}
            heading={source.name}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
          >
            <TabContentContainer source={source.id} />
          </Tab>
        ))}
      </Tabs>
    </Container>
  )
}

export default TabScreen

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3dabd3'
  },
  tabs: {
    backgroundColor: 'white'
  },
  title: {
    color: 'white'
  },
  tabStyle: {
    backgroundColor: '#3dabd3'
  },
  activeTabStyle: {
    backgroundColor: '#3dabd3'
  },
  tabText: {
    color: 'white'
  }
})
