----------------------------------------------------------------- Plans -----------------------------------------------------------------

INSERT INTO "public"."subscribtion_plan"("name", "stripe_monthly_price_id", "stripe_yearly_price_id", "popular", "text_content_id") VALUES (E'hobby', E'price_1OdsBrBeHVeQHE2CJ5OCwSqm', E'price_1Phb7pBeHVeQHE2CEo8SjlIg', false, '927db6a6-47df-4fa8-b35d-927a7641cd08');
INSERT INTO "public"."subscribtion_plan"("name", "stripe_monthly_price_id", "stripe_yearly_price_id", "popular", "text_content_id") VALUES (E'pro', E'price_1OdZirBeHVeQHE2CLSbmcHWH', E'price_1Phb8aBeHVeQHE2CRgGc1VdE', true, E'0c393234-7dba-4188-9b62-b5bbfc53857d');
INSERT INTO "public"."subscribtion_plan"("name", "stripe_monthly_price_id", "stripe_yearly_price_id", "popular", "text_content_id") VALUES (E'enterprise', E'price_1OdZjFBeHVeQHE2CY7uBM1tN', E'price_1PjSZ1BeHVeQHE2CcQhV5vpU', false,  E'212d73e3-3df0-484f-9b0f-7b28c301fac8');

----------------------------------------------------------------- Features -----------------------------------------------------------------

-- Insert into subscribtion_feature for Hobby plan features 
INSERT INTO "public"."subscribtion_feature" ("name", "text_content_id") VALUES ('feature1', '79c7c2b4-12d6-4521-9cab-8e2f2c09419f');
INSERT INTO "public"."subscribtion_feature" ("name", "text_content_id") VALUES ('feature2', '8f8c6f80-3389-4bad-85bc-a47e1869d8b3');
INSERT INTO "public"."subscribtion_feature" ("name", "text_content_id") VALUES ('feature3', 'd6154424-1f14-485c-a8b8-03a450ca71fe');
INSERT INTO "public"."subscribtion_feature" ("name", "text_content_id") VALUES ('feature4', 'fc4aaff2-025c-44a8-86c1-22774e03821e');
INSERT INTO "public"."subscribtion_feature" ("name", "text_content_id") VALUES ('feature5', 'ac3d1f2e-ff18-4280-bc8e-229194cccb1b');
INSERT INTO "public"."subscribtion_feature" ("name", "text_content_id") VALUES ('feature6', 'e3785244-b899-417c-b4a3-4dee7aa54085');

----------------------------------------------------------------- Assocs -----------------------------------------------------------------

INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('hobby', 'feature1');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('hobby', 'feature2');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('hobby', 'feature3');

INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('pro', 'feature1');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('pro', 'feature2');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('pro', 'feature3');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('pro', 'feature4');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('pro', 'feature5');

INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('enterprise', 'feature1');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('enterprise', 'feature2');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('enterprise', 'feature3');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('enterprise', 'feature4');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('enterprise', 'feature5');
INSERT INTO "public"."subscribtion_plan_subscribtion_feature_assoc" ("subscribtion_plan", "subscribtion_feature") VALUES ('enterprise', 'feature6');