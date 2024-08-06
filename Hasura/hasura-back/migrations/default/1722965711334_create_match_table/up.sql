CREATE TABLE "public"."match" (
  "id" UUID DEFAULT gen_random_uuid() NOT NULL,
  "match_date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
  "qualification_stage" VARCHAR(50) NOT NULL,
  "tournament_id" UUID NOT NULL,
  "blue_team_id" UUID NOT NULL,
  "red_team_id" UUID NOT NULL,

  CONSTRAINT "match_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "public"."match" ADD CONSTRAINT "match_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "public"."tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."match" ADD CONSTRAINT "match_blue_team_id_fkey" FOREIGN KEY ("blue_team_id") REFERENCES "public"."tournament_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."match" ADD CONSTRAINT "match_red_team_id_fkey" FOREIGN KEY ("red_team_id") REFERENCES "public"."tournament_team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
