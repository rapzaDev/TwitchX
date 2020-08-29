import React from 'react';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RigthSide,
  WhiteCircle,
 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
        <UserName>rocketseat_oficial</UserName>
        <Info>36 new videos</Info>
        </Column>
      </LeftSide>

      <RigthSide>
        <WhiteCircle />
      </RigthSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
      <ChannelItem /> 
    </List>
  );
};

export default ChannelList;
