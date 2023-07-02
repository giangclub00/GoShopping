import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { login } from './../store/thunks';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    criteriaMode: "all"
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(login({username: data.username, password: data.password, rememberMe: false})).then(() => {
      navigate('/dashboard');
    });;
  };
  const renderErrors = ({ messages }) => {
    return messages
      ? Object.entries(messages).map(([type, message]) => <div key={type}>{message}</div>)
      : null
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className={!errors['username'] ? "mb-3" : ""}>
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput type="username" placeholder="Username" autoComplete="current-username" {...register("username", {required: "This input is required."})} />
                    </CInputGroup>
                    <ErrorMessage
                              errors={errors}
                              name="username"
                              render={renderErrors}
                            />
                    <CInputGroup className={!errors['password'] ? "mb-3" : ""}>
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput type="password" placeholder="Password" autoComplete="current-password" {...register('password', {required: "This input is required."})}/>
                    </CInputGroup>
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={renderErrors}
                      />
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </form>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
