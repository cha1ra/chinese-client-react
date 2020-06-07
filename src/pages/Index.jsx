import React, { useState } from 'react'
import PinyinDiv from '../components/PinyinDiv'
import { TextField } from '@material-ui/core'

const Index = () => {
  const [text, setText] = useState('好的')
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="(例)你好"
        onChange={(e) => { setText(e.target.value) }}
      />
      <PinyinDiv
        text={text}
      />
    </div>
  )
}

export default Index
