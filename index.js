/**
 * Reference https://ethercreative.github.io/react-native-shadow-generator/
 */

const interpolate = (elevation, rangeA, rangeB, rangeA2, rangeB2) => (
  elevation === 0
    ? 0
    : (elevation - rangeA)
      * ((rangeB2 - rangeA2) / (rangeB - rangeA))
      + rangeA2
)

const shadowStyle = (elevation = 0, shadowColor = 'black') => {
  const height = Math.floor(elevation / 2)
  const blur = elevation + height

  return {
    elevation,
    shadowColor,
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: Number(interpolate(elevation, 1, 24, 0.2, 0.6).toFixed(2)),
    shadowRadius: Number(interpolate(blur, 1, 38, 1, 16).toFixed(2)),
  }
}

export default shadowStyle
