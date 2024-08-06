CREATE TABLE "public"."tournament" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "end_date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "team_quantity" INT NOT NULL,
    "cash_price" INT,
    "entrance_price" INT,
    "type" TEXT NOT NULL DEFAULT 'single elimination',
    "manager" UUID NOT NULL,
    CONSTRAINT "tournament_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "public"."tournament" ADD CONSTRAINT "tournament_manager_fkey" FOREIGN KEY ("manager") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "public"."tournament_team" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "team_id" UUID NOT NULL,
    "tournament_id" UUID NOT NULL,
    CONSTRAINT "tournament_team_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "public"."tournament_team" ADD CONSTRAINT "tournament_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."tournament_team" ADD CONSTRAINT "tournament_team_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "public"."tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "public"."user_tournament_team_assoc" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "user_id" UUID NOT NULL,
    "tournament_team_id" UUID NOT NULL,
    CONSTRAINT "user_tournament_team_assoc_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "user_tournament_team_assoc_unique" UNIQUE ("user_id", "tournament_team_id")
);

ALTER TABLE "public"."user_tournament_team_assoc" ADD CONSTRAINT "user_tournament_team_assoc_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."user_tournament_team_assoc" ADD CONSTRAINT "user_tournament_team_assoc_tournament_team_id_fkey" FOREIGN KEY ("tournament_team_id") REFERENCES "public"."tournament_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "public"."tournament_team_tournament_assoc" (
    "id" UUID DEFAULT gen_random_uuid() NOT NULL,
    "tournament_id" UUID NOT NULL,
    "team_id" UUID NOT NULL,
    CONSTRAINT "tournament_team_assoc_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "tournament_team_assoc_unique" UNIQUE ("tournament_id", "team_id")
);

ALTER TABLE "public"."tournament_team_tournament_assoc" ADD CONSTRAINT "tournament_team_tournament_assoc_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "public"."tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."tournament_team_tournament_assoc" ADD CONSTRAINT "tournament_team_tournament_assoc_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."tournament_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;