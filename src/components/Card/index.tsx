import React, { useEffect, useState } from 'react';

import {
  Container,
  CardHeader,
  CardHeaderText,
  CardContent,
  CardContentText,
} from './styles';

interface IProps {
  header: string;
  content: string;
}

const Card: React.FC<IProps> = ({ header, content }: IProps) => {
  const [headerCard, setHeaderCard] = useState('');
  const [contentCard, setContetCard] = useState('');

  useEffect(() => {
    setHeaderCard(header);
    setContetCard(content);
  }, [header, content]);

  return (
    <Container>
      <CardHeader>
        <CardHeaderText>{headerCard}</CardHeaderText>
      </CardHeader>
      <CardContent>
        <CardContentText>{contentCard}</CardContentText>
      </CardContent>
    </Container>
  );
};

export default Card;
