CREATE TABLE "public"."unsubscription_feedback" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "feedback" TEXT NOT NULL,
    CONSTRAINT "unsubscription_feedback_pkey" PRIMARY KEY ("id")
);