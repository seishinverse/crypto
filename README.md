# Crypto

Compact and fast crypto library for hashing and comparing hashes.

### Installation

```sh
npm i @seishinverse/crypto

# or with yarn
yarn add @seishinverse/crypto

# or with pnpm
pnpm i @seishinverse/crypto
```
### Documentation
- https://seishinverse.github.io/crypto/

### Example of usage for NestJS

In first import `CryptoModule` in `AppModule`.

```typescript
import { CryptoModule } from '@seishinverse/crypto';
import { Module } from '@nestjs/common';

@Module({
  imports: [CryptoModule.forRoot()],
})
export class AppModule {}
```

Then inject service with decorator `InjectCrypto`.

```typescript
import { CryptoModule, InjectCrypto, CryptoService } from '@seishinverse/crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@InjectCrypto() private cryptoService: CryptoService) {}

  /*
    Generating salt and hashing password.
  */
  signUp() {
    const SALT_ROUNDS = 5;
    const hashSalt = this.cryptoService.genSalt(SALT_ROUNDS);
    const hashedPassword = this.cryptoService.hash('very secret pass!', hashSalt);
    // ...
  }

  /*
    Comparing current password with incoming.
  */
  signIn() {
    const currentPassword = 'very secret pass!';
    const incomingPassword = 'not secret pass:(';

    const isPasswordEqual = this.cryptoService.compare(incomingPassword, currentPassword);

    console.log(isPasswordEqual); // false
  }
}
```

### Example of usage in NodeJS

Import `CryptoService` and initialize it.

```typescript
import { CryptoService } from '@seishinverse/crypto';

const cryptoService = new CryptoService();

/*
  Generating salt and hashing password.
*/
const SALT_ROUNDS = 5;
const hashSalt = this.cryptoService.genSalt(SALT_ROUNDS);
const hashedPassword = this.cryptoService.hash('very secret pass!', hashSalt);
/*
  Comparing current password with incoming.
*/
const currentPassword = hashedPassword;
const incomingPassword = 'not secret pass:(';

const isPasswordEqual = this.cryptoService.compare(incomingPassword, currentPassword);

console.log(isPasswordEqual); // false
```
