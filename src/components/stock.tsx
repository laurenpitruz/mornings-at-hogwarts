import React, { Fragment, useState, FormEvent} from 'react'
import { gql, useQuery } from '@apollo/client';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import Loading from './loading'
import Error from './error'

interface StockProps {
  ticker: string
  removeStock: (e: FormEvent<HTMLFormElement>) => void
}

const GET_STOCK = gql`
  query GetStock($ticker: String!) {
    stock(ticker: $ticker) {
      symbol
      companyName
      CEO
      description
      currentQuote {
        peRatio
        latestPrice
        marketCap
      }
    }
  }
`

export default function Stock ({ ticker, removeStock }: StockProps) {
  const [showModal, setShowModal] = useState(false)
  const toggle = () => setShowModal(!showModal)

  const { data, loading, error } = useQuery(GET_STOCK, {
    variables: { ticker }
  })

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return <h1>Not Found</h1>

  return (
    <Fragment>
      <div className="stock-div">
        <h5>
          <Button value={ticker} onClick={removeStock} className="btn-small red">x</Button>
          {/* <Button value={ticker} onClick={removeStock} className="btn-small">x</Button> */}
          <Button
          variant="outline-primary"
          onClick={toggle}
          className="btn-small"
        >
          More
        </Button> <strong>{data.stock.symbol}</strong>: {data.stock.companyName}</h5>
        <h6>Latest Price: {data.stock.currentQuote.latestPrice}</h6>
        <small>P/E Ratio: {data.stock.currentQuote.peRatio}</small> | <small>Market Cap: {data.stock.currentQuote.marketCap}</small>
      </div>
      <Modal
        size="lg"
        isOpen={showModal}
        toggle={toggle}
      >
        <ModalHeader>
          <strong>{data.stock.symbol}:</strong> {data.stock.companyName}
        </ModalHeader>
        <ModalBody>
          <p>CEO: {data.stock.CEO}</p>
          <p>Description: {data.stock.description}</p>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}
