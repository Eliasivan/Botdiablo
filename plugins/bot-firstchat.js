import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `👋 𝗛𝗼𝗹𝗮 𝗦𝗼𝘆 𝗗𝗶𝗮𝗯𝗹𝗼𝗕𝗼𝘁 ${nombre}!!
 *${saludo}*

📅 Fecha: ${fecha}
⏰ Hora: ${tiempo}

⚠️ *Nota:* 𝚗𝚘 𝚎𝚗𝚟𝚒𝚎 𝚜𝚙𝚊𝚖 𝚊𝚕 𝚋𝚘𝚝
🧃 Escriba *.𝚖𝚎𝚗𝚞* 𝚙𝚊𝚛𝚊 𝚖𝚘𝚜𝚝𝚛𝚊𝚛 𝚎𝚕 𝚖𝚎𝚗 
  
📝 ¿𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗔𝗣𝗢𝗬𝗔𝗥 𝗘𝗦𝗧𝗘 𝗣𝗥𝗢𝗬𝗘𝗖𝗧𝗢 𝗣𝗔𝗥𝗔 𝗤𝗨𝗘 𝗦𝗜𝗚𝗔 𝗔𝗖𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗡𝗗𝗢𝗦𝗘? 𝗲𝗻𝘃𝗶𝗮𝗿 𝗮 𝘁𝗿𝗮𝘃𝗲𝘀 𝗱𝗲: 
*https://www.paypal.me/EnzitoOFC*`, m, fake, )


user.pc = new Date * 1
}
