import NextImage from 'next/image';
import styled from 'styled-components';
export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;
export const Logo = styled(NextImage)`
  width: min(25rem, 100%);
  margin-bottom: 2rem;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
`;
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;
export const Illustration = styled(NextImage)`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
