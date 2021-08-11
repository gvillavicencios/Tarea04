import { NavigatorScreenParams } from '@react-navigation/native'

export type StackNavigatorParamsList = {    
    Detail: {id:number}
    AlbumsItem: undefined
    Album: undefined
    TabBottom: undefined
    User: undefined
  }
  
 export type TopNavigatorParamsList = {
    Main: undefined
  }

  export type RootNavigatorParamsList = {
    Main: NavigatorScreenParams<TopNavigatorParamsList>
  }