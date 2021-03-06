## API Report File for "@azure/communication-chat"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ChatMessageDeletedEvent } from '@azure/communication-signaling';
import { ChatMessageEditedEvent } from '@azure/communication-signaling';
import { ChatMessageReceivedEvent } from '@azure/communication-signaling';
import { CommunicationTokenCredential } from '@azure/communication-common';
import { CommunicationUserIdentifier } from '@azure/communication-common';
import * as coreHttp from '@azure/core-http';
import { HttpResponse } from '@azure/core-http';
import { OperationOptions } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PipelineOptions } from '@azure/core-http';
import { ReadReceiptReceivedEvent } from '@azure/communication-signaling';
import { TypingIndicatorReceivedEvent } from '@azure/communication-signaling';

// @public
export type AddMembersOptions = OperationOptions;

// @public
export interface AddMembersRequest extends Omit<RestAddMembersRequest, "members"> {
    members: ChatThreadMember[];
}

// @public
export class ChatClient {
    constructor(url: string, credential: CommunicationTokenCredential, options?: ChatClientOptions);
    createChatThread(request: CreateChatThreadRequest, options?: CreateChatThreadOptions): Promise<ChatThreadClient>;
    deleteChatThread(threadId: string, options?: DeleteChatThreadOptions): Promise<OperationResponse>;
    getChatThread(threadId: string, options?: GetChatThreadOptions): Promise<GetChatThreadResponse>;
    getChatThreadClient(threadId: string): Promise<ChatThreadClient>;
    listChatThreads(options?: ListChatThreadsOptions): PagedAsyncIterableIterator<ChatThreadInfo>;
    off(event: "chatMessageReceived", listener: (e: ChatMessageReceivedEvent) => void): void;
    off(event: "chatMessageEdited", listener: (e: ChatMessageEditedEvent) => void): void;
    off(event: "chatMessageDeleted", listener: (e: ChatMessageDeletedEvent) => void): void;
    off(event: "typingIndicatorReceived", listener: (e: TypingIndicatorReceivedEvent) => void): void;
    off(event: "readReceiptReceived", listener: (e: ReadReceiptReceivedEvent) => void): void;
    on(event: "chatMessageReceived", listener: (e: ChatMessageReceivedEvent) => void): void;
    on(event: "chatMessageEdited", listener: (e: ChatMessageEditedEvent) => void): void;
    on(event: "chatMessageDeleted", listener: (e: ChatMessageDeletedEvent) => void): void;
    on(event: "typingIndicatorReceived", listener: (e: TypingIndicatorReceivedEvent) => void): void;
    on(event: "readReceiptReceived", listener: (e: ReadReceiptReceivedEvent) => void): void;
    startRealtimeNotifications(): Promise<void>;
    stopRealtimeNotifications(): Promise<void>;
    }

// @public
export interface ChatClientOptions extends PipelineOptions {
}

// @public
export interface ChatMessage extends Omit<RestChatMessage, "senderId"> {
    sender?: CommunicationUserIdentifier;
}

// @public
export type ChatMessagePriority = "Normal" | "High";

// @public
export interface ChatThread extends Omit<RestChatThread, "createdBy" | "members"> {
    readonly createdBy?: CommunicationUserIdentifier;
    members?: ChatThreadMember[];
}

// @public
export class ChatThreadClient {
    constructor(threadId: string, url: string, credential: CommunicationTokenCredential, options?: ChatThreadClientOptions);
    addMembers(request: AddMembersRequest, options?: AddMembersOptions): Promise<OperationResponse>;
    deleteMessage(messageId: string, options?: DeleteMessageOptions): Promise<OperationResponse>;
    dispose(): void;
    getMessage(messageId: string, options?: GetMessageOptions): Promise<GetChatMessageResponse>;
    listMembers(options?: ListMembersOptions): PagedAsyncIterableIterator<ChatThreadMember>;
    listMessages(options?: ListMessagesOptions): PagedAsyncIterableIterator<ChatMessage>;
    listReadReceipts(options?: ListReadReceiptsOptions): PagedAsyncIterableIterator<ReadReceipt>;
    removeMember(member: CommunicationUserIdentifier, options?: RemoveMemberOptions): Promise<OperationResponse>;
    sendMessage(request: SendMessageRequest, options?: SendMessageOptions): Promise<SendChatMessageResponse>;
    sendReadReceipt(request: SendReadReceiptRequest, options?: SendReadReceiptOptions): Promise<OperationResponse>;
    sendTypingNotification(options?: SendTypingNotificationOptions): Promise<boolean>;
    readonly threadId: string;
    updateMessage(messageId: string, options?: UpdateMessageOptions): Promise<OperationResponse>;
    updateThread(options?: UpdateThreadOptions): Promise<OperationResponse>;
    }

