# create-jwt-sample
simple example of jwt creation

## Requirements
- nodejs ^10.12

## Init
1. 
```
cp .env-sample .env
```
2. `npm install`
3. Generate JWT RS256 key (Don't add passphrase):
```
   ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
   openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
   cat jwtRS256.key
   cat jwtRS256.key.pub
  ```
4. Put created keys to the src/ folder or use them as environment variables. The choice of how variables are delivered to the application
   is up to the developer. Popular ways:
    - `set -o allexport; source .env; set +o allexport $command_requiring__env_variables` (ex: `set -o allexport; source .env; set +o allexport && node index.js`)
    - `direnv` util

## Local run
1. `npm run dev` - to run jwt creation example
