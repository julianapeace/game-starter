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
exports.replyToTweetFunction = exports.searchTweetsFunction = exports.postTweetFunction = exports.responseFunction = exports.helloFunction = void 0;
const game_1 = require("@virtuals-protocol/game");
exports.helloFunction = new game_1.GameFunction({
    name: "hello",
    description: "A verbose and creative greeting",
    args: [
        { name: "greeting", type: "string", description: "A verbose and creative greeting" },
    ],
    executable: (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            logger === null || logger === void 0 ? void 0 : logger(`Said Hello: ${args.greeting}`);
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Done, "Action completed successfully");
        }
        catch (e) {
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Failed, "Action failed");
        }
    }),
});
exports.responseFunction = new game_1.GameFunction({
    name: "response",
    description: "A verbose and creative response",
    args: [
        { name: "response", type: "string", description: "A verbose and creative response" },
    ],
    executable: (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            logger === null || logger === void 0 ? void 0 : logger(`Said Hello: ${args.response}`);
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Done, "Action completed successfully");
        }
        catch (e) {
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Failed, "Action failed");
        }
    }),
});
exports.postTweetFunction = new game_1.GameFunction({
    name: "post_tweet",
    description: "Post a tweet",
    args: [
        { name: "tweet", description: "The tweet content" },
        {
            name: "tweet_reasoning",
            description: "The reasoning behind the tweet",
        },
    ],
    executable: (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // TODO: Implement posting tweet
            // // Import Twitter API client if needed
            // const tweet = args.tweet;
            // // Basic validation
            // if (!tweet || tweet.length > 280) {
            //     throw new Error("Invalid tweet length");
            // }
            // // Example Twitter API call
            // const client = new TwitterApi({
            //     appKey: process.env.TWITTER_API_KEY,
            //     appSecret: process.env.TWITTER_API_SECRET,
            //     accessToken: process.env.TWITTER_ACCESS_TOKEN,
            //     accessSecret: process.env.TWITTER_ACCESS_SECRET,
            // });
            // await client.v2.tweet(tweet);
            // // For now just simulate posting
            // console.log("Would post tweet:", tweet);
            // logger(`Posting tweet: ${args.tweet}`);
            // logger(`Reasoning: ${args.tweet_reasoning}`);
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Done, "Tweet posted");
        }
        catch (e) {
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Failed, "Failed to post tweet");
        }
    }),
});
exports.searchTweetsFunction = new game_1.GameFunction({
    name: "search_tweets",
    description: "Search tweets and return results",
    args: [
        { name: "query", description: "The query to search for" },
        { name: "reasoning", description: "The reasoning behind the search" },
    ],
    executable: (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = args.query;
            // TODO: Implement searching of tweets based on query string
            logger(`Searching tweets for query: ${query}`);
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Done, "Tweets searched here are the results: [{tweetId: 1, content: 'Hello World'}, {tweetId: 2, content: 'Goodbye World'}]");
        }
        catch (e) {
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Failed, "Failed to search tweets");
        }
    }),
});
exports.replyToTweetFunction = new game_1.GameFunction({
    name: "reply_to_tweet",
    description: "Reply to a tweet",
    args: [
        { name: "tweet_id", description: "The tweet id to reply to" },
        { name: "reply", description: "The reply content" },
    ],
    executable: (args, logger) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tweetId = args.tweet_id;
            const reply = args.reply;
            // TODO: Implement reply tweet
            logger(`Replying to tweet ${tweetId}`);
            logger(`Replying with ${reply}`);
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Done, `Replied to tweet ${tweetId} with ${reply}`);
        }
        catch (e) {
            return new game_1.ExecutableGameFunctionResponse(game_1.ExecutableGameFunctionStatus.Failed, "Failed to reply to tweet");
        }
    }),
});
