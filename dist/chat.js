"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("✨ Welcome to RuPaul's Chat Race! Type your message (or 'exit' to quit) ✨\n");
const chat = () => {
    rl.question('You: ', (input) => __awaiter(void 0, void 0, void 0, function* () {
        if (input.toLowerCase() === 'exit') {
            console.log('Sashay away! 👋');
            rl.close();
            return;
        }
        try {
            const response = yield agent_1.rupaul_agent.chat(input);
            console.log(`\nRuPaul: ${response}\n`);
        }
        catch (error) {
            console.error('Error:', error);
        }
        chat(); // Continue the conversation
    }));
};
chat();
