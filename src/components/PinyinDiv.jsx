import React from 'react'
import pinyin from 'pinyin'

const PinyinDiv = () => {
  return (
    <div>
      <p>中心</p>
      <p>{pinyin('中心')}</p>
      <p>{pinyin('中心')[0]}</p>
    </div>
  )
}

export default PinyinDiv
