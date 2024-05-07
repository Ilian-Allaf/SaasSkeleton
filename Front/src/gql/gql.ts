/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetUser($id: uuid!) {\n  auth_user_by_pk(id: $id) {\n    id\n    stripe_customer_id\n    subscribtion_plan\n    stripe_subscribtion_id\n  }\n}\n\nquery GetUserEmail($id: uuid!) {\n  auth_user_by_pk(id: $id) {\n    email\n  }\n}\n\nmutation UpdateUsername($id: uuid!, $username: String!) {\n  update_auth_user_by_pk(pk_columns: {id: $id}, _set: {username: $username}) {\n    username\n  }\n}\n\nmutation UpdateEmail($id: uuid!, $email: String!) {\n  update_auth_user_by_pk(pk_columns: {id: $id}, _set: {email: $email}) {\n    email\n  }\n}\n\nmutation UpdateUpdatedEmail($id: uuid!, $updated_email: String!) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {updated_email: $updated_email}\n  ) {\n    updated_email\n  }\n}\n\nquery GetSubscribtionPlans($languageCode: String!) {\n  subscribtion_plan {\n    id\n    name\n    text_content {\n      translations(where: {language: {_eq: $languageCode}}) {\n        translation\n      }\n    }\n    subscribtion_plan_subscribtion_feature_assocs {\n      subscribtionFeatureBySubscribtionFeature {\n        text_content {\n          translations(where: {language: {_eq: $languageCode}}) {\n            translation\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetSubscriptionPlan($id: String!) {\n  subscribtion_plan_by_pk(id: $id) {\n    name\n  }\n}\n\nmutation UpdateUserSubscriptionPlan($id: uuid!, $stripe_customer_id: String!, $subscribtion_plan: String!, $subscribtion_id: String!) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {stripe_customer_id: $stripe_customer_id, subscribtion_plan: $subscribtion_plan, stripe_subscribtion_id: $subscribtion_id}\n  ) {\n    id\n  }\n}\n\nmutation RemoveSubscribtion($id: uuid!, $stripe_customer_id: String, $subscribtion_plan: String, $stripe_subscribtion_id: String) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {stripe_customer_id: $stripe_customer_id, subscribtion_plan: $subscribtion_plan, stripe_subscribtion_id: $stripe_subscribtion_id}\n  ) {\n    id\n  }\n}": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser($id: uuid!) {\n  auth_user_by_pk(id: $id) {\n    id\n    stripe_customer_id\n    subscribtion_plan\n    stripe_subscribtion_id\n  }\n}\n\nquery GetUserEmail($id: uuid!) {\n  auth_user_by_pk(id: $id) {\n    email\n  }\n}\n\nmutation UpdateUsername($id: uuid!, $username: String!) {\n  update_auth_user_by_pk(pk_columns: {id: $id}, _set: {username: $username}) {\n    username\n  }\n}\n\nmutation UpdateEmail($id: uuid!, $email: String!) {\n  update_auth_user_by_pk(pk_columns: {id: $id}, _set: {email: $email}) {\n    email\n  }\n}\n\nmutation UpdateUpdatedEmail($id: uuid!, $updated_email: String!) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {updated_email: $updated_email}\n  ) {\n    updated_email\n  }\n}\n\nquery GetSubscribtionPlans($languageCode: String!) {\n  subscribtion_plan {\n    id\n    name\n    text_content {\n      translations(where: {language: {_eq: $languageCode}}) {\n        translation\n      }\n    }\n    subscribtion_plan_subscribtion_feature_assocs {\n      subscribtionFeatureBySubscribtionFeature {\n        text_content {\n          translations(where: {language: {_eq: $languageCode}}) {\n            translation\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetSubscriptionPlan($id: String!) {\n  subscribtion_plan_by_pk(id: $id) {\n    name\n  }\n}\n\nmutation UpdateUserSubscriptionPlan($id: uuid!, $stripe_customer_id: String!, $subscribtion_plan: String!, $subscribtion_id: String!) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {stripe_customer_id: $stripe_customer_id, subscribtion_plan: $subscribtion_plan, stripe_subscribtion_id: $subscribtion_id}\n  ) {\n    id\n  }\n}\n\nmutation RemoveSubscribtion($id: uuid!, $stripe_customer_id: String, $subscribtion_plan: String, $stripe_subscribtion_id: String) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {stripe_customer_id: $stripe_customer_id, subscribtion_plan: $subscribtion_plan, stripe_subscribtion_id: $stripe_subscribtion_id}\n  ) {\n    id\n  }\n}"): (typeof documents)["query GetUser($id: uuid!) {\n  auth_user_by_pk(id: $id) {\n    id\n    stripe_customer_id\n    subscribtion_plan\n    stripe_subscribtion_id\n  }\n}\n\nquery GetUserEmail($id: uuid!) {\n  auth_user_by_pk(id: $id) {\n    email\n  }\n}\n\nmutation UpdateUsername($id: uuid!, $username: String!) {\n  update_auth_user_by_pk(pk_columns: {id: $id}, _set: {username: $username}) {\n    username\n  }\n}\n\nmutation UpdateEmail($id: uuid!, $email: String!) {\n  update_auth_user_by_pk(pk_columns: {id: $id}, _set: {email: $email}) {\n    email\n  }\n}\n\nmutation UpdateUpdatedEmail($id: uuid!, $updated_email: String!) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {updated_email: $updated_email}\n  ) {\n    updated_email\n  }\n}\n\nquery GetSubscribtionPlans($languageCode: String!) {\n  subscribtion_plan {\n    id\n    name\n    text_content {\n      translations(where: {language: {_eq: $languageCode}}) {\n        translation\n      }\n    }\n    subscribtion_plan_subscribtion_feature_assocs {\n      subscribtionFeatureBySubscribtionFeature {\n        text_content {\n          translations(where: {language: {_eq: $languageCode}}) {\n            translation\n          }\n        }\n      }\n    }\n  }\n}\n\nquery GetSubscriptionPlan($id: String!) {\n  subscribtion_plan_by_pk(id: $id) {\n    name\n  }\n}\n\nmutation UpdateUserSubscriptionPlan($id: uuid!, $stripe_customer_id: String!, $subscribtion_plan: String!, $subscribtion_id: String!) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {stripe_customer_id: $stripe_customer_id, subscribtion_plan: $subscribtion_plan, stripe_subscribtion_id: $subscribtion_id}\n  ) {\n    id\n  }\n}\n\nmutation RemoveSubscribtion($id: uuid!, $stripe_customer_id: String, $subscribtion_plan: String, $stripe_subscribtion_id: String) {\n  update_auth_user_by_pk(\n    pk_columns: {id: $id}\n    _set: {stripe_customer_id: $stripe_customer_id, subscribtion_plan: $subscribtion_plan, stripe_subscribtion_id: $stripe_subscribtion_id}\n  ) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;