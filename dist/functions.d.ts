import { GameFunction } from "@virtuals-protocol/game";
export declare const helloFunction: GameFunction<[{
    readonly name: "greeting";
    readonly type: "string";
    readonly description: "A verbose and creative greeting";
}]>;
export declare const responseFunction: GameFunction<[{
    readonly name: "response";
    readonly type: "string";
    readonly description: "A verbose and creative response";
}]>;
export declare const postTweetFunction: GameFunction<[{
    readonly name: "tweet";
    readonly description: "The tweet content";
}, {
    readonly name: "tweet_reasoning";
    readonly description: "The reasoning behind the tweet";
}]>;
export declare const searchTweetsFunction: GameFunction<[{
    readonly name: "query";
    readonly description: "The query to search for";
}, {
    readonly name: "reasoning";
    readonly description: "The reasoning behind the search";
}]>;
export declare const replyToTweetFunction: GameFunction<[{
    readonly name: "tweet_id";
    readonly description: "The tweet id to reply to";
}, {
    readonly name: "reply";
    readonly description: "The reply content";
}]>;
