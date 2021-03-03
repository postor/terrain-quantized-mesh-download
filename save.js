const { writeFile, ensureDir } = require('fs-extra')
const { join, dirname } = require('path')

const BASE_PATH = join(__dirname, 'download')

module.exports = async (url, buffer) => {
  let u = url.replace('https://api.maptiler.com/tiles/terrain-quantized-mesh', BASE_PATH)
  u = u.split('?')[0]
  await ensureDir(dirname(u))
  await writeFile(u, buffer)
}



