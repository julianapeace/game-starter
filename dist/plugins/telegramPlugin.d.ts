import { GameWorker, GameFunction } from "@virtuals-protocol/game";
interface ITelegramPluginOptions {
    id?: string;
    name?: string;
    description?: string;
    credentials: {
        botToken: string;
    };
}
declare class TelegramPlugin {
    private id;
    private name;
    private description;
    private telegramClient;
    constructor(options: ITelegramPluginOptions);
    onMessage(handler: (msg: any) => void): void;
    onPollAnswer(handler: (pollAnswer: any) => void): void;
    getWorker(data?: {
        id?: string;
        functions?: GameFunction<any>[];
        getEnvironment?: () => Promise<Record<string, any>>;
    }): GameWorker;
    /**
     * Function to send a text message to a chat.
     * Requires the chat_id and text to send the message.
     */
    get sendMessageFunction(): GameFunction<[{
        readonly name: "chat_id";
        readonly description: "Unique identifier for the target chat or username of the target channel";
        readonly type: "string";
    }, {
        readonly name: "text";
        readonly description: "Message text to send. Should be contextually relevant and maintain conversation flow.";
        readonly type: "string";
    }]>;
    /**
     * Function to send media (photo, document, video, audio) to a chat.
     * Requires the chat_id, media_type, and media to send the media content.
     * Optionally, a caption can be added to provide context or explanation.
     */
    get sendMediaFunction(): GameFunction<[{
        readonly name: "chat_id";
        readonly description: "Target chat identifier where media will be sent.";
        readonly type: "string";
    }, {
        readonly name: "media_type";
        readonly description: "Type of media to send: 'photo', 'document', 'video', 'audio'. Choose appropriate type for content.";
        readonly type: "string";
    }, {
        readonly name: "media";
        readonly description: "File ID or URL of the media to send. Ensure content is appropriate and relevant.";
        readonly type: "string";
    }, {
        readonly name: "caption";
        readonly description: "Optional text caption accompanying the media. Should provide context or explanation when needed, or follows up the conversation.";
        readonly type: "string";
    }]>;
    /**
     * Function to create a poll in a chat.
     * Requires the chat_id, question, and options to create the poll.
     * Optionally, is_anonymous can be set to true to make poll responses anonymous.
     */
    get createPollFunction(): GameFunction<[{
        readonly name: "chat_id";
        readonly description: "Chat where the poll will be created";
        readonly type: "string";
    }, {
        readonly name: "question";
        readonly description: "Main poll question. Should be clear and specific.";
        readonly type: "string";
    }, {
        readonly name: "options";
        readonly description: "List of answer options. Make options clear and mutually exclusive.";
        readonly type: "string";
    }, {
        readonly name: "is_anonymous";
        readonly description: "Whether poll responses are anonymous. Consider privacy and group dynamics.";
        readonly type: "boolean";
    }]>;
    /**
     * Function to pin a message in a chat.
     * Requires the chat_id and message_id to identify the message to pin.
     * Optionally, disable_notification can be set to true to avoid sending a notification about the pinned message.
     */
    get pinnedMessageFunction(): GameFunction<[{
        readonly name: "chat_id";
        readonly description: "Chat where the message will be pinned";
        readonly type: "string";
    }, {
        readonly name: "message_id";
        readonly description: "ID of the message to pin. Ensure message contains valuable information worth pinning.";
        readonly type: "number";
    }, {
        readonly name: "disable_notification";
        readonly description: "Whether to send notification about pinned message. Consider group size and message importance.";
        readonly type: "boolean";
    }]>;
    /**
     * Function to unpin a message from a chat.
     * Requires the chat_id and message_id to identify the message to unpin.
     */
    get unPinnedMessageFunction(): GameFunction<[{
        readonly name: "chat_id";
        readonly description: "Chat where the message will be unpinned";
        readonly type: "string";
    }, {
        readonly name: "message_id";
        readonly description: "ID of the message to unpin. Ensure message contains valuable information worth pinning.";
        readonly type: "number";
    }, {
        readonly name: "disable_notification";
        readonly description: "Whether to send notification about pinned message. Consider group size and message importance.";
        readonly type: "boolean";
    }]>;
    /**
     * Function to delete a message from a chat.
     * Requires the chat_id and message_id to identify the message to delete.
     */
    get deleteMessageFunction(): GameFunction<[{
        readonly name: "chat_id";
        readonly description: "Chat containing the messages to delete";
        readonly type: "string";
    }, {
        readonly name: "message_id";
        readonly description: "ID of the messages to delete. Consider impact before deletion.";
        readonly type: "string";
    }]>;
}
export default TelegramPlugin;
