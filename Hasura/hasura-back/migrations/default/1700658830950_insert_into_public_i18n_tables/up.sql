----------------------------------------------------------------- language ---------------------------------------------------------------------

INSERT INTO "public"."language"("code", "name") VALUES (E'fr', E'Français');
INSERT INTO "public"."language"("code", "name") VALUES (E'en', E'English');

----------------------------------------------------------------- text_content & translation -----------------------------------------------------------------

-- Subscribtion plan
INSERT INTO "public"."text_content"("id") VALUES (E'927db6a6-47df-4fa8-b35d-927a7641cd08');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'927db6a6-47df-4fa8-b35d-927a7641cd08', E'name', E'en', E'Hobby');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'927db6a6-47df-4fa8-b35d-927a7641cd08', E'name', E'fr', E'Essai');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'927db6a6-47df-4fa8-b35d-927a7641cd08',  E'description', E'en', E'Essential features you need to get started');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'927db6a6-47df-4fa8-b35d-927a7641cd08',  E'description', E'fr', E'Fonctionnalités essentielles dont vous avez besoin pour commencer');

INSERT INTO "public"."text_content"("id") VALUES (E'0c393234-7dba-4188-9b62-b5bbfc53857d');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'0c393234-7dba-4188-9b62-b5bbfc53857d', E'name', E'en', E'Pro');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'0c393234-7dba-4188-9b62-b5bbfc53857d', E'name', E'fr', E'Pro');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'0c393234-7dba-4188-9b62-b5bbfc53857d',  E'description', E'en', E'Perfect for owners of small & medium businessess');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'0c393234-7dba-4188-9b62-b5bbfc53857d',  E'description', E'fr', E'Parfait pour les petites et moyennes entreprises');

INSERT INTO "public"."text_content"("id") VALUES (E'212d73e3-3df0-484f-9b0f-7b28c301fac8');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'212d73e3-3df0-484f-9b0f-7b28c301fac8', E'name', E'en', E'Enterprise');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'212d73e3-3df0-484f-9b0f-7b28c301fac8', E'name', E'fr', E'Entreprise');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'212d73e3-3df0-484f-9b0f-7b28c301fac8', E'description', E'en', E'Dedicated support and infrastructure to fit your needs');
INSERT INTO "public"."translation"("text_content_id", "text_label", "language", "translation") VALUES (E'212d73e3-3df0-484f-9b0f-7b28c301fac8', E'description', E'fr', E'Un support dédié et une infrastructure adaptée à vos besoins');

-- Subscribtion plan features
INSERT INTO "public"."text_content"("id") VALUES (E'79c7c2b4-12d6-4521-9cab-8e2f2c09419f');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'79c7c2b4-12d6-4521-9cab-8e2f2c09419f', E'en', E'Feature 1');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'79c7c2b4-12d6-4521-9cab-8e2f2c09419f', E'fr', E'Fonctionnalité 1');

INSERT INTO "public"."text_content"("id") VALUES (E'8f8c6f80-3389-4bad-85bc-a47e1869d8b3');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'8f8c6f80-3389-4bad-85bc-a47e1869d8b3', E'en', E'Feature 2');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'8f8c6f80-3389-4bad-85bc-a47e1869d8b3', E'fr', E'Fonctionnalité 2');

INSERT INTO "public"."text_content"("id") VALUES (E'd6154424-1f14-485c-a8b8-03a450ca71fe');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'd6154424-1f14-485c-a8b8-03a450ca71fe', E'en', E'Feature 3');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'd6154424-1f14-485c-a8b8-03a450ca71fe', E'fr', E'Fonctionnalité 3');

INSERT INTO "public"."text_content"("id") VALUES (E'fc4aaff2-025c-44a8-86c1-22774e03821e');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'fc4aaff2-025c-44a8-86c1-22774e03821e', E'en', E'Feature 4');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'fc4aaff2-025c-44a8-86c1-22774e03821e', E'fr', E'Fonctionnalité 4');

INSERT INTO "public"."text_content"("id") VALUES (E'ac3d1f2e-ff18-4280-bc8e-229194cccb1b');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'ac3d1f2e-ff18-4280-bc8e-229194cccb1b', E'en', E'Feature 5');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'ac3d1f2e-ff18-4280-bc8e-229194cccb1b', E'fr', E'Fonctionnalité 5');

INSERT INTO "public"."text_content"("id") VALUES (E'e3785244-b899-417c-b4a3-4dee7aa54085');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'e3785244-b899-417c-b4a3-4dee7aa54085', E'en', E'Feature 6');
INSERT INTO "public"."translation"("text_content_id", "language", "translation") VALUES (E'e3785244-b899-417c-b4a3-4dee7aa54085', E'fr', E'Fonctionnalité 6');