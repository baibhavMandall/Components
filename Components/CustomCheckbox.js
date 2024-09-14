import React, { useEffect, useState } from 'react'
import Checkbox from 'expo-checkbox';

const CustomCheckbox = (props) => {

    const [Check, setCheck] = useState(props.default ||false)

    const updateCheck = () => {
        setCheck(!Check);
    }

    useEffect(() => {
        props.getStatus(Check)
    },[Check])

  return (
    <Checkbox value={Check} onValueChange={updateCheck} />
  )
}

export default CustomCheckbox