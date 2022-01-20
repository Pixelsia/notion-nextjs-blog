export const createAnimation = ({ ref }) => {
  const canvas = document.createElement('canvas')
  const offscreenCanvas = canvas.transferControlToOffscreen()
  ref.appendChild(canvas)
  const animationWorker = new Worker('./animationWorker.js')
  animationWorker.postMessage(
    {
      canvas: offscreenCanvas,
      width: ref.clientWidth,
      height: ref.clientHeight,
    },
    [offscreenCanvas]
  )
}
