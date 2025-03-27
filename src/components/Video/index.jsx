import React from 'react'
import { Box, AspectRatio } from '@chakra-ui/react';

function Video(){
    return(
        <Box
        py={{base:"2rem",md:"4rem"}}
        bg={"#000"}
        >
            <AspectRatio 
            w={"80%"} 
            ratio={16/9}
            mx={"auto"}
            borderRadius={"lg"}
            overflow={"hidden"}
            >
            <iframe
                title='afc'
                src="https://www.youtube.com/embed/K3sCFgJAsDg?rel=0"
                allowFullScreen
            />
            </AspectRatio>
        </Box>
    )
}

export default Video;