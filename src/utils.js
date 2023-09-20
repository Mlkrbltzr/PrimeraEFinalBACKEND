import path from "path"
import { fileURLToPath } from "url"

//const __filename = fileURLToPath(import.meta.url)   esto es del primer avance y se modifica en el 1849 junto con el export default __dirname
//const __dirname = path.dirname(__filename)

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename)

export default __dirname