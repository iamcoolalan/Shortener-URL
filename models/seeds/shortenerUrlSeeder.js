const ShortenerUrl = require('../shortenerUrl')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('Generate test data...')

  const seed = [
    {
      originalUrl: `https://www.google.com.tw/?hl=zh_TW`,
      shortenerCode: 'GOOG'
    },
    {
      originalUrl: `https://www.apple.com/tw/?afid=p238%7Csd9nZSawW-dc_mtid_18707vxu38484_pcrid_657255474922_pgrid_12618487622_pntwk_g_pchan__pexid__&cid=aos-tw-kwgo-brand--slid---product-`,
      shortenerCode: 'AAPL'
    },
    {
      originalUrl: `https://www.nvidia.com/zh-tw/`,
      shortenerCode: 'NVDA'
    },
  ]
  
  ShortenerUrl.insertMany(seed).finally(() => db.close())

  console.log('Done!')
})