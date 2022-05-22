
import React from "react";
import { View, Text, Button } from '@tarojs/components'

const Test = (props:any) =>{
    const {titleChange} = props;
    return (
        <View>
            <Button onClick={() => titleChange(3)}>修改</Button>
            {/* <Button onClick={titleChange}>修改</Button>
            <Button onClick={titleChange(3)}>修改</Button> */}
        </View>
    )
}

export default Test