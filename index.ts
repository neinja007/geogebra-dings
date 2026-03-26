import { elements } from "./lib/commands"

const commandlist = elements.map((element) => element.name)

console.log(commandlist.join(", "))
