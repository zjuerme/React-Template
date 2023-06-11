import './App.scss'
import './global.scss'
import '@arco-design/web-react/dist/css/arco.css'
import React, { useState } from 'react'
import { Context, StoreContext } from '@/store'
import { Button, Layout } from '@arco-design/web-react'
import { Navigation } from '@/components/Navigation/Navigation'
import { Test } from '@/components/Test/Test'

function App() {
  const [theme, _setTheme] = useState('light') // 'light' / 'dark'
  const [context] = useState(new Context())
  const rootStore = context.store
  /* useEffect(() => {
    document.body.setAttribute('arco-theme', theme)
  }, [theme]) */

  const [pageIndex, setPageIndex] = useState(0)
  return (
    <StoreContext.Provider value={context}>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className={'body'}
      >
        <Button onClick={() => setPageIndex((a) => (a === 0 ? 1 : 0))}>
          切换
        </Button>
        <Navigation a={'要显示'} />
        {pageIndex === 0 && <Test a={pageIndex} />}
        {pageIndex === 1 && <Test a={pageIndex} />}
      </div>
    </StoreContext.Provider>
  )
}

export default App
