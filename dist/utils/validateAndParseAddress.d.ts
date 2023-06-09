import { ChainId } from '../entities/chain';
/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
export declare function validateAndParseAddress(address: string, chainId: ChainId): string;