// @public
export interface ChatThreadClientOptions extends ChatClientOptions {
}

// @public (undocumented)
export interface ChatThreadInfo {
    readonly id?: string;
    isDeleted?: boolean;
    readonly lastMessageReceivedOn?: Date;
    topic?: string;
}

// @public
export interface ChatThreadMember extends Omit<RestChatThreadMember, "id"> {
    user: CommunicationUserIdentifier;
}

// @public
export type CreateChatThreadOptions = OperationOptions;

// @public
export interface CreateChatThreadRequest extends Omit<RestCreateChatThreadRequest, "members"> {
    members: ChatThreadMember[];
}

// @public
export type DeleteChatThreadOptions = OperationOptions;

// @public
export type DeleteMessageOptions = OperationOptions;

// @public
export type GetChatMessageResponse = WithResponse<ChatMessage>;

// @public
export type GetChatThreadOptions = OperationOptions;

// @public
export type GetChatThreadResponse = WithResponse<ChatThread>;

// @public
export type GetMessageOptions = OperationOptions;

// @public
export type ListChatThreadsOptions = RestListChatThreadsOptions;

// @public
export type ListMembersOptions = OperationOptions;

// @public
export type ListMessagesOptions = RestListMessagesOptions;

// @public
export interface ListPageSettings {
    continuationToken?: string;
}

// @public
export type ListReadReceiptsOptions = OperationOptions;

// @public
export interface OperationResponse {
    _response: HttpResponse;
}

// @public
export interface ReadReceipt extends Omit<RestReadReceipt, "senderId"> {
    readonly sender?: CommunicationUserIdentifier;
}

// @public
export type RemoveMemberOptions = OperationOptions;

// @public
export interface RestAddMembersRequest {
    members: RestChatThreadMember[];
}

// @public (undocumented)
export interface RestChatMessage {
    content?: string;
    readonly createdOn?: Date;
    deletedOn?: Date;
    editedOn?: Date;
    readonly id?: string;
    priority?: ChatMessagePriority;
    senderDisplayName?: string;
    readonly senderId?: string;
    type?: string;
    readonly version?: string;
}

// @public (undocumented)
export interface RestChatThread {
    readonly createdBy?: string;
    readonly createdOn?: Date;
    readonly id?: string;
    members?: RestChatThreadMember[];
    topic?: string;
}

// @public
export interface RestChatThreadMember {
    displayName?: string;
    id: string;
    shareHistoryTime?: Date;
}

// @public
export interface RestCreateChatThreadRequest {
    members: RestChatThreadMember[];
    topic: string;
}

// @public
export interface RestListChatThreadsOptions extends coreHttp.OperationOptions {
    maxPageSize?: number;
    startTime?: Date;
}

// @public
export interface RestListMessagesOptions extends coreHttp.OperationOptions {
    maxPageSize?: number;
    startTime?: Date;
}

// @public
export interface RestReadReceipt {
    readonly chatMessageId?: string;
    readonly readOn?: Date;
    readonly senderId?: string;
}

// @public (undocumented)
export interface RestUpdateMessageOptions {
    content?: string;
    priority?: ChatMessagePriority;
}

// @public (undocumented)
export interface RestUpdateThreadOptions {
    topic?: string;
}

// @public
interface SendChatMessageRequest {
    content: string;
    priority?: ChatMessagePriority;
    senderDisplayName?: string;
}

export { SendChatMessageRequest as RestSendMessageOptions }

export { SendChatMessageRequest as RestSendMessageRequest }

// @public
export type SendChatMessageResponse = WithResponse<SendChatMessageResult>;

// @public
export interface SendChatMessageResult {
    readonly id?: string;
}

// @public
export interface SendMessageOptions extends Omit<SendChatMessageRequest, "content">, OperationOptions {
}

// @public
export interface SendMessageRequest extends Omit<SendChatMessageRequest, "priority" | "senderDisplayName"> {
}

// @public
export type SendReadReceiptOptions = OperationOptions;

// @public
export interface SendReadReceiptRequest {
    chatMessageId: string;
}

// @public
export type SendTypingNotificationOptions = OperationOptions;

// @public
export interface UpdateMessageOptions extends RestUpdateMessageOptions, OperationOptions {
}

// @public
export interface UpdateThreadOptions extends RestUpdateThreadOptions, OperationOptions {
}

// @public
export type WithResponse<T> = T & {
    _response: HttpResponse;
};


// (No @packageDocumentation comment for this package)

```
