/**
 * A module for handling cryptographic operations.
 *
 * @remarks
 * This module exports 'CryptoModule' to import it NestJS module
 *
 * @example
 * ```typescript
 * // Example import of CryptoModule
 * import { CryptoModule } from '@seishinverse/crypto';
 * ```
 */
export * from './lib/crypto.module';

/**
 * A service for handling cryptographic operations.
 *
 * @remarks
 * This service provides methods for hashing, comparing, and generating salt for cryptographic operations.
 *
 * @example
 * ```typescript
 * // Example import of CryptoService
 * import { CryptoService } from '@seishinverse/crypto';
 * ```
 */
export * from './lib/crypto.service';

/**
 * Imports 'InjectCrypto' decorator and 'CRYPTO' provider name to inject 'CryptoService'
 *
 * @example
 * ```typescript
 * // Example import of CryptoDecorator
 * import { InjectCrypto, CRYPTO } from '@seishinverse/crypto';
 * ```
 */
export * from './lib/crypto.decorator';
