import React from 'react';
import { Flex, Text, Box, Image, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '/assets/logo.png';
import { HamburgerIcon } from '@chakra-ui/icons';

const links = [
  { to: 'home', text: 'Home' },
  { to: 'about', text: 'About' },
  { to: 'projects', text: 'Projects' },
  { to: 'achievements', text: 'Achievements' },
  { to: 'event-reports', text: 'Event Reports' },
  { to: 'team', text: 'Team' },
  { to: 'gallery', text: 'Gallery' },
  { to: 'sponsors', text: 'Sponsors' },
  { to: 'contact', text: 'Contact' },
];

function NavbarLink({ to, text }) {
  return (
    <ScrollLink to={to} smooth={true} duration={1000}>
      <Text 
        color={"#fcf9f9"} 
        cursor={"pointer"} 
        position="relative" 
        _hover={{ 
          color: 'royalblue', 
          transform: 'scale(1.1)', 
          transition: 'transform 0.2s, color 0.2s' 
        }}
      >
        {text}
        <Box 
          position="absolute" 
          bottom="-2px" 
          left="0" 
          right="0" 
          height="2px" 
          backgroundColor="blue" 
          transform="scaleX(0)" 
          transition="transform 0.2s" 
          _hover={{ transform: 'scaleX(1)' }} // Underline animation
        />
      </Text>
    </ScrollLink>
  );
}

function NavbarMenuItem({ to, text }) {
  return (
    <MenuItem bg={"#131313"} _hover={{ bg: "#1a1a1a" }}>
      <ScrollLink to={to} smooth={true} duration={1000}>
        <Text 
          color="#fcf9f9" 
          cursor={"pointer"} 
          position="relative" 
          _hover={{ 
            color: 'blue', 
            transform: 'scale(1.1)', 
            transition: 'transform 0.2s, color 0.2s' 
          }}
        >
          {text}
          <Box 
            position="absolute" 
            bottom="-2px" 
            left="0" 
            right="0" 
            height="2px" 
            backgroundColor="blue" 
            transform="scaleX(0)" 
            transition="transform 0.2s" 
            _hover={{ transform: 'scaleX(1)' }} // Underline animation
          />
        </Text>
      </ScrollLink>
    </MenuItem>
  );
}

function Navbar() {
  return (
    <Box 
      w="100%" 
      top="0" 
      pos={"sticky"} 
      zIndex={2}
      bg={"transparent"}
    >
      <Flex
        w={{ base: "95%", lg: "90%" }}
        h="5rem"
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        pt={{ base: "0.5rem", md: "0" }}
        mx={"auto"}
      >
        <ScrollLink to="home" smooth={true} duration={500}>
          <Image
            aspectRatio={'1/1'}
            w={{ base: "2rem", sm: "3rem", md: '5rem' }}
            p={'0'}
            src={logo}
            alt='afc_logo'
          />
        </ScrollLink>
        <Box
          fontSize={{ base: "0.75rem", md: "1rem", lg: "1.2rem", '2xl': "1.25vw" }}
          fontWeight={600}
        >
          <Flex display={{ base: "none", md: "flex" }}
            align="center"
            justify="space-between"
            gap={{ base: "1.25rem", lg: "2rem" }}
          >
            {links.map(link => <NavbarLink key={link.to} to={link.to} text={link.text} />)}
          </Flex>
          <Box display={{ base: "block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                size='sm'
                color={"#fcf9f9"}
                mt={{ base: "0rem", sm: "0.5rem" }}
              />
              <MenuList bg={"#131313"}>
                {links.map(link => <NavbarMenuItem key={link.to} {...link} />)}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;