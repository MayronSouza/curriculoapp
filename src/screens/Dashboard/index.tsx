import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  UserAvatar,
  Header,
  UserName,
  UserFunction,
  Social,
  CardContainer,
  Card,
  CardHeader,
  CardHeaderText,
  CardContent,
} from './styles';

import image from '../../assets/image.png';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <UserAvatar source={image} />
      <UserName>Mayron Souza</UserName>
      <UserFunction>Developer Mobile</UserFunction>
      <Social>
        <Icon name="github" size={24} color="#ff9000" />
        <Icon name="facebook" size={24} color="#ff9000" />
        <Icon name="linkedin" size={24} color="#ff9000" />
      </Social>
    </Header>

    <CardContainer>
      <Card>
        <CardHeader>
          <CardHeaderText>Minhas Experiências</CardHeaderText>
        </CardHeader>
        <CardContent />
      </Card>
    </CardContainer>
  </Container>
);

export default Dashboard;
