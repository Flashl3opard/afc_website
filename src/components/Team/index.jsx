import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react';
import faculty from '/assets/Faculty.jpg';
import coordinator from '/assets/Coordinator.jpg';
import co_coordinator from '/assets/Co-coordinator.jpg';

function Team(){
    return(
        <Flex
        id='team'
        py={"2rem"}
        bg={"#000"}
        direction={"column"}
        align={"center"}
        gap={"2rem"}
        >
            <Text
                fontFamily={"Milker"}
                fontSize={{base:"9vw",md:"4.5rem"}}
                fontWeight={400}
                color={"#fcf9f9"}
            >
                Team
            </Text>
            <Flex
            direction={{base:"column",sm:"row"}}
            w={{base:"80%",md:"95%",lg:"85%",xl:"80%"}}
            justify={{base:"space-evenly",lg:"space-between"}}
            align={"center"}
            wrap={"wrap"}
            gap={{base:"5rem",md:"0rem"}}
            >
                <Box
                display={{base:"block",md:"none"}}
                w={{base:"14rem",lg:"16rem",xl:"18rem"}}
                h={{base:"20rem",lg:"24rem"}}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgGradient={`linear(214deg, rgba(38, 173, 229, 0.46) 50%, rgba(31, 170, 245, 0.55) 75%, rgba(47, 69, 138, 0.55) 100%, rgba(2, 111, 219, 0.55) 100%),url(${faculty})`}
                >
                    <Text
                    textTransform={"uppercase"}
                    fontSize={{base:"1.5rem",md:"2rem"}}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    w={{base:"12rem",md:"14rem"}}
                    textAlign={"left"}
                    lineHeight={1}
                    mt={{base:"16.5rem",md:"15.5rem",lg:"19.5rem"}}
                    ml={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Vijay Kumar Gupta
                    </Text>
                    <Text
                    pos={"absolute"}
                    textAlign={"left"}
                    fontSize={{base:"1.25rem",md:"1.75rem"}}
                    fontWeight={600}
                    pt={"0.5rem"}
                    pl={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Faculty Incharge
                    </Text>
                </Box>
                <Box
                w={{base:"14rem",lg:"16rem",xl:"18rem"}}
                h={{base:"20rem",lg:"24rem"}}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgGradient={`linear(214deg, rgba(38, 173, 229, 0.46) 50%, rgba(31, 170, 245, 0.55) 75%, rgba(47, 69, 138, 0.55) 100%, rgba(2, 111, 219, 0.55) 100%),url(${coordinator})`}
                mt={{md:"5rem"}}
                >
                    <Text
                    textTransform={"uppercase"}
                    fontSize={{base:"1.5rem",md:"2rem"}}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    w={{base:"10rem",md:"14rem"}}
                    textAlign={"left"}
                    lineHeight={1}
                    mt={{base:"16.5rem",md:"15.5rem",lg:"19.5rem"}}
                    ml={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Rudresh Singh
                    </Text>
                    <Text
                    pos={"absolute"}
                    textAlign={"left"}
                    fontSize={{base:"1.25rem",md:"1.75rem"}}
                    fontWeight={600}
                    pt={"0.5rem"}
                    pl={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Coordinator
                    </Text>
                </Box>
                <Box
                display={{base:"none",md:"block"}}
                w={{base:"14rem",lg:"16rem",xl:"18rem"}}
                h={{base:"20rem",lg:"24rem"}}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgGradient={`linear(214deg, rgba(38, 173, 229, 0.46) 50%, rgba(31, 170, 245, 0.55) 75%, rgba(47, 69, 138, 0.55) 100%, rgba(2, 111, 219, 0.55) 100%),url(${faculty})`}
                >
                    <Text
                    textTransform={"uppercase"}
                    fontSize={{base:"1.5rem",md:"2rem"}}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    w={{base:"12rem",md:"14rem"}}
                    textAlign={"left"}
                    lineHeight={1}
                    mt={{base:"16.5rem",md:"15.5rem",lg:"19.5rem"}}
                    ml={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Vijay Kumar Gupta
                    </Text>
                    <Text
                    pos={"absolute"}
                    textAlign={"left"}
                    fontSize={{base:"1.25rem",md:"1.75rem"}}
                    fontWeight={600}
                    pt={"0.5rem"}
                    pl={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Faculty Incharge
                    </Text>
                </Box>
                <Box
                w={{base:"14rem",lg:"16rem",xl:"18rem"}}
                h={{base:"20rem",lg:"24rem"}}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgGradient={`linear(214deg, rgba(38, 173, 229, 0.46) 50%, rgba(31, 170, 245, 0.55) 75%, rgba(47, 69, 138, 0.55) 100%, rgba(2, 111, 219, 0.55) 100%),url(${co_coordinator})`}
                mt={{md:"5rem"}}
                >
                    <Text
                    textTransform={"uppercase"}
                    fontSize={{base:"1.5rem",md:"2rem"}}
                    fontFamily={"Poppins"}
                    fontWeight={400}
                    w={{base:"10rem",md:"14rem"}}
                    textAlign={"left"}
                    lineHeight={1}
                    mt={{base:"18rem",md:"17.5rem",lg:"21.5rem"}}
                    ml={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Sankalp
                    </Text>
                    <Text
                    pos={"absolute"}
                    textAlign={"left"}
                    fontSize={{base:"1.25rem",md:"1.75rem"}}
                    fontWeight={600}
                    pt={"0.5rem"}
                    pl={"0.5rem"}
                    color={"#fcf9f9"}
                    >
                        Co-Coordinator
                    </Text>
                </Box>
            </Flex>
            <Flex
            w={{base:"95vw",sm:"95%",xl:"85%"}}
            h={{base:"3rem",xs:"4rem",md:"6rem",lg:"8rem"}}
            align={"center"}
            justify={"center"}
            textAlign={"center"}
            mt={"2rem"}
            fontFamily={"Poppins"}
            fontSize={{base:"2.5vw",sm:"0.75rem",md:"1.25rem",lg:"1.5rem"}}
            fontWeight={400}
            color={"#fcf9f9"}
            >
            <Text
                w={"20%"}
                h={"100%"}
                bg={"rgba(48, 68, 137, 0.10)"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                Technical Team
            </Text>
            <Text
                w={"20%"}
                h={"100%"}
                bg={"rgba(48, 68, 137, 0.20)"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                Marketing Team
            </Text>
            <Text
                w={"20%"}
                h={"100%"}
                bg={"rgba(48, 68, 137, 0.30)"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                Finance Team
            </Text>
            <Text
                w={"20%"}
                h={"100%"}
                bg={"rgba(48, 68, 137, 0.40)"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                Club Management Team
            </Text>
            <Text
                w={"20%"}
                h={"100%"}
                bg={"rgba(48, 68, 137, 0.50)"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                Resource & Development Team
            </Text>
            </Flex>
        </Flex>
    )
}

export default Team;