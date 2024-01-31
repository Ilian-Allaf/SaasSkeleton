
-- CreateTable
CREATE TABLE "public"."subscribtion_plan" (
    "name" TEXT NOT NULL UNIQUE,
    "id" TEXT NOT NULL UNIQUE,
    "text_content_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscribtion_plan_pkey" PRIMARY KEY ("name")
);
ALTER TABLE "public"."subscribtion_plan" ADD CONSTRAINT "subscribtion_plan_text_content_fkey" FOREIGN KEY ("text_content_id") REFERENCES "public"."text_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "public"."subscribtion_feature" (
    "name" TEXT NOT NULL UNIQUE,
    "text_content_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscribtion_feature_pkey" PRIMARY KEY ("name")

);
ALTER TABLE "public"."subscribtion_feature" ADD CONSTRAINT "subscribtion_feature_text_content_fkey" FOREIGN KEY ("text_content_id") REFERENCES "public"."text_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- CreateTable
CREATE TABLE "public"."subscribtion_plan_subscribtion_feature_assoc" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL UNIQUE,
    "subscribtion_plan" TEXT NOT NULL,
    "subscribtion_feature" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscribtion_plan_subscribtion_feature_assoc_pkey" PRIMARY KEY ("id")
);
ALTER TABLE "public"."subscribtion_plan_subscribtion_feature_assoc" ADD CONSTRAINT "subscribtion_plan_subscribtion_feature_assoc_subscribtion_plan_fkey" FOREIGN KEY ("subscribtion_plan") REFERENCES "public"."subscribtion_plan"("name") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."subscribtion_plan_subscribtion_feature_assoc" ADD CONSTRAINT "subscribtion_plan_subscribtion_feature_assoc_subscribtion_feature_fkey" FOREIGN KEY ("subscribtion_feature") REFERENCES "public"."subscribtion_feature"("name") ON DELETE CASCADE ON UPDATE CASCADE;