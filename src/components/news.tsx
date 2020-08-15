import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';

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
  return (
    <Fragment>
      {data ? data.news.map((article, index: number) => (
        <div key={index}>
          <p>{article.title}</p>
        </div>
      )) : <h2>No data</h2>}
    </Fragment>
  )
}
