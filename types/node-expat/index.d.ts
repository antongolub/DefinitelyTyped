// Type definitions for node-expat 2.3
// Project: https://github.com/astro/node-expat
// Definitions by: winston01 <https://github.com/winston01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />
import {
    Stream
} from 'stream';

export class Parser extends Stream {
    constructor(encoding?: string);

    // encoding: string;
    // Stream API
    writable: boolean;
    readable: boolean;

    _getNewParser(): Parser;
    // emit(): Function;

    parse(buf: Buffer | string, isFinal?: boolean): boolean;

    setEncoding(encoding: string): void;

    setUnknownEncoding(map: number[], convert?: string): void;

    getError(): string;

    stop(): void;
    pause(): void;
    resume(): void;

    destroy(): this;

    destroySoon(): void;

    write(data: Buffer | string): boolean;

    end(cb?: () => void): this;
    end(chunk: any, cb?: () => void): this;
    end(chunk: any, encoding: string, cb?: () => void): this;

    reset(): void;

    getCurrentLineNumber(): number;
    getCurrentColumnNumber(): number;
    getCurrentByteIndex(): number;
}

export function createParser(cb?: (...args: any[]) => void): Parser;
