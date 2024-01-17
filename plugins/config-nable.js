var handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'autolevelup':
case 'levelup':
isUser = true
user.autolevelup = isEnable
break
case 'simsimi':
case 'simi':
case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antibule':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antibule = !isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.viewonce = isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitraba = isEnable
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable
break
case 'autobio':
isAll = true
if (!(isOwner)) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoBio = isEnable
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'sololatinos':
case 'sololatino':
case 'onlylatinos':
case 'onlylat':
case 'antiarabe':
case 'antifake':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.onlyLatinos = isEnable
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable
break
case 'antistickers':
case 'antisticker':
case 'antipegatina':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
throw false
}}
chat.antiSticker = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'nsfw':
case '+18':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nsfw = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `*☢️ OPCIONES PARA GRUPO ☢️*

_${usedPrefix + command} *𝘸𝘦𝘭𝘤𝘰𝘮𝘦*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬2*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘧𝘢𝘬𝘦*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘵𝘳𝘢𝘣𝘢*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘵𝘰𝘹𝘪𝘤*_
_${usedPrefix + command} *𝘢𝘶𝘵𝘰𝘭𝘦𝘷𝘦𝘭𝘶𝘱*_
_${usedPrefix + command} *𝘯𝘴𝘧𝘸*_
_${usedPrefix + command} *𝘴𝘪𝘮𝘪*_
_${usedPrefix + command} *𝘥𝘦𝘵𝘦𝘤𝘵*_
_${usedPrefix + command} *𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘴𝘵𝘪𝘤𝘬𝘦𝘳*_
_${usedPrefix + command} *𝘢𝘶𝘵𝘰𝘴𝘵𝘪𝘤𝘬𝘦𝘳*_
_${usedPrefix + command} *𝘢𝘯𝘵𝘪𝘣𝘶𝘭𝘦*_

▂ ▃ ▄ ▅ ▆ ▇ █ █ ▇ ▆ ▅ ▄ ▃ ▂ 

*🍧 𝘖𝘗𝘊𝘐𝘖𝘕𝘌𝘚 𝘋𝘌 𝘗𝘙𝘖𝘗𝘐𝘌𝘛𝘈𝘙𝘐𝘖 🍭*

▂ ▃ ▄ ▅ ▆ ▇ █ █ ▇ ▆ ▅ ▄ ▃ ▂ 

_${usedPrefix + command} *𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵*_
_${usedPrefix + command} *𝘱𝘶𝘣𝘭𝘪𝘤*_
_${usedPrefix + command} *𝘱𝘤𝘰𝘯𝘭𝘺*_
_${usedPrefix + command} *𝘨𝘤𝘰𝘯𝘭𝘺*_
_${usedPrefix + command} *𝘢𝘶𝘵𝘰𝘳𝘦𝘢𝘥*_
_${usedPrefix + command} *𝘮𝘰𝘥𝘦𝘫𝘢𝘥𝘪𝘣𝘰𝘵*_`, m, fake, )
throw false
}
conn.reply(m.chat, `*${isEnable ? '❕' : '❗'} La función ${type} se a ${isEnable ? 'activado' : 'desactivado'} en ${isAll ? 'bot' : isUser ? '' : 'este chat.'}*`, m, fake, )

}
handler.help = ['en', 'dis'].map(v => v + 'able')
handler.tags = ['nable', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
