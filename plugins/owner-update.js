import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
  await m.reply(`🚀 𝑼𝑷𝑫𝑨𝑻𝑬 | 𝑨𝑪𝑻𝑼𝑨𝑳𝑰𝒁𝑨𝑹`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await conn.reply(m.chat, stdout.toString(), m)
    }
  } catch {
    var update = execSync("https://github.com/Enzito-Vase/DiabloBot-MD- && git pull")
    await await await m.reply(update.toString())
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler
