import React from 'react'
import { Container, List } from 'native-base'
import { StyleSheet } from 'react-native'

import Article from '../Article'

const TabContent = props => {
  const { articles, articleData, isLoading } = props
  const renderArticles = () => (
    <List
      dataArray={articles}
      renderRow={article => {
        return <Article />
      }}
    ></List>
  )
  return <Container></Container>
}
