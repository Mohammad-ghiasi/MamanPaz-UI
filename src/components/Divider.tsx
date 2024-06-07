import { Box,  IconButton, Divider } from '@chakra-ui/react'
import React from 'react'
import { FaCaretDown } from "react-icons/fa";
export default function Dividers() {
    return (
        <Box className="flex justify-center mt-20 mb-7 ">
            <Box display="flex" alignItems="center" className='w-[80%]'>
                <Divider bg='#d9d2d2df' height='2px' />
                <Box
                    boxShadow="0px 3px 6px rgba(0, 0, 0, 0.5)"
                    rounded='50%'
                >
                    <IconButton
                        aria-label="Dropdown Icon"
                        icon={<FaCaretDown size='36px' />}
                        my={2}
                        mx='7px'
                        bg="inherit"
                        _hover={{ bg: 'white' }}
                    />
                </Box>
                <Divider bg='#d9d2d2df' height='2px' />
            </Box>
        </Box>
    )
}
