import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Alert, TouchableOpacity } from 'react-native';
import {
  Container,
  UserAvatar,
  Header,
  UserName,
  UserFunction,
  Social,
  CardContainer,
} from './styles';

import Card from '../../components/Card';

import image from '../../assets/image.png';

const Dashboard: React.FC = () => {
  const handleSocialIcon = useCallback(social => {
    switch (social) {
      case 'linkedin':
        Alert.alert('https://linkedin.com');
        break;
      case 'facebook':
        Alert.alert('https://facebook.com');
        break;
      case 'github':
        Alert.alert('https://github.com');
        break;
      default:
        Alert.alert('Informe a rede social');
        break;
    }
  }, []);

  return (
    <Container>
      <Header>
        <UserAvatar source={image} />
        <UserName>Mayron Souza</UserName>
        <UserFunction>Developer Mobile</UserFunction>
        <Social>
          <TouchableOpacity onPress={() => handleSocialIcon('github')}>
            <Icon name="github" size={24} color="#ff9000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialIcon('facebook')}>
            <Icon name="facebook" size={24} color="#ff9000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialIcon('linkedin')}>
            <Icon name="linkedin" size={24} color="#ff9000" />
          </TouchableOpacity>
        </Social>
      </Header>

      <CardContainer>
        <Card
          header="Experiência Profissional"
          content="GMZ Solutions - Mobile Delveloper Jr"
        />
        <Card
          header="Formação Acadêmica"
          content="Wyden - Análise e Desenvolvimento de Sofware"
        />
      </CardContainer>
    </Container>
  );
};

export default Dashboard;
