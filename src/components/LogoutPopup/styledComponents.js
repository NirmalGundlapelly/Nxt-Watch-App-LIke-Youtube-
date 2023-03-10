import Popup from 'reactjs-popup'

import styled from 'styled-components'

export const StyledPopup = styled(Popup)`
  &-content {
    width: 300px;
    background-color: ${props => (props.isDarkTheme ? '#313131 ' : '#f9f9f9')};
    text-align: center;
    border-radius: 8px;
    padding: 24px;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`
export const LogoutPopupBgContainer = styled.div`
  width: 100%;
`
export const LogoutQuestion = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#00306e')};
  margin-bottom: 32px;
`
export const CancelButton = styled.button`
  width: 72px;
  height: 36px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  background-color: transparent;
  color: #94a3b8;
  margin: 0 24px 0 0;
`
export const ConfirmButton = styled(CancelButton)`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  margin: 0;
`
export const LogoutButton = styled.button`
  width: 72px;
  height: 26px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  @media screen and (max-width: 767px) {
    border: none;
    width: 30px;
  }
`
export const MobileButtonIcon = styled.span`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  background-color: transparent;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 30px;
  align-items: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LargeScreenText = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
