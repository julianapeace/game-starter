import { GameWorker } from "@virtuals-protocol/game";
import { helloFunction, responseFunction, searchTweetsFunction, replyToTweetFunction, postTweetFunction } from "./functions";

export const chatWorker = new GameWorker({
    id: "chat_worker",
    name: "chat worker",
    description: "has the ability to start a chat by say hello, then waiting for a response, then responds accordingly",
    functions: [helloFunction, responseFunction],
    getEnvironment: async () => {
        return {
            status: 'friendly',
            // Add any environment variables your worker needs
            someLimit: 10,
        };
    },
});

export const postTweetWorker = new GameWorker({
    id: "twitter_main_worker",
    name: "Twitter main worker",
    description: "Worker that posts tweets",
    functions: [searchTweetsFunction, replyToTweetFunction, postTweetFunction],
    // Optional: Provide environment to LLP
    getEnvironment: async () => {
        return {
            tweet_limit: 15,
        };
    },
});

export const horoscopeWorker = new GameWorker({
    id: "horoscope_worker",
    name: "Horoscope worker",
    description: "Worker that tells your horoscope",
    functions: [searchTweetsFunction, replyToTweetFunction, postTweetFunction],
    // Optional: Provide environment to LLP
    getEnvironment: async () => {
        return {
            tweet_limit: 15,
        };
    },
})


