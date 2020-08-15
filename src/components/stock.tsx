import React, { Fragment, useState} from 'react'
import { gql, useQuery } from '@apollo/client';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import Loading from './loading'
import Error from './error'

// interface CurrentQuote {
//   peRatio: number;
// }

// interface Stock {
//   symbol: string;
//   companyName: string;
//   CEO: string;
//   description: string;
//   currentQuote: CurrentQuote;
// }

// interface StockData {
//   stock: Stock;
// }

// interface StockVars {
//   ticker: string;
// }

interface Ticker {
  ticker: string
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
      }
    }
  }
`

export default function Stock ({ ticker }: Ticker) {
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
      <p>Company: {data.stock.companyName}</p>
      <br/>
      <p>CEO: {data.stock.CEO}</p>
      <br/>
      <p>P/E Ratio: {data.stock.currentQuote.peRatio}</p>
      <p>Latest Price: {data.stock.currentQuote.latestPrice}</p>
      <Button
        variant="outline-primary"
        onClick={toggle}
      >
        Detail
      </Button>
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
