import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Flex
      bg="white"
      h="60px"
      borderBottom="1px"
      borderColor="gray.300"
      alignItems="center"
      gap={6}
      px={8}
    >
      <Link href="/" passHref>
        <Button>Home</Button>
      </Link>
      <Link href="/chrudimka" passHref>
        <Button>Chrudimka</Button>
      </Link>
      <Link href="/biketower" passHref>
        <Button>Biketower</Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
