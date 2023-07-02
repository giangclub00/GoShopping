import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount } from '../store/dashboard.reducer'

import './index.scss'

function Dashboard() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong>
          </CCardHeader>
          <CCardBody>
            <CButton onClick={() => dispatch(increment())}>Increment</CButton>
            <CButton onClick={() => dispatch(decrement())}>Decrement</CButton>
            <div>{count}</div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
