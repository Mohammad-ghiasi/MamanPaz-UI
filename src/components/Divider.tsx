import { Box, IconButton, Divider, Show } from '@chakra-ui/react'
import React from 'react'
import { FaCaretDown } from "react-icons/fa";
export default function Dividers() {
    return (
        <Box className="flex justify-center mt-10  ">
            <Box display="flex" alignItems="center" className='w-[80%]'>
                <Divider bg='#d0c8c8df' height='1px' />
                <Show above='md'>
                    <Box
                        boxShadow="0px 3px 6px rgba(0, 0, 0, 0.5)"
                        rounded='50%'
                    >
                        <IconButton
                            aria-label="Dropdown Icon"
                            icon={<FaCaretDown size='30px' />}
                            my={2}
                            mx='7px'
                            bg="inherit"
                            _hover={{ bg: 'white' }}
                        />
                    </Box>
                </Show>
                <Divider bg='#d0c8c8df' height='1px' />
            </Box>
        </Box>
    )
}
