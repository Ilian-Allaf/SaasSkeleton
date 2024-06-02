# Pull Frontend
After pulling the frontend run this command:

```bash
./load.sh
```

# Update Prisma Schema
### Step 1:
Update the schema in hasura migration files

### Step 2:
Run this command in `TeamUp/Front` to pull the authentication schema from the database:

```bash
dotenv -e .env npx prisma db pull --url $POSTGRES_URL
```

Run this to generate the prisma client using the new pulled schema:
(Make sure that the frontend is not running)
```bash
npx prisma generate
```

# Generate asymetric public/private key for hasura JWT

## Step 1: Generate

Run those commands:

```bash
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

```bash
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

## Step 2: Format

Formate both keys by CTRL F
```mp
Find: \n
Replace: \\n
```
There should be `\n` at the end of the line 

Then you can replace environement variable value.


## Stripe CLI:

```sh
stripe listen --forward-to localhost:3000/webhooks
```
