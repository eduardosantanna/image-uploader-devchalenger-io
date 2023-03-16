import { Button, Col, Typography, Upload, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as styles from './styles'
import { LoadingUpload } from '../../components/LoadingUpload/LoadingUpload'
import { UploadServices } from '../../services/api-upload/UploadServices/UploadServices'

export const Home: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [showForm, setShowForm] = useState(true)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleUploadFile = (file: Blob) => {
    if (file.size > 5000000) {
      message.error('The file must be a maximum of 5MB.')
      return
    }
    setShowForm(false)
    UploadServices.uploadFile(file, (progressPercentage) =>
      setProgress(progressPercentage)
    ).then((result) => {
      if (result instanceof Error) return setError(true)
      navigate(`/image/${result}`)
    })
  }

  if (!showForm)
    return <LoadingUpload error={error} percentageUpload={progress} />

  return (
    <Col span={24} style={styles.containerContent}>
      <Typography.Title level={4} style={styles.titleForm}>
        Upload your image
      </Typography.Title>
      <Typography.Paragraph style={styles.textFilesAccepted}>
        File should be Jpeg, Png...
      </Typography.Paragraph>

      <span style={{ display: 'block', width: '100%' }}>
        <Upload.Dragger
          customRequest={({ file }) => handleUploadFile(file as Blob)}
          openFileDialogOnClick={false}
          showUploadList={false}
          accept=".png,.jpeg,.gif"
          maxCount={1}
          multiple={false}
          height={218}
          style={styles.boxDropFile}
        >
          <img
            src="/icons/image-form.svg"
            alt="icon-form"
            style={{ marginBottom: '2rem' }}
          />
          <Typography.Paragraph style={styles.textContentDropBoxFiles}>
            Drag & Drop your image here
          </Typography.Paragraph>
        </Upload.Dragger>
      </span>

      <Typography.Paragraph style={styles.textDividerBoxDropFileAndButtonFile}>
        Or
      </Typography.Paragraph>

      <Upload
        customRequest={({ file }) => handleUploadFile(file as Blob)}
        accept=".png,.jpeg,.gif"
        showUploadList={false}
        maxCount={1}
        multiple={false}
      >
        <Button type="primary">Choose a file</Button>
      </Upload>
    </Col>
  )
}
