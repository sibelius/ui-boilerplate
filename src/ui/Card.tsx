import styled from 'styled-components';
import { Flex } from 'rebass';
import { background, borders, color } from 'styled-system';

export const Card = styled(Flex)`
  ${borders}
  ${color}
  ${background}
`;