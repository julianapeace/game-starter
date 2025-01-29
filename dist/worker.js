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
Object.defineProperty(exports, "__esModule", { value: true });
exports.horoscopeWorker = exports.postTweetWorker = exports.chatWorker = void 0;
const game_1 = require("@virtuals-protocol/game");
const functions_1 = require("./functions");
exports.chatWorker = new game_1.GameWorker({
    id: "chat_worker",
    name: "chat worker",
    description: "has the ability to start a chat by say hello, then waiting for a response, then responds accordingly",
    functions: [functions_1.helloFunction, functions_1.responseFunction],
    getEnvironment: () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            status: 'friendly',
            // Add any environment variables your worker needs
            someLimit: 10,
        };
    }),
});
exports.postTweetWorker = new game_1.GameWorker({
    id: "twitter_main_worker",
    name: "Twitter main worker",
    description: "Worker that posts tweets",
    functions: [functions_1.searchTweetsFunction, functions_1.replyToTweetFunction, functions_1.postTweetFunction],
    // Optional: Provide environment to LLP
    getEnvironment: () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            tweet_limit: 15,
        };
    }),
});
exports.horoscopeWorker = new game_1.GameWorker({
    id: "horoscope_worker",
    name: "Horoscope worker",
    description: "Worker that tells your horoscope",
    functions: [functions_1.searchTweetsFunction, functions_1.replyToTweetFunction, functions_1.postTweetFunction],
    // Optional: Provide environment to LLP
    getEnvironment: () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            tweet_limit: 15,
        };
    }),
});
