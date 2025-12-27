const { runAgent } = require("./agent");
export {};

const invoicePath = process.argv[2] || "./data/invoice1.json";
const memoryPath = "./data/memory.json";

const output = runAgent(invoicePath, memoryPath);
console.log(JSON.stringify(output, null, 2));
