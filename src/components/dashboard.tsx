import React, { useState, FormEvent, ChangeEvent } from 'react'
import Stock from './stock'
import Weather from './weather'
import News from './news'
import { Form, Input, Button } from 'reactstrap'

export default function Dashboard () {
  //tickers & next ticker
  const [tickers, setTickers] = useState(['AMZN', 'TSLA'])
  const [nextStock, setNextStock] = useState('')

  //current weather zip
  const [zip, setZip] = useState('10003')
  const [nextZip, setNextZip] = useState('')

  const handleStockChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNextStock(e.currentTarget.value)
  }

  const handleZipChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNextZip(e.currentTarget.value)
  }

  const addStock = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTickers([nextStock, ...tickers])
    setNextStock('')
  }
  const resetZip = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setZip(`${nextZip}`)
    setNextZip('')
  }

  return (
    <div className="dashboard">
      <div className="stocks dashboard-column">
        <h1>Stocks</h1>
        <Form inline onSubmit={addStock}>
          <Input value={nextStock} onChange={handleStockChange}/>
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
        <Form inline onSubmit={resetZip}>
          <Input value={nextZip} onChange={handleZipChange}/>
          <Button type="submit">Set Zip</Button>
        </Form>
        <Weather zip={zip} />
      </div>
      <div className="news dashboard-column">
        <h1>Latest News</h1>
        <News />
      </div>
    </div>
  )
}
