import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f0eaea;
`;

export const UserAvatar = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 125px;
`;

export const Header = styled.View`
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.Text`
  margin-top: 16px;
  font-family: sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #52504f;
`;

export const UserFunction = styled.Text`
  margin-bottom: 10px;
  color: #999591;
`;

export const Social = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin-top: 18px;
`;

export const CardContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`;
