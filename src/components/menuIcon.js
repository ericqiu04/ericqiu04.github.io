import { CloseIcon } from '@chakra-ui/icons'
import {Box} from '@chakra-ui/react'


const MenuIcon = ({toggle, isOpen}) => {

    return(
        <Box display = {{base :'block', md:'none'}} onClick = {toggle}>
            {isOpen ? <CloseIcon/> : <MenuIcon />}
        </Box>
    )
}