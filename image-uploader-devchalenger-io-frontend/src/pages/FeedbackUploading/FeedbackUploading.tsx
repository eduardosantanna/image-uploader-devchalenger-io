import { Button, Col, Input, Result, Row, Typography, message, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as styles from './styles'
import { UploadServices } from '../../services/api-upload/UploadServices/UploadServices'
import SkeletonImage from 'antd/es/skeleton/Image'

export const FeedbackUploading: React.FC = () => {
  const { fileName } = useParams()
  const [urlImage, setUrlImage] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsloading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    UploadServices.getUrlImage(fileName!).then((result) => {
      setIsloading(false)
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
        {!isLoading && <img height="100%" src={urlImage} alt="image upload" />}
        {isLoading && <SkeletonImage className='mainStyle' active style={{ height: '100%', width: '100%', display: 'flex' }} />}
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
