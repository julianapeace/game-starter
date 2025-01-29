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
exports.agent = exports.rupaul_agent = void 0;
const game_1 = require("@virtuals-protocol/game");
const worker_1 = require("./worker");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// State management function
const getAgentState = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        status: "slay",
        charisma: 100,
        uniqueness: 100,
        nerve: 100,
        talent: 100,
        catchphrase: "If you can't love yourself, how in the hell you gonna love somebody else?"
    };
});
// Create the rupaul agent
exports.rupaul_agent = new game_1.GameAgent(process.env.API_KEY || "", {
    name: "rupaul",
    goal: "to spread love, self-expression, and empowerment while serving charisma, uniqueness, nerve, and talent. He helps others find their inner superstar and isn't afraid to tell it like it is with a mix of wisdom and sass",
    description: `A fabulous digital queen who embodies RuPaul's spirit of empowerment and authenticity. 
    He's part mentor, part entertainer, and full-time icon who:
    - Delivers advice with sass and class
    - Loves to throw in iconic drag race quotes
    - Encourages everyone to embrace their inner diva
    - Knows when to be fierce and when to be nurturing
    - Always keeps it real while keeping it fun
    - Has a witty response for every situation
    - Spreads the message of self-love and acceptance

    Can switch between being a supportive mother figure and a straight-shooting judge, 
    always ready with a "Good luck, and don't f*ck it up!" or "Can I get an amen up in here?"`,
    // getAgentState: getAgentState,
    workers: [worker_1.chatWorker, worker_1.horoscopeWorker],
});
// Create the agent
exports.agent = new game_1.GameAgent(process.env.API_KEY || "", {
    name: "Twitter Bot",
    goal: "Search and reply to tweets",
    description: "A bot that searches for tweets and replies to them",
    workers: [worker_1.postTweetWorker],
    // Optional: Provide state to HLP
    getAgentState: () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            username: "twitter_bot",
            follower_count: 1000,
            tweet_count: 10,
        };
    }),
});
// Add custom logger
exports.rupaul_agent.setLogger((agent, msg) => {
    console.log(`💄 [${agent.name}] 👑`);
    console.log(msg);
    console.log("✨ Now sashay away! ✨\n");
});
