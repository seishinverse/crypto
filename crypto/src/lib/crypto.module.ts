import { DynamicModule } from '@nestjs/common';
import { CRYPTO } from './crypto.decorator';
import { CryptoService } from './crypto.service';

/**
 * Options for configuring the CryptoModule.
 *
 * @remarks
 * These options are used to customize the behavior of the CryptoModule.
 *
 * @example
 * ```typescript
 * // Example usage of CryptoModuleOptions
 * const options: CryptoModuleOptions = {
 *   isGlobal: true,
 * };
 * ```
 */
interface CryptoModuleOptions {
  /**
   * Indicates whether the CryptoModule should be registered globally.
   *
   * @remarks
   * If set to `true`, the CryptoModule will be available globally.
   * If set to `false`, the CryptoModule will be scoped to its containing module.
   */
  isGlobal: boolean;
}

/**
 * Module for handling cryptographic operations.
 *
 * @remarks
 * This module provides functionality related to cryptography and can be configured using the `forRoot` method.
 * By default the module will be set as global module
 */
export class CryptoModule {
  /**
   * Configure the CryptoModule.
   *
   * @param options - Options for configuring the CryptoModule.
   * @returns A dynamic module with the configured CryptoModule.
   *
   * @remarks
   * The `forRoot` method allows configuration of the CryptoModule with the provided options.
   *
   * @example
   * ```typescript
   * // Example usage of forRoot method
   *   imports: [CryptoModule.forRoot({ isGlobal: true })]
   * ```
   */
  static forRoot(options: CryptoModuleOptions): DynamicModule {
    const providers = [
      {
        provide: CRYPTO,
        useValue: new CryptoService(),
      },
    ];

    return {
      module: CryptoModule,
      providers,
      exports: providers,
      ...(options && Object.getOwnPropertyNames(options).includes('isGlobal')
        ? { global: options.isGlobal }
        : { global: true }),
    };
  }
}
