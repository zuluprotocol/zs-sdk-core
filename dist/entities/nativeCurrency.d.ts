import { BaseCurrency } from './baseCurrency';
import { Currency } from './currency';
import { Token } from './token';
/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
export declare class NativeCurrency extends BaseCurrency {
    readonly isNative: true;
    readonly isToken: false;
    constructor(chainId: number, decimals: number, symbol?: string, name?: string);
    get wrapped(): Token;
    equals(other: Currency): boolean;
}
