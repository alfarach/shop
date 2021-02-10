import React from 'react';
import { Box, Heading, Text } from 'theme-ui';

const BlockTitle = (props) => {
  return (
    <Box>
      <Text as="p">{props.slogan}</Text>
      <Heading as="h2">{props.title}</Heading>
    </Box>
  );
};

export default BlockTitle;
