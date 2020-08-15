import React, {useState, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'


// const Stocks = () => {
//   // const [imageURL, setImageURL] = useState('')
//   // const [stocks, setStocks] = useState([])
//   // const [next, setNext] = useState('NFLX')
//   const [isLoading, setIsLoading] = useState(true)
//   // const [tickers, setTickers] = useState(['AAPL','AMZN','GOOGL'])


//   useEffect(() => {
//     // const getStocks = async () => {
//     //   let res = await axios.get(`https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers.join()}&types=company,news,quote&range=1m&last=5&token=${process.env.REACT_APP_IEX_TEST_API_KEY}`)
//     //   console.log(res.data)
//     //   setStocks(Object.values(res.data))
//     //   setTickers(Object.keys(res.data))
//     // }

//     // const imageSet = async () => {
//     //   const res = await axios.get(`https://api.nasa.gov/planetary/apod?date=2020-08-13&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
//     //   setImageURL(`${res.data.url}`)
//     //   setIsLoading(false)
//     // }

//     // imageSet()
//     // getStocks()
//     setIsLoading(false)
//   }, [])



//   const handleChange = (event: MouseEvent) => {
//     // setNext(event.target.value)
//     console.log(event)
//   }

//   const handleSubmit = (event: MouseEvent) => {
//     event.preventDefault()
//     // setTickers([...tickers, next])
//   }

//   // const handleRemove = (val: number) => {
//   //   const idx = tickers.indexOf(val)
//   //   const newTickers = tickers.splice(idx, 1)
//   //   setTickers(newTickers)
//   // }

//   if(isLoading) {
//     return (<h1>Loading</h1>)
//   } else  {
//     return (
//       <div>
//         <Form inline>
//           <Input type="text" placeholder="Search" className=" mr-sm-2" />
//           <Button type="submit">Submit</Button>
//         </Form>
//         <h1>Stocks</h1>
//         {/* {stocks && stocks.map(stock => (
//           <Stock stock={stock} />
//         ))} */}
//       </div>
//     )
//   }
// }


type Company = {
  companyName: string,
  symbol: string,
  description: string,
  CEO: string
}

type Quote = {
  latestPrice: bigint,
  marketCap: bigint,
  week52High: number,
  week52Low: number,
  peRatio: number
}

type Stock = {
  company: Company,
  quote: Quote,
}

type StockProps = {
  stock: Stock;
}

export default function Stock ({stock}: StockProps) {
  const [showModal, setShowModal] = useState(false)
  const toggle = () => setShowModal(!showModal);

  return (
    <Fragment>
      <div key={stock.company.symbol}>
        <div style={{display: "inline-block"}}>
          <h3>{stock.company.symbol}: {stock.company.companyName}
          <Button
            variant="outline-primary"
            onClick={toggle}
          >
            Detail
          </Button></h3>
        </div>

        <p>Market Cap: {stock.quote.marketCap.toLocaleString()}</p>
        <p>Latest Price: {stock.quote.latestPrice}</p>
        <p>P/E Ratio: {stock.quote.peRatio}</p>
        <p>52 Week High: {stock.quote.week52High}</p>
        <p>52 Week Low: {stock.quote.week52Low}</p>
      </div>
      <Modal
        size="lg"
        isOpen={showModal}
        toggle={toggle}
      >
        <ModalHeader>
          <strong>{stock.company.symbol}:</strong> {stock.company.companyName}
        </ModalHeader>
        <ModalBody>
          <p>CEO: {stock.company.CEO}</p>
          <p>Description: {stock.company.description}</p>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

