import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

/**
 * CommonJS: __dirname e __filename já vêm prontos.
   ESM: usar fileURLToPath(import.meta.url) + dirname() para montar caminhos relativos ao arquivo atual.
 */

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const filePath = join(__dirname, '..', 'assets', 'texto.txt')

fs.readFile(filePath, 'utf-8', (err, texto) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(texto)
})