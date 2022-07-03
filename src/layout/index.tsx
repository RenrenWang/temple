import React, { useMemo, useState, useEffect } from 'react'

import { Layout, Menu } from 'antd'
import styles from './index.less'
import { Routes, Route, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import menuList from '@src/config/routerMap'
const { Content, Footer, Sider } = Layout


const App: React.Fc = () => {

  const navigate = useNavigate()
  
  //点击跳转
  const onClick: MenuProps['onClick'] = e => {
    navigate(e.key)
  }

  //路由平铺
  const getRouteList = items => {
    let arr = []
    items.forEach(item => {
      if (item?.component) {
        arr.push({ key: item?.key, path: item?.path, label: item?.label,component:item?.component })
      }else if (item?.children) {
        const result = getRouteList(item.children)
        arr=arr.concat(result)
      }
    })
    return arr
  }
  const childrenRoutes = useMemo(() => {
    return getRouteList(menuList)
  }, [])

  return (
    <Layout hasSider className={styles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={false}
        width={268}
        theme={'light'}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className={styles.logo}></div>
        <Menu onSelect={onClick} mode='inline' theme='light' items={menuList} />
      </Sider>
      <Layout className={styles.mianLayout}>
        <Content>
          <Routes>
            {childrenRoutes.map(item => {
              return <Route path={item?.path} element={<item.component />} />
            })}
          </Routes>
        </Content>
        <Footer>Picture-Admin ©2022 Created by  WangRen</Footer>
      </Layout>
    </Layout>
  )
}

export default App
