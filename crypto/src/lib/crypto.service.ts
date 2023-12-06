import { randomBytes, createHmac } from 'crypto';

/**
 * Service for handling cryptographic operations.
 *
 * @remarks
 * This service provides methods for hashing, comparing, and generating salt for cryptographic operations.
 */
export class CryptoService {
  /**
   * Generate a hashed value using SHA-512 algorithm with an optional salt.
   *
   * @param value - The value to be hashed.
   * @param salt - An optional salt value. If not provided, a random salt will be generated.
   * @returns The hashed value appended with the salt.
   *
   * @remarks
   * This method uses the SHA-512 algorithm to hash the input value with the provided or generated salt.
   *
   * @example
   * ```typescript
   * // Example usage of hash method
   * const salt = cryptoService.genSalt(8)
   * const hashedValue = cryptoService.hash('mySecretValue', salt);
   * ```
   */
  hash(value: string, salt?: string) {
    if (!salt) {
      salt = this.genSalt(5);
    }
    if (typeof salt == 'number') {
      salt = this.genSalt(salt);
    }
    const generatedHash = createHmac('sha512', salt);
    generatedHash.update(value);
    return generatedHash.digest('hex') + `:${salt}`;
  }

  /**
   * Compare a value with a hashed value.
   *
   * @param value - The value to compare.
   * @param hash - The hashed value to compare against.
   * @returns `true` if the values match, `false` otherwise.
   *
   * @remarks
   * This method compares a plain text value with a hashed value by rehashing the plain text value
   * with the salt extracted from the hashed value.
   *
   * @example
   * ```typescript
   * // Example usage of compare method
   * const hashedValue = 'value:salt'
   * const isMatch = cryptoService.compare('mySecretValue', hashedValue);
   * ```
   */
  compare(value: string, hash: string) {
    const oldHash = hash.split(':');
    const salt = oldHash[1];
    const hashedNewValue = this.hash(value, salt);
    return hashedNewValue == hash;
  }

  /**
   * Generate a random salt value of the specified number of rounds.
   *
   * @param rounds - The number of rounds to generate the salt.
   * @returns The generated salt value.
   *
   * @remarks
   * This method generates a random salt value using the crypto module.
   *
   * @example
   * ```typescript
   * // Example usage of genSalt method
   * const randomSalt = cryptoService.genSalt(10);
   * ```
   */
  genSalt(rounds: number) {
    return randomBytes(Math.ceil(rounds / 2))
      .toString('hex')
      .slice(0, rounds);
  }
}
