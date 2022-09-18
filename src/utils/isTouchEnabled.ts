const isTouchEnabled = () =>
  'ontouchstart' in window || navigator.maxTouchPoints > 0

export default isTouchEnabled
