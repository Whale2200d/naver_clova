import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  min-width: 250px;

  display: flex;
  flex-direction: column;

  border-radius: 5px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);

  margin: 0 auto;
  margin-top: 15px;
  padding: 15px;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color.lightGray};
  transition: border 0.25s ease;
  border-radius: 5px;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;

  ${(props) => props.theme.font.heading_sm}
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    border: 1px solid ${(props) => props.theme.color.red};
    transition: border 0.25s ease;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.lightPrimary};
  transition: background-color 0.25s ease;

  border-radius: 5px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);

  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;

  ${(props) => props.theme.font.heading_sm}

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    transition: background-color 0.25s ease;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.color.red};
  ${(props) => props.theme.font.contents}
`;
