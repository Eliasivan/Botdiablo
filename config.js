import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [
  
  ['5491168758497',👑𝘊𝘓𝘌𝘈𝘛𝘖𝘙👑, true], ['593939005387', '𝙹𝙾𝚂𝚃𝙸𝙽 𝙴𝙳𝙸𝚃𝙾𝚁 𝙾𝙵𝙲', true], ['573027866596', '𝙴𝙳𝙴𝚁 𝙳𝙴𝚂𝙰𝚁𝚁𝙾𝙻𝙻𝙰𝙳𝙾𝚁 𝙾𝙵𝙲', true], ['51929972576', '𝙰𝚇𝙴𝙻 𝙾𝙵𝙲', true],
                
                
  ['5492215034412', '𝙴𝙳𝙸𝚃𝙾𝚁 GOD'], ['525620110578', 'GRANDE'], ['595981477001', '𝙳𝙾𝙽𝙰𝙳𝙾𝚁']
               ]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +5491168758497
global.confirmCode = ''

global.animxscans = ['5214531287294']
global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = '© 𝙳𝙸𝙰𝙱𝙻𝙾𝙱𝙾𝚃'
global.author = 'Created By 𝘌𝘯𝘻𝘰'
global.wm = '© 𝙳𝚒𝚊𝚋𝚕𝚘𝙱𝚘𝚝-𝙼𝙳
global.wm2 = '𝘋𝘪𝘢𝘣𝘭𝘰 : 𝘉𝘰𝘵 '
global.azami = 'Enzo'
global.cb = '𝙳𝙸𝙰𝙱𝙻𝙾𝙱𝙾𝚃-𝙼𝙳'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𝙳𝙸𝙰𝙱𝙻𝙾𝙱𝙾𝚃-𝙼𝙳'
global.devnum = '+52 1 729 488 8993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
