import { Button, Col, Progress, Result, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import * as styles from './styles'

interface ILoadingUploadProps {
  percentageUpload: number
  error: boolean
}

export const LoadingUpload: React.FC<ILoadingUploadProps> = ({
  percentageUpload,
  error,
}) => {
  const navigate = useNavigate()

  if (error) {
    return (
      <Col style={styles.containerContent}>
        <Result
          status="error"
          title="Failed while uploading the file"
          extra={[
            <Button onClick={() => navigate(0)} type="primary" key="console">
              Back Home
            </Button>,
          ]}
        />
      </Col>
    )
  }

  return (
    <Col style={styles.containerContent}>
      <Typography.Title level={4} style={styles.titleForm}>
        Uploading...
      </Typography.Title>
      <Progress percent={percentageUpload} />
    </Col>
  )
}
