import { Flex, Box, Text, Button, useColorMode } from '@chakra-ui/react';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      borderBottom='1px solid'
      padding='2em 0'>
      <Flex
        justifyContent={'center'}>
        <Text fontSize='2em'
          fontWeight={'700'}
          letterSpacing='1em'
          textTransform={"uppercase"}>
          <i className="bi bi-currency-exchange"></i>
          Currency</Text>
      </Flex>
      <Button
        onClick={toggleColorMode}>{colorMode ===
          'light' ? 'Dark' : 'Light'}</Button>
    </Box>
  )
};
export default Header;