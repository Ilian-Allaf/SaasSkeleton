CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "auth"."user" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "subsciption_plan_id" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "email" TEXT NOT NULL,
    "updated_email" TEXT,
    "active" BOOLEAN DEFAULT false,
    "role" TEXT NOT NULL DEFAULT 'user',
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "user_email_key" ON "auth"."user"("email");
ALTER TABLE "auth"."user" ADD CONSTRAINT "user_subsciption_plan_id_fkey" FOREIGN KEY ("subsciption_plan_id") REFERENCES "public"."subscibtion_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "auth"."account" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "user_id" UUID,
    "type" TEXT,
    "provider" TEXT,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INT,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "account_provider_id_provider_account_id_key" ON "auth"."account"("provider", "provider_account_id");
ALTER TABLE "auth"."account" ADD CONSTRAINT "account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- CreateTable
CREATE TABLE "auth"."session" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "user_id" UUID NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "session_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "session_session_token_key" ON "auth"."session"("session_token");
CREATE UNIQUE INDEX "session_access_token_key" ON "auth"."session"("access_token");
ALTER TABLE "auth"."session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- CreateTable
CREATE TABLE "auth"."activate_token" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activated_at" TIMESTAMP(3),

    CONSTRAINT "activate_token_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "activate_token_token_key" ON "auth"."activate_token"("token");
ALTER TABLE "auth"."activate_token" ADD CONSTRAINT "activate_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "auth"."password_reset_token" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reset_at" TIMESTAMP(3),    

    CONSTRAINT "password_reset_token_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "password_reset_token_token_key" ON "auth"."password_reset_token"("token");
ALTER TABLE "auth"."password_reset_token" ADD CONSTRAINT "password_reset_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

