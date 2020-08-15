import React, { useState, MouseEvent } from 'react'
import Stock from './stock'
import Weather from './weather'
import News from './news'
import { Form, Input, Button } from 'reactstrap'

export default function Dashboard () {
  const [zip, setZip] = useState('10003')
  const [tickers, setTickers] = useState(['AMZN', 'TSLA'])

  // const handleStockChange = (event: MouseEvent) => console.log(event)
  // const addStock = (event: MouseEvent) => console.log('event', event)

  return (
    <div className="dashboard">
      <div className="stocks dashboard-column">
        <h1>Stocks</h1>
        <Form inline>
          <Input />
          <Button type="submit">Add</Button>
        </Form>
        {tickers && tickers.map((ticker, index) => (
          <div key={index}>
            <Stock ticker={ticker} />
          </div>
        ))}
      </div>
      <div className="weather dashboard-column">
        <h1>Current Weather</h1>
        <Form inline>
          <Input />
          <Button type="submit">Set Zip</Button>
        </Form>
        <Weather />
      </div>
      <div className="news dashboard-column">
        <h1>Latest News</h1>
        <News />
      </div>
    </div>
  )
}
