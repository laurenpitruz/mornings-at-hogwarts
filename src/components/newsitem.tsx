import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'

interface Article {
  title: string;
  author: string;
  description: string;
  content: string;
}

interface ArticleData {
  article: Article
}

export default function NewsItem ({article}: ArticleData) {
  const [showModal, setShowModal] = useState(false)
  const toggle = () => setShowModal(!showModal)

  return (
    <div>
      <div key={article.author}>
        <p>{article.title}</p>
        <Button inline onClick={toggle}>+</Button>
      </div>
      <Modal
        size="lg"
        isOpen={showModal}
        toggle={toggle}
      >
        <ModalHeader>
          {article.title}
        </ModalHeader>
        <ModalBody>
          <p>{article.content}</p>
        </ModalBody>
      </Modal>
    </div>
  )
}
