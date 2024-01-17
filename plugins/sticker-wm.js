import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*⚠️ 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑬 𝑨 𝑼𝑵 STICKER 𝑨𝑳 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑬 𝑷𝑶𝑵𝑬𝑹 𝑼𝑵 𝑵𝑶𝑴𝑩𝑹𝑬*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*⚠️ 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐀𝐋 𝐐𝐔𝐄 𝐐𝐔𝐈𝐄𝐑𝐄 𝐏𝐎𝐍𝐄𝐑 𝐔𝐍 𝐍𝐎𝐌𝐁𝐑𝐄*'
let img = await m.quoted.download()
if (!img) throw '*⚠️ 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐀𝐋 𝐐𝐔𝐄 𝐐𝐔𝐈𝐄𝐑𝐄 𝐏𝐎𝐍𝐄𝐑 𝐔𝐍 𝐍𝐎𝐌𝐁𝐑𝐄*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*⚠️ 𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
