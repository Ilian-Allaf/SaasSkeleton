INSERT INTO "public"."team"("id", "name", "admin_id") VALUES (E'c28dfa84-37bf-4b5a-ba31-02d8542e2c2d', E'ilianTeam', E'29bc0760-07db-4aa8-ba29-2c0f5662d1af');
INSERT INTO "public"."team"("id", "name", "admin_id") VALUES (E'5244d980-afd3-4b58-990c-93e12f056a91', E'romanTeam', E'4f6ae3ea-f1ff-4369-ae7c-9fa8dbdfde32');
INSERT INTO "public"."team"("id", "name", "admin_id") VALUES (E'f50a9e7d-cae1-438c-9ac6-14046c14cb75', E'victorTeam', E'3f43920c-28fd-48ea-bdca-6d4747308df2');
INSERT INTO "public"."team"("id", "name", "admin_id") VALUES (E'8cdd436e-1be7-4b04-96f8-604fb4cb561b', E'lukasTeam', E'5093fd6d-f0aa-4580-be42-35beb93d5f35');
INSERT INTO "public"."team"("id", "name", "admin_id") VALUES (E'9b0f7ebc-fb64-4c52-8787-2e0b4714ee7b', E'tanguyTeam', E'c2fb1060-2c03-4ba6-9e9c-da7e65d486da');

UPDATE "auth"."user" SET "team_id" = E'c28dfa84-37bf-4b5a-ba31-02d8542e2c2d' WHERE "id" = E'29bc0760-07db-4aa8-ba29-2c0f5662d1af';
UPDATE "auth"."user" SET "team_id" = E'5244d980-afd3-4b58-990c-93e12f056a91' WHERE "id" = E'4f6ae3ea-f1ff-4369-ae7c-9fa8dbdfde32';
UPDATE "auth"."user" SET "team_id" = E'f50a9e7d-cae1-438c-9ac6-14046c14cb75' WHERE "id" = E'3f43920c-28fd-48ea-bdca-6d4747308df2';
UPDATE "auth"."user" SET "team_id" = E'8cdd436e-1be7-4b04-96f8-604fb4cb561b' WHERE "id" = E'5093fd6d-f0aa-4580-be42-35beb93d5f35';
UPDATE "auth"."user" SET "team_id" = E'9b0f7ebc-fb64-4c52-8787-2e0b4714ee7b' WHERE "id" = E'c2fb1060-2c03-4ba6-9e9c-da7e65d486da';