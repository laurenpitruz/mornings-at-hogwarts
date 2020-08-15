import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';


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
  const { data, loading, error } = useQuery(GET_NEWS)
  return (
    <Fragment>
      <h1>News</h1>
      {data ? data.news.map((article, index) => (
        <div key={index}>
          <p>{article.title}</p>
        </div>
      )) : <h2>No data</h2>}
    </Fragment>
  )
}
