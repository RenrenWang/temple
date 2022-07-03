import React, { useEffect, useState } from 'react'
import { Layout, Spin } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
const { Header } = Layout
import styles from './index.less'
export default function MainLayout({ title = '', children, className = '', showBack = false, loading = false }) {
  const navigate = useNavigate()

  return (
    <Layout>
      <Header>
        <h2>
          {showBack && (
            <ArrowLeftOutlined
              onClick={() => navigate(-1)}
              style={{ marginRight: 15, cursor: 'pointer', color: '#899' }}
            />
          )}
          {title}
        </h2>
      </Header>

      <div className={styles.bodyLayout}>
        <Spin spinning={loading}>
          <div className={className}>{children}</div>
        </Spin>
      </div>
    </Layout>
  )
}
