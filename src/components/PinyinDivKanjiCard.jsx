import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import TradOrSimp from 'traditional-or-simplified'
import { tify, sify } from 'chinese-conv'

const PinyinDivKanjiCard = props => {
  return (
    <Box py={1}>
      <Typography variant="h6" align="center">
        {props.pinyin}
      </Typography>
      <Typography variant="h4" align="center">
        {sify(props.character)}
      </Typography>
      <Typography variant="h4" align="center">
        {tify(props.character)}
      </Typography>
    </Box>
  )
}

PinyinDivKanjiCard.propTypes = {
  character: PropTypes.string,
  pinyin: PropTypes.string
}

export default PinyinDivKanjiCard
