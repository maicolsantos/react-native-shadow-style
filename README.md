# react-native-shadow-style

Use this function to create shadows for Android and iOS

```
yarn add react-native-shadow-style
```

## How to use
```jsx
import React from 'react'
import { View } from 'react-native'
import shadowStyle from 'react-native-shadow-style'

const App = () => (
  <View
    style={{
      // Others styles
      ...shadowStyle(5)
    }}
  />
)
```
## Use with styled components
```js
import styled from 'styled-components/native'
import shadowStyle from 'react-native-shadow-style'

export const Container = styled.View.attrs({
  ...shadowGenerator(5),
})`
  // Others styles
`
```
