
-- CreateTable
CREATE TABLE "public"."subscibtion_plan" (
    "id" TEXT NOT NULL,
    "name" UUID,
    "price" NUMERIC(8, 2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscibtion_plan_pkey" PRIMARY KEY ("id")
);