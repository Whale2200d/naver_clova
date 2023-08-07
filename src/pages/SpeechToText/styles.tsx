import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.lightPrimary};

  border-radius: 5px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);

  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;

  ${(props) => props.theme.font.heading_sm}

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
  }

  // 공통 사항 외 추가 사항
  padding: 0 5px 0;
  margin-left: 5px;
`;

export const Paragraph = styled.p`
  ${(props) => props.theme.font.contents}
`;
