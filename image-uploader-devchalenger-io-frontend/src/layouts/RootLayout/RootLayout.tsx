import { Layout, Row } from 'antd'
import { Outlet } from 'react-router-dom'

import * as styles from './styles'

export const RootLayout: React.FC = () => {
  return (
    <Layout style={styles.container}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Outlet />
      </Row>
    </Layout>
  )
}
