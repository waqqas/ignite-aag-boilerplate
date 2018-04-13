import React from 'react'
import styled from "styled-components/native/index";
import {Image, View, StatusBar, Text, TouchableOpacity, ScrollView, ActivityIndicator, Switch} from 'react-native'
import Icon from "react-native-vector-icons/EvilIcons";

export const Screen = styled.View`
flex: 1;`

export const AppStatusBar = styled.StatusBar``

export const Header = styled.View`
background-color: rgb(255,255,255);
height: 88px;
justify-content: space-between;
align-items: flex-end;
padding-top: 22px;
flex-direction: row;`

export const HeaderTitle = styled.Text`
flex:1;
font-family: SanFranciscoText-Bold;
font-size: 17px;
color: #4A4A4A;
text-align: center;
margin-bottom: 12px;
`

export const AppView = ({fixed, children, ...props}) => {
  if (fixed) {
    return (<View {...props}>{children}</View>)
  }
  else {
    return (<ScrollView {...props}>{children}</ScrollView>)
  }
}
export const Content = styled(AppView)`
flex:1;
background: #FFFFFF;
padding-horizontal: ${props => props.padding || 0}px
`

const AppImage = styled.Image`
  resize-mode: contain;
  height: ${props => props.size || 17}px;
  width: ${props => props.size || 17}px;
`

export const AppImageButton = ({size, source, ...props}) => (
  <TouchableOpacity {...props}>
    <AppImage source={source} size={size} style={{resizeMode: 'contain'}}/>
  </TouchableOpacity>
)

export const HeaderImageButton = styled(AppImageButton)`
padding-horizontal: 10px;
padding-bottom: 12px;
`

export const HeaderText = styled.Text`
font-family: SanFranciscoText-Regular;
font-size: 17px;
color: #4A4A4A;
`

export const AppTextButton = ({source, textProps, children, ...props}) => (
  <TouchableOpacity {...props}>
    <HeaderText {...textProps}>{children}</HeaderText>
  </TouchableOpacity>
)

export const HeaderTextButton = styled(AppTextButton)`
padding-horizontal: 10px;
padding-vertical: 12px;
`


//////////

const ButtonText = styled.Text`
font-family: SanFranciscoText-Bold;
font-size: 18px;
color: #FFFFFF;
text-align: center;
`

const AppButton = ({disabled, children, textProps, onPress, ...props}) => (
  <TouchableOpacity onPress={!disabled ? onPress : null} {...props}>
    <ButtonText {...textProps}>{children}</ButtonText>
  </TouchableOpacity>
)

export const Button = styled(AppButton)`
background: rgba(100,65,164,${props => props.disabled ? '0.3' : '1'});
border-radius: 3px;
align-self: stretch;
padding: 10px 15px;
`

export const FullButton = styled(AppButton)`
padding-vertical: 12px;
background: rgba(229,115,112,${props => props.disabled ? '0.3' : '1'});
`

//////////

const AvatarImage = styled.Image`
border-color: rgba(0,0,0,0);
border-radius: ${props => (props.size / 2)};
height: ${props => props.size};
width: ${props => props.size};
resize-mode: cover;
`

const AvatarLoading = styled.ActivityIndicator`
position: absolute;
`

const AppAvatar = ({source, size, spinner, ...props}) => (
  <View {...props}>
    <AvatarImage source={source} size={size}/>
    <AvatarLoading animating={!!spinner} size='large' color={'#6441A4'} hidesWhenStopped/>
  </View>
)

export const Avatar = styled(AppAvatar)`
align-items: center;
justify-content: center;
height: ${props => props.size};
width: ${props => props.size};
`

///////

export const Separator = styled.View`
border: 0.5px solid #D1D1D1;
background: #D1D1D1;
margin-vertical: 10px;
`

export const Title = styled.Text`
font-family: SanFranciscoText-Bold;
font-size: 36px;
color: #4A4A4A;
margin-vertical: 25px;
`

export const SubTitle = styled.Text`
font-family: SanFranciscoText-Regular;
font-size: 15px;
color: #4A4A4A;
`

export const CardSubTitle = styled.Text`
font-family: SanFranciscoText-Regular;
font-size: 15px;
color: #9B9B9B;
padding-bottom: 3px;
`

export const Heading = styled.Text`
font-family: ${props => props.bold ? 'SanFranciscoText-Bold' : 'SanFranciscoText-Medium'};
font-size: 20px;
color: #4A4A4A;
`

export const SubHeading = styled.Text`
font-family: SanFranciscoText-Regular;
font-size: 18px;
color: #4A4A4A;
margin-vertical: 20px;
`

const AppRow = ({fixed, ...props, children}) => (
  fixed ? <View {...props}>{children}</View> : <TouchableOpacity {...props}>{children}</TouchableOpacity>
)

export const Row = styled(AppRow)`
background: #FFFFFF;
border-color: rgba(0,0,0,0);
border-bottom-color: #D1D1D1;
border-width: 1px;
height: ${props => props.height || 60}px;
align-items: center;
justify-content: flex-start;
flex-direction: row;
`

export const RowText = styled.Text`
flex:1;
font-family: ${props => props.bold ? 'SanFranciscoText-Bold' : 'SanFranciscoText-Regular'};
font-size: 18px;
color: #4A4A4A;
`
export const RowRightText = styled.Text`
font-family: SanFranciscoText-Regular;
font-size: 15px;
color: #9B9B9B;
`

export const RowIcon = styled(Icon)`
font-size: 40px;
color: grey;
`

export const RowImageIcon = styled.Image`
height:25px;
width: 25px;
`


export const AppSwitch = ({...props}) => (
  <Switch onTintColor={'#6441a4'} {...props} />
)

export const RowSwitch = styled(AppSwitch)`
`

////////////////

export const RoundImageButton = ({source, disabled, onPress, ...props}) => (
  <TouchableOpacity {...props} onPress={disabled ? null : onPress}>
    <Image source={source} style={{resizeMode: 'contain'}}/>
  </TouchableOpacity>
)

export const RoundButton = styled(RoundImageButton)`
border-color: rgba(0,0,0,0);
border-radius: ${props => (props.size / 2)};
align-items: center;
justify-content: center;
background: #6441A4;
height: ${props => props.size};
width: ${props => props.size};`

////////////////