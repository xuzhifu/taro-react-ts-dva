// 写法一
// import { Component } from 'react'
// import { View, Text } from '@tarojs/components'
// import './index.scss'

// export default class Index extends Component {

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }



// 写法二 connect的写法
import { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

type PageStateProps = {
  name: any;
};

type PageDispatchProps = {
  addToCart: (any) => void;
};

type IProps = PageStateProps & PageDispatchProps;

// const Index: Taro.FC<IProps> = (props: IProps) => {
const Index = (props: IProps) => {
    // console.log("props", props)

    // const chageModel = () => {
    //   props.dispatch(
    //     {
    //       type: 'user/overrideStateProps',
    //       payload: {
    //         name: "修改后的name"
    //       }
    //     }
    //   )
    // }
    const chageModel = () => {
      props.addToCart({name: "修改后的name"})
      console.log('props.name',props.name)
    }
    // console.log('props.name',props.name)

    return (<View>
      <Text>首页{props.name}</Text>
        <Button onClick={chageModel}>修改model数据</Button>
      </View>
    )
}



Index.defaultProps = {};
// @ts-ignore
const mapStateToProps = (state) => {
  return {
    name: state.user.name,
  };
};
// @ts-ignore
const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (payload) => {
      dispatch({
        type: 'user/overrideStateProps',
        payload
      });
    },
  };
};
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Index);
// export default connect((state) => state)(Index)


// 写法三 hooks的写法
// import { Component } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { View, Text, Button } from '@tarojs/components'
// import './index.scss'
// export default (props) => {
//     const dispatch = useDispatch();
//     const { name, age } = useSelector((state) => state.user);
//     const chageModel = () => {
//         dispatch(
//             {
//                 type: 'user/overrideStateProps',
//                 payload: {
//                     name: "修改后的name"
//                 }

//             }
//         )
//     }
//     console.log("name", name)

//     return (
//       <View>
//         <Text>首页</Text>
//           <Button onClick={chageModel}>修改model数据</Button>
//       </View>
//     )
// }


