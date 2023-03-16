import { Button, Col, Input, Result, Row, Typography, message } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as styles from './styles'
import { UploadServices } from '../../services/api-upload/UploadServices/UploadServices'

export const FeedbackUploading: React.FC = () => {
  const { fileName } = useParams()
  const [urlImage, setUrlImage] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    UploadServices.getUrlImage(fileName!).then((result) => {
      if (result instanceof Error) return setError(true)
      setUrlImage(result)
    })
  })

  const copyUrl = () => {
    navigator.clipboard
      .writeText(urlImage)
      .then(() => message.success('Copied!'))
      .catch(() => message.success('Failed to copy URL.'))
  }

  if (error) {
    return (
      <Col style={styles.containerContent}>
        <Result
          status="404"
          title="File not found"
          extra={
            <Button onClick={() => navigate('/')} type="primary">
              Back Home
            </Button>
          }
        />
      </Col>
    )
  }

  return (
    <Col style={styles.containerContent}>
      <img
        style={{ marginBottom: 10 }}
        alt="icon feedback"
        src="/icons/circle-success.svg"
      />
      <Typography.Title style={{ marginBottom: 0 }} level={4}>
        Uploaded Successfully!
      </Typography.Title>
      <Row style={styles.boxImage}>
        <img height="100%" src={urlImage} alt="image upload" />
      </Row>
      <Input.Group style={{ display: 'flex' }} compact>
        <Input value={urlImage} defaultValue={urlImage} />
        <Button onClick={copyUrl} type="primary">
          Copy Link
        </Button>
      </Input.Group>
    </Col>
  )
}
