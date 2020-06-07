import React from 'react'
import { Box, Typography } from '@material-ui/core'

const PinyinDivKanjiCard = props => {
  return (
    <Box p={1}>
      <Typography variant="h4" align="center">
        {props.character}
      </Typography>
      <Typography variant="h6" align="center">
        {props.pinyin}
      </Typography>
    </Box>
  )
}

export default PinyinDivKanjiCard
