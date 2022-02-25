import styled from 'styled-components';
import colors from 'styles/colors';

export const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 24px;
`;

export const Text = styled.span`
  color: ${colors.white};
  background-color: ${colors.teal500};
  border-radius: 100%;
  text-align: center;
  width: 100%;
  font-size: 12px;
`;
