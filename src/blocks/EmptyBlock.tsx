import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';

const EmptyBlock = () => {
  return (
    <Flex flex={1} alignItems="center" justifyContent="center" height="100vh">
      <Text fontWeight="bold" fontSize="56px" color="red">
        Block
      </Text>
    </Flex>
  );
};

export default EmptyBlock;
