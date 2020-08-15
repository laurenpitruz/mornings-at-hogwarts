import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client'

import NewsItem from './newsitem'
import Loading from './loading'
import Error from './error'

interface NewsArr {
  author: string;
  title: string;
  description: string;
  content: string;
}

interface NewsData {
  news: NewsArr[];
}

const GET_NEWS = gql`
  query GetNews {
    news {
      author
      title
      description
      content
    }
  }
`

export default function News () {
  const { data, loading, error } = useQuery<NewsData>(GET_NEWS)

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return <h1>Not found</h1>

  return (
    <Fragment>
      {data.news.map((article, index: number) => (
        <NewsItem article={article} />
      ))}
    </Fragment>
  )
}
