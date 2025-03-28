import React, { useState } from 'react';
import { Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image, Box } from '@chakra-ui/react';
import googleDocsImage from '/assets/googledocs.png'; // Replace with your actual image path

function EventReports() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAccordionChange = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Flex
            id='event-reports'
            mt="4rem" // Add margin-top for spacing from the component above
            py={"2rem"}
            bg={"#000"}
            direction={"column"}
            align={"center"}
            gap={"2rem"}
        >
            <Text
                fontFamily={"Milker"}
                fontSize={{ base: "9vw", md: "4.5rem" }}
                fontWeight={400}
                color={"#fcf9f9"}
            >
                Event Reports
            </Text>
            <Accordion allowMultiple w={{ base: "80%", md: "95%", lg: "85%", xl: "80%" }}>
                <AccordionItem>
                    <AccordionButton onClick={() => handleAccordionChange(0)}>
                        <Text flex="1" textAlign="left" color={"#fcf9f9"} fontSize={{ base: "1.5rem", md: "2rem" }}>
                            Aerothon 2024
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {expandedIndex === 0 && (
                            <Box textAlign="center">
                                <Image src={googleDocsImage} alt="Google Docs" boxSize="100px" mx="auto" mb={2} />
                                <Text color={"#fcf9f9"}>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Text as="span" textDecoration="underline" color="teal.300" fontWeight="bold">
                                            View Aerothon 2024 Report
                                        </Text>
                                    </a>
                                </Text>
                            </Box>
                        )}
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton onClick={() => handleAccordionChange(1)}>
                        <Text flex="1" textAlign="left" color={"#fcf9f9"} fontSize={{ base: "1.5rem", md: "2rem" }}>
                            WRC 2024
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {expandedIndex === 1 && (
                            <Box textAlign="center">
                                <Image src={googleDocsImage} alt="Google Docs" boxSize="100px" mx="auto" mb={2} />
                                <Text color={"#fcf9f9"}>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Text as="span" textDecoration="underline" color="teal.300" fontWeight="bold">
                                            View WRC 2024 Report
                                        </Text>
                                    </a>
                                </Text>
                            </Box>
                        )}
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton onClick={() => handleAccordionChange(2)}>
                        <Text flex="1" textAlign="left" color={"#fcf9f9"} fontSize={{ base: "1.5rem", md: "2rem" }}>
                            Sky Maneuvers 2024
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {expandedIndex === 2 && (
                            <Box textAlign="center">
                                <Image src={googleDocsImage} alt="Google Docs" boxSize="100px" mx="auto" mb={2} />
                                <Text color={"#fcf9f9"}>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Text as="span" textDecoration="underline" color="teal.300" fontWeight="bold">
                                            View Sky Maneuvers 2024 Report
                                        </Text>
                                    </a>
                                </Text>
                            </Box>
                        )}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
}

export default EventReports;