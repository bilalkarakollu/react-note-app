import React from 'react'
import {Box, Input} from '@chakra-ui/react'

interface SearchProps {
    search: string
    setSearch: (search: string) => void
}

const Search = (props:SearchProps) => {
  return (
    <Box w={'100%'} pr={2}>
        <Input placeholder="Search" value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
    </Box>
  )
}

export default Search
