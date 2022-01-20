onmessage = (e) => {
  switch (e.data.type) {
    case 'init':
      init(e)
      break
    case 'resize':
      break
  }
}

function init(e) {
  const { canvas, width, height } = e.data
}
