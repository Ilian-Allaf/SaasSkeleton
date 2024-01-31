
-- CreateTable
CREATE TABLE "public"."language" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "language_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "public"."text_content" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "text_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."translation" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "text_content_id" UUID NOT NULL,
    "language" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "translation_pkey" PRIMARY KEY ("id")

);
ALTER TABLE "public"."translation" ADD CONSTRAINT "translation_language_fkey" FOREIGN KEY ("language") REFERENCES "public"."language"("code") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."translation" ADD CONSTRAINT "translation_text_content_fkey" FOREIGN KEY ("text_content_id") REFERENCES "public"."text_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;