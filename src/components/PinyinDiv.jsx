import React from 'react'
import pinyin from 'pinyin'
import {Box} from "@material-ui/core";

import PinyinDivKanjiCard from "./PinyinDivKanjiCard";

const PinyinDiv = (props) => {
  const characters = props?.text.split('')
  const pinyins = pinyin(props?.text).map(el => el[0])
  const chineseArray = []
  for(let i=0; i<characters.length; i++) {
    chineseArray.push({
      character: characters[i],
      pinyin: pinyins[i]
    })
  }

  return (
    <div>
      <Box display="flex">
        {
          chineseArray.map((data, index) => {
            return (
              <PinyinDivKanjiCard
                key={index}
                character={data.character}
                pinyin={data.pinyin}
              />
            )
          })
        }
      </Box>
    </div>
  )
}

export default PinyinDiv
