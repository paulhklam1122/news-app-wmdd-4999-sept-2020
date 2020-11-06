import React, { useState, useEffect } from 'react'
import { Alert, Share } from 'react-native'

import { getArticles } from '../../service/api'
import TabContent from '../Tabs/TabContent'

const TabContentContainer = props => {
  const { source } = props
  const [articleData, setArticleData] = useState({})
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [newsSource] = useState(source || 'bbc-news')

  useEffect(() => {
    fetchNews(newsSource)
  })

  fetchNews = async source => {
    getArticles(source).then(
      articles => {
        setArticles(articles)
        setIsLoading(false)
      },
      error => {
        Alert.alert('Error', `Something went wrong! ${error}`)
      }
    )
  }

  // Handler Functions

  handleArticlePress = ({ title, url }) => {
    setModalVisible(true)
    setArticleData({ title, url })
  }

  handleArticleModalClose = () => {
    setModalVisible(false)
    setArticleData({})
  }

  handleArticleShare = (title, url) => {
    const message = `${title}\n\nRead More @${url}\n\\n Shared via RN News App`
    return Share.share(
      {
        title,
        message,
        url: message
      },
      {
        dialogTitle: `Share ${title}`
      }
    )
  }

  return (
    <TabContent
      articles={articles}
      articleData={articleData}
      isLoading={isLoading}
      onArticlePress={handleArticlePress}
      onArticleModalClose={handleArticleModalClose}
      onArticleShare={handleArticleShare}
      modalVisible={modalVisible}
    />
  )
}

export default TabContentContainer
