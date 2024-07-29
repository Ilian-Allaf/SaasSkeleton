CREATE TABLE "public"."team" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);
