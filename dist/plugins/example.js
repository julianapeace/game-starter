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
const game_1 = require("@virtuals-protocol/game");
const telegramPlugin_1 = __importDefault(require("./telegramPlugin"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create a worker with the functions
// soil_health_bot
const telegramPlugin = new telegramPlugin_1.default({
    credentials: {
        botToken: process.env.botToken || '',
    },
});
telegramPlugin.onMessage((msg) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Custom message handler:', msg);
}));
telegramPlugin.onPollAnswer((pollAnswer) => {
    console.log('Custom poll answer handler:', pollAnswer);
    // You can process the poll answer as needed
});
/**
 * The agent will be able to send messages and pin messages automatically
 * Replace <API_TOKEN> with your API token
 */
const autoReplyAgent = new game_1.GameAgent(process.env.API_KEY || '', {
    name: "Telegram Bot",
    goal: "Auto reply message",
    description: "This agent will auto reply to messages",
    workers: [
        telegramPlugin.getWorker({
            // Define the functions that the worker can perform, by default it will use the all functions defined in the plugin
            functions: [
                telegramPlugin.sendMessageFunction,
                telegramPlugin.pinnedMessageFunction,
                telegramPlugin.unPinnedMessageFunction,
                telegramPlugin.createPollFunction,
                telegramPlugin.sendMediaFunction,
                telegramPlugin.deleteMessageFunction,
            ],
        }),
    ],
});
/**
 * Initialize the agent and start listening for messages
 * The agent will automatically reply to messages
 */
(() => __awaiter(void 0, void 0, void 0, function* () {
    autoReplyAgent.setLogger((autoReplyAgent, message) => {
        console.log(`-----[${autoReplyAgent.name}]-----`);
        console.log(message);
        console.log("\n");
    });
    yield autoReplyAgent.init();
    telegramPlugin.onMessage((msg) => __awaiter(void 0, void 0, void 0, function* () {
        const agentTgWorker = autoReplyAgent.getWorkerById(telegramPlugin.getWorker().id);
        const task = "Reply to chat id: " + msg.chat.id + " and the incoming is message: " + msg.text + " and the message id is: " + msg.message_id;
        yield agentTgWorker.runTask(task, {
            verbose: true, // Optional: Set to true to log each step
        });
    }));
}))();
/**
 * The agent is a Financial Advisor designed to provide financial advice and assistance
 */
const financialAdvisorAgent = new game_1.GameAgent(process.env.API_KEY || '', {
    name: "Financial Advisor Bot",
    goal: "Provide financial advice and assistance",
    description: "A smart bot designed to answer financial questions, provide investment tips, assist with budgeting, and manage financial tasks like pinning important messages or deleting outdated ones for better organization.",
    workers: [
        telegramPlugin.getWorker({
            // Define the functions that the worker can perform, by default it will use the all functions defined in the plugin
            functions: [
                telegramPlugin.sendMessageFunction,
                telegramPlugin.pinnedMessageFunction,
                telegramPlugin.unPinnedMessageFunction,
                telegramPlugin.createPollFunction,
                telegramPlugin.sendMediaFunction,
                telegramPlugin.deleteMessageFunction,
            ],
        }),
    ],
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    financialAdvisorAgent.setLogger((financialAdvisorAgent, message) => {
        console.log(`-----[${financialAdvisorAgent.name}]-----`);
        console.log(message);
        console.log("\n");
    });
    yield financialAdvisorAgent.init();
    telegramPlugin.onMessage((msg) => __awaiter(void 0, void 0, void 0, function* () {
        const agentTgWorker = financialAdvisorAgent.getWorkerById(telegramPlugin.getWorker().id);
        const task = "Reply to chat id: " + msg.chat.id + " and the incoming is message: " + msg.text + " and the message id is: " + msg.message_id;
        yield agentTgWorker.runTask(task, {
            verbose: true, // Optional: Set to true to log each step
        });
    }));
}))();
/**
 * The agent is a Nutritionist Bot designed for nutritional counseling and support
 */
// const nutritionistAgent = new GameAgent(process.env.API_KEY || '', {
//     name: "Nutritionist Bot",
//     goal: "Provide evidence-based information and guidance about the impacts of food and nutrition on the health and wellbeing of humans.",
//     description: "A smart bot designed to answer food and nutrition questions, provide personalized nutrition plans, nutritional counseling, motivate and support users in achieving their health goals.",
//     workers: [
//         telegramPlugin.getWorker({
//             // Define the functions that the worker can perform, by default it will use the all functions defined in the plugin
//             functions: [
//                 telegramPlugin.sendMessageFunction,
//                 telegramPlugin.pinnedMessageFunction,
//                 telegramPlugin.unPinnedMessageFunction,
//                 telegramPlugin.createPollFunction,
//                 telegramPlugin.sendMediaFunction,
//                 telegramPlugin.deleteMessageFunction,
//             ],
//         }),
//     ],
// });
// (async () => {
//     nutritionistAgent.setLogger((nutritionistAgent, message) => {
//         console.log(`-----[${nutritionistAgent.name}]-----`);
//         console.log(message);
//         console.log("\n");
//     });
//     await nutritionistAgent.init();
//     telegramPlugin.onMessage(async (msg) => {
//         const agentTgWorker = nutritionistAgent.getWorkerById(telegramPlugin.getWorker().id);
//         const task = "Reply professionally to chat id: " + msg.chat.id + " and the incoming is message: " + msg.text + " and the message id is: " + msg.message_id;
//         await agentTgWorker.runTask(task, {
//             verbose: true, // Optional: Set to true to log each step
//         });
//     });
// })();
