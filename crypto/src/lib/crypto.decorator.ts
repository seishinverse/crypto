import { Inject } from '@nestjs/common';

/**
 *  A symbol representing name of provider
 *
 * @remarks
 * This symbol is used for injecting 'CryptoService'
 */
export const CRYPTO = Symbol('CRYPTO');
/**
 * A decorator to inject provider
 * @remarks
 * This decorator is used to inject 'CryptoService'
 */
export const InjectCrypto = () => Inject(CRYPTO);
