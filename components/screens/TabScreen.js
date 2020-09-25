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

const TabScreen = () => {
  const sources = ['BBC', 'Bloomberg', 'TechCrunch']
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
            heading={source}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
          ></Tab>
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
