/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "auth.account" */
export type Auth_Account = {
  __typename?: 'auth_account';
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires: Scalars['timestamp']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  provider_account_id: Scalars['String']['output'];
  provider_id: Scalars['String']['output'];
  provider_type: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.account" */
export type Auth_Account_Aggregate = {
  __typename?: 'auth_account_aggregate';
  aggregate?: Maybe<Auth_Account_Aggregate_Fields>;
  nodes: Array<Auth_Account>;
};

export type Auth_Account_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Account_Aggregate_Bool_Exp_Count>;
};

export type Auth_Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_Fields = {
  __typename?: 'auth_account_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Account_Max_Fields>;
  min?: Maybe<Auth_Account_Min_Fields>;
};


/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.account" */
export type Auth_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account" */
export type Auth_Account_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account". All fields are combined with a logical 'AND'. */
export type Auth_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  access_token_expires?: InputMaybe<Timestamp_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider_account_id?: InputMaybe<String_Comparison_Exp>;
  provider_id?: InputMaybe<String_Comparison_Exp>;
  provider_type?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account" */
export enum Auth_Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey',
  /** unique or primary key constraint on columns "provider_account_id", "provider_id" */
  AccountProviderIdProviderAccountIdKey = 'account_provider_id_provider_account_id_key'
}

/** input type for inserting data into table "auth.account" */
export type Auth_Account_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Account_Max_Fields = {
  __typename?: 'auth_account_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires?: Maybe<Scalars['timestamp']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  provider_account_id?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  provider_type?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.account" */
export type Auth_Account_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_expires?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Min_Fields = {
  __typename?: 'auth_account_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires?: Maybe<Scalars['timestamp']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  provider_account_id?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  provider_type?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.account" */
export type Auth_Account_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_expires?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account" */
export type Auth_Account_Mutation_Response = {
  __typename?: 'auth_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account>;
};

/** on_conflict condition type for table "auth.account" */
export type Auth_Account_On_Conflict = {
  constraint: Auth_Account_Constraint;
  update_columns?: Array<Auth_Account_Update_Column>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account". */
export type Auth_Account_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_expires?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.account */
export type Auth_Account_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.account" */
export enum Auth_Account_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.account" */
export type Auth_Account_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_account" */
export type Auth_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Account_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.account" */
export enum Auth_Account_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Account_Bool_Exp;
};

/** columns and relationships of "auth.session" */
export type Auth_Session = {
  __typename?: 'auth_session';
  access_token: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  expires: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  session_token: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.session" */
export type Auth_Session_Aggregate = {
  __typename?: 'auth_session_aggregate';
  aggregate?: Maybe<Auth_Session_Aggregate_Fields>;
  nodes: Array<Auth_Session>;
};

export type Auth_Session_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Session_Aggregate_Bool_Exp_Count>;
};

export type Auth_Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Session_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_Fields = {
  __typename?: 'auth_session_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Session_Max_Fields>;
  min?: Maybe<Auth_Session_Min_Fields>;
};


/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.session" */
export type Auth_Session_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Session_Max_Order_By>;
  min?: InputMaybe<Auth_Session_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.session" */
export type Auth_Session_Arr_Rel_Insert_Input = {
  data: Array<Auth_Session_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.session". All fields are combined with a logical 'AND'. */
export type Auth_Session_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  _not?: InputMaybe<Auth_Session_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  session_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.session" */
export enum Auth_Session_Constraint {
  /** unique or primary key constraint on columns "access_token" */
  SessionAccessTokenKey = 'session_access_token_key',
  /** unique or primary key constraint on columns "id" */
  SessionPkey = 'session_pkey',
  /** unique or primary key constraint on columns "session_token" */
  SessionSessionTokenKey = 'session_session_token_key'
}

/** input type for inserting data into table "auth.session" */
export type Auth_Session_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Session_Max_Fields = {
  __typename?: 'auth_session_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  session_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.session" */
export type Auth_Session_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Session_Min_Fields = {
  __typename?: 'auth_session_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  session_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.session" */
export type Auth_Session_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.session" */
export type Auth_Session_Mutation_Response = {
  __typename?: 'auth_session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Session>;
};

/** on_conflict condition type for table "auth.session" */
export type Auth_Session_On_Conflict = {
  constraint: Auth_Session_Constraint;
  update_columns?: Array<Auth_Session_Update_Column>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.session". */
export type Auth_Session_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.session */
export type Auth_Session_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.session" */
export enum Auth_Session_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.session" */
export type Auth_Session_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_session" */
export type Auth_Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Session_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.session" */
export enum Auth_Session_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Session_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Session_Bool_Exp;
};

/** columns and relationships of "auth.user" */
export type Auth_User = {
  __typename?: 'auth_user';
  /** An array relationship */
  accounts: Array<Auth_Account>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Account_Aggregate;
  created_at: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  email_verified?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** An array relationship */
  sessions: Array<Auth_Session>;
  /** An aggregate relationship */
  sessions_aggregate: Auth_Session_Aggregate;
  updated_at: Scalars['timestamp']['output'];
  username: Scalars['String']['output'];
};


/** columns and relationships of "auth.user" */
export type Auth_UserAccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** aggregated selection of "auth.user" */
export type Auth_User_Aggregate = {
  __typename?: 'auth_user_aggregate';
  aggregate?: Maybe<Auth_User_Aggregate_Fields>;
  nodes: Array<Auth_User>;
};

/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_Fields = {
  __typename?: 'auth_user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_User_Max_Fields>;
  min?: Maybe<Auth_User_Min_Fields>;
};


/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.user". All fields are combined with a logical 'AND'. */
export type Auth_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  accounts?: InputMaybe<Auth_Account_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Auth_Session_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user" */
export enum Auth_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "auth.user" */
export type Auth_User_Insert_Input = {
  accounts?: InputMaybe<Auth_Account_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Auth_Session_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_User_Max_Fields = {
  __typename?: 'auth_user_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_User_Min_Fields = {
  __typename?: 'auth_user_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.user" */
export type Auth_User_Mutation_Response = {
  __typename?: 'auth_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User>;
};

/** input type for inserting object relation for remote table "auth.user" */
export type Auth_User_Obj_Rel_Insert_Input = {
  data: Auth_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** on_conflict condition type for table "auth.user" */
export type Auth_User_On_Conflict = {
  constraint: Auth_User_Constraint;
  update_columns?: Array<Auth_User_Update_Column>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user". */
export type Auth_User_Order_By = {
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user */
export type Auth_User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user" */
export enum Auth_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "auth.user" */
export type Auth_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "auth_user" */
export type Auth_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.user" */
export enum Auth_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Auth_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_User_Bool_Exp;
};

/** columns and relationships of "auth.verification_request" */
export type Auth_Verification_Request = {
  __typename?: 'auth_verification_request';
  created_at: Scalars['timestamp']['output'];
  expires: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** aggregated selection of "auth.verification_request" */
export type Auth_Verification_Request_Aggregate = {
  __typename?: 'auth_verification_request_aggregate';
  aggregate?: Maybe<Auth_Verification_Request_Aggregate_Fields>;
  nodes: Array<Auth_Verification_Request>;
};

/** aggregate fields of "auth.verification_request" */
export type Auth_Verification_Request_Aggregate_Fields = {
  __typename?: 'auth_verification_request_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Verification_Request_Max_Fields>;
  min?: Maybe<Auth_Verification_Request_Min_Fields>;
};


/** aggregate fields of "auth.verification_request" */
export type Auth_Verification_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.verification_request". All fields are combined with a logical 'AND'. */
export type Auth_Verification_Request_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Verification_Request_Bool_Exp>>;
  _not?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Verification_Request_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.verification_request" */
export enum Auth_Verification_Request_Constraint {
  /** unique or primary key constraint on columns "token", "identifier" */
  VerificationRequestIdentifierTokenKey = 'verification_request_identifier_token_key',
  /** unique or primary key constraint on columns "id" */
  VerificationRequestPkey = 'verification_request_pkey',
  /** unique or primary key constraint on columns "token" */
  VerificationRequestTokenKey = 'verification_request_token_key'
}

/** input type for inserting data into table "auth.verification_request" */
export type Auth_Verification_Request_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Auth_Verification_Request_Max_Fields = {
  __typename?: 'auth_verification_request_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Auth_Verification_Request_Min_Fields = {
  __typename?: 'auth_verification_request_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "auth.verification_request" */
export type Auth_Verification_Request_Mutation_Response = {
  __typename?: 'auth_verification_request_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Verification_Request>;
};

/** on_conflict condition type for table "auth.verification_request" */
export type Auth_Verification_Request_On_Conflict = {
  constraint: Auth_Verification_Request_Constraint;
  update_columns?: Array<Auth_Verification_Request_Update_Column>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.verification_request". */
export type Auth_Verification_Request_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.verification_request */
export type Auth_Verification_Request_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.verification_request" */
export enum Auth_Verification_Request_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.verification_request" */
export type Auth_Verification_Request_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "auth_verification_request" */
export type Auth_Verification_Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Verification_Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Verification_Request_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "auth.verification_request" */
export enum Auth_Verification_Request_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Verification_Request_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Verification_Request_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Verification_Request_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account" */
  delete_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** delete single row from the table: "auth.account" */
  delete_auth_account_by_pk?: Maybe<Auth_Account>;
  /** delete data from the table: "auth.session" */
  delete_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** delete single row from the table: "auth.session" */
  delete_auth_session_by_pk?: Maybe<Auth_Session>;
  /** delete data from the table: "auth.user" */
  delete_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** delete single row from the table: "auth.user" */
  delete_auth_user_by_pk?: Maybe<Auth_User>;
  /** delete data from the table: "auth.verification_request" */
  delete_auth_verification_request?: Maybe<Auth_Verification_Request_Mutation_Response>;
  /** delete single row from the table: "auth.verification_request" */
  delete_auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
  /** insert data into the table: "auth.account" */
  insert_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** insert a single row into the table: "auth.account" */
  insert_auth_account_one?: Maybe<Auth_Account>;
  /** insert data into the table: "auth.session" */
  insert_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** insert a single row into the table: "auth.session" */
  insert_auth_session_one?: Maybe<Auth_Session>;
  /** insert data into the table: "auth.user" */
  insert_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** insert a single row into the table: "auth.user" */
  insert_auth_user_one?: Maybe<Auth_User>;
  /** insert data into the table: "auth.verification_request" */
  insert_auth_verification_request?: Maybe<Auth_Verification_Request_Mutation_Response>;
  /** insert a single row into the table: "auth.verification_request" */
  insert_auth_verification_request_one?: Maybe<Auth_Verification_Request>;
  /** update data of the table: "auth.account" */
  update_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** update single row of the table: "auth.account" */
  update_auth_account_by_pk?: Maybe<Auth_Account>;
  /** update multiples rows of table: "auth.account" */
  update_auth_account_many?: Maybe<Array<Maybe<Auth_Account_Mutation_Response>>>;
  /** update data of the table: "auth.session" */
  update_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** update single row of the table: "auth.session" */
  update_auth_session_by_pk?: Maybe<Auth_Session>;
  /** update multiples rows of table: "auth.session" */
  update_auth_session_many?: Maybe<Array<Maybe<Auth_Session_Mutation_Response>>>;
  /** update data of the table: "auth.user" */
  update_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** update single row of the table: "auth.user" */
  update_auth_user_by_pk?: Maybe<Auth_User>;
  /** update multiples rows of table: "auth.user" */
  update_auth_user_many?: Maybe<Array<Maybe<Auth_User_Mutation_Response>>>;
  /** update data of the table: "auth.verification_request" */
  update_auth_verification_request?: Maybe<Auth_Verification_Request_Mutation_Response>;
  /** update single row of the table: "auth.verification_request" */
  update_auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
  /** update multiples rows of table: "auth.verification_request" */
  update_auth_verification_request_many?: Maybe<Array<Maybe<Auth_Verification_Request_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountArgs = {
  where: Auth_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_SessionArgs = {
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Session_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_UserArgs = {
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Verification_RequestArgs = {
  where: Auth_Verification_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Verification_Request_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountArgs = {
  objects: Array<Auth_Account_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_OneArgs = {
  object: Auth_Account_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_SessionArgs = {
  objects: Array<Auth_Session_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Session_OneArgs = {
  object: Auth_Session_Insert_Input;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_UserArgs = {
  objects: Array<Auth_User_Insert_Input>;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_OneArgs = {
  object: Auth_User_Insert_Input;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Verification_RequestArgs = {
  objects: Array<Auth_Verification_Request_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Verification_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Verification_Request_OneArgs = {
  object: Auth_Verification_Request_Insert_Input;
  on_conflict?: InputMaybe<Auth_Verification_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountArgs = {
  _set?: InputMaybe<Auth_Account_Set_Input>;
  where: Auth_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Set_Input>;
  pk_columns: Auth_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ManyArgs = {
  updates: Array<Auth_Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_SessionArgs = {
  _set?: InputMaybe<Auth_Session_Set_Input>;
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Session_By_PkArgs = {
  _set?: InputMaybe<Auth_Session_Set_Input>;
  pk_columns: Auth_Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Session_ManyArgs = {
  updates: Array<Auth_Session_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UserArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_By_PkArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  pk_columns: Auth_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_ManyArgs = {
  updates: Array<Auth_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_RequestArgs = {
  _set?: InputMaybe<Auth_Verification_Request_Set_Input>;
  where: Auth_Verification_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_Request_By_PkArgs = {
  _set?: InputMaybe<Auth_Verification_Request_Set_Input>;
  pk_columns: Auth_Verification_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_Request_ManyArgs = {
  updates: Array<Auth_Verification_Request_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table: "auth.verification_request" */
  auth_verification_request: Array<Auth_Verification_Request>;
  /** fetch aggregated fields from the table: "auth.verification_request" */
  auth_verification_request_aggregate: Auth_Verification_Request_Aggregate;
  /** fetch data from the table: "auth.verification_request" using primary key columns */
  auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
};


export type Query_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Query_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Query_RootAuth_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Verification_RequestArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Query_RootAuth_Verification_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Query_RootAuth_Verification_Request_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table in a streaming manner: "auth.account" */
  auth_account_stream: Array<Auth_Account>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table in a streaming manner: "auth.session" */
  auth_session_stream: Array<Auth_Session>;
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table in a streaming manner: "auth.user" */
  auth_user_stream: Array<Auth_User>;
  /** fetch data from the table: "auth.verification_request" */
  auth_verification_request: Array<Auth_Verification_Request>;
  /** fetch aggregated fields from the table: "auth.verification_request" */
  auth_verification_request_aggregate: Auth_Verification_Request_Aggregate;
  /** fetch data from the table: "auth.verification_request" using primary key columns */
  auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
  /** fetch data from the table in a streaming manner: "auth.verification_request" */
  auth_verification_request_stream: Array<Auth_Verification_Request>;
};


export type Subscription_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Account_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Session_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_RequestArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_Request_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Verification_Request_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Verification_Request_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', auth_user: Array<{ __typename?: 'auth_user', email: string, id: any }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "auth.account" */
export type Auth_Account = {
  __typename?: 'auth_account';
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires: Scalars['timestamp']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  provider_account_id: Scalars['String']['output'];
  provider_id: Scalars['String']['output'];
  provider_type: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.account" */
export type Auth_Account_Aggregate = {
  __typename?: 'auth_account_aggregate';
  aggregate?: Maybe<Auth_Account_Aggregate_Fields>;
  nodes: Array<Auth_Account>;
};

export type Auth_Account_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Account_Aggregate_Bool_Exp_Count>;
};

export type Auth_Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_Fields = {
  __typename?: 'auth_account_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Account_Max_Fields>;
  min?: Maybe<Auth_Account_Min_Fields>;
};


/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.account" */
export type Auth_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account" */
export type Auth_Account_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account". All fields are combined with a logical 'AND'. */
export type Auth_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  access_token_expires?: InputMaybe<Timestamp_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider_account_id?: InputMaybe<String_Comparison_Exp>;
  provider_id?: InputMaybe<String_Comparison_Exp>;
  provider_type?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account" */
export enum Auth_Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey',
  /** unique or primary key constraint on columns "provider_account_id", "provider_id" */
  AccountProviderIdProviderAccountIdKey = 'account_provider_id_provider_account_id_key'
}

/** input type for inserting data into table "auth.account" */
export type Auth_Account_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Account_Max_Fields = {
  __typename?: 'auth_account_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires?: Maybe<Scalars['timestamp']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  provider_account_id?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  provider_type?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.account" */
export type Auth_Account_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_expires?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Min_Fields = {
  __typename?: 'auth_account_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires?: Maybe<Scalars['timestamp']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  provider_account_id?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  provider_type?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.account" */
export type Auth_Account_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_expires?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.account" */
export type Auth_Account_Mutation_Response = {
  __typename?: 'auth_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account>;
};

/** on_conflict condition type for table "auth.account" */
export type Auth_Account_On_Conflict = {
  constraint: Auth_Account_Constraint;
  update_columns?: Array<Auth_Account_Update_Column>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account". */
export type Auth_Account_Order_By = {
  access_token?: InputMaybe<Order_By>;
  access_token_expires?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.account */
export type Auth_Account_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.account" */
export enum Auth_Account_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.account" */
export type Auth_Account_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_account" */
export type Auth_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Account_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.account" */
export enum Auth_Account_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Account_Bool_Exp;
};

/** columns and relationships of "auth.session" */
export type Auth_Session = {
  __typename?: 'auth_session';
  access_token: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  expires: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  session_token: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.session" */
export type Auth_Session_Aggregate = {
  __typename?: 'auth_session_aggregate';
  aggregate?: Maybe<Auth_Session_Aggregate_Fields>;
  nodes: Array<Auth_Session>;
};

export type Auth_Session_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Session_Aggregate_Bool_Exp_Count>;
};

export type Auth_Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Session_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_Fields = {
  __typename?: 'auth_session_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Session_Max_Fields>;
  min?: Maybe<Auth_Session_Min_Fields>;
};


/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.session" */
export type Auth_Session_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Session_Max_Order_By>;
  min?: InputMaybe<Auth_Session_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.session" */
export type Auth_Session_Arr_Rel_Insert_Input = {
  data: Array<Auth_Session_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.session". All fields are combined with a logical 'AND'. */
export type Auth_Session_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  _not?: InputMaybe<Auth_Session_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  session_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.session" */
export enum Auth_Session_Constraint {
  /** unique or primary key constraint on columns "access_token" */
  SessionAccessTokenKey = 'session_access_token_key',
  /** unique or primary key constraint on columns "id" */
  SessionPkey = 'session_pkey',
  /** unique or primary key constraint on columns "session_token" */
  SessionSessionTokenKey = 'session_session_token_key'
}

/** input type for inserting data into table "auth.session" */
export type Auth_Session_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Session_Max_Fields = {
  __typename?: 'auth_session_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  session_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.session" */
export type Auth_Session_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Session_Min_Fields = {
  __typename?: 'auth_session_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  session_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.session" */
export type Auth_Session_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.session" */
export type Auth_Session_Mutation_Response = {
  __typename?: 'auth_session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Session>;
};

/** on_conflict condition type for table "auth.session" */
export type Auth_Session_On_Conflict = {
  constraint: Auth_Session_Constraint;
  update_columns?: Array<Auth_Session_Update_Column>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.session". */
export type Auth_Session_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  session_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.session */
export type Auth_Session_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.session" */
export enum Auth_Session_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.session" */
export type Auth_Session_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_session" */
export type Auth_Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Session_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  session_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.session" */
export enum Auth_Session_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Session_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Session_Bool_Exp;
};

/** columns and relationships of "auth.user" */
export type Auth_User = {
  __typename?: 'auth_user';
  /** An array relationship */
  accounts: Array<Auth_Account>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Account_Aggregate;
  created_at: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  email_verified?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** An array relationship */
  sessions: Array<Auth_Session>;
  /** An aggregate relationship */
  sessions_aggregate: Auth_Session_Aggregate;
  updated_at: Scalars['timestamp']['output'];
  username: Scalars['String']['output'];
};


/** columns and relationships of "auth.user" */
export type Auth_UserAccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** aggregated selection of "auth.user" */
export type Auth_User_Aggregate = {
  __typename?: 'auth_user_aggregate';
  aggregate?: Maybe<Auth_User_Aggregate_Fields>;
  nodes: Array<Auth_User>;
};

/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_Fields = {
  __typename?: 'auth_user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_User_Max_Fields>;
  min?: Maybe<Auth_User_Min_Fields>;
};


/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.user". All fields are combined with a logical 'AND'. */
export type Auth_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  accounts?: InputMaybe<Auth_Account_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Auth_Session_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user" */
export enum Auth_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "auth.user" */
export type Auth_User_Insert_Input = {
  accounts?: InputMaybe<Auth_Account_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Auth_Session_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_User_Max_Fields = {
  __typename?: 'auth_user_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_User_Min_Fields = {
  __typename?: 'auth_user_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.user" */
export type Auth_User_Mutation_Response = {
  __typename?: 'auth_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User>;
};

/** input type for inserting object relation for remote table "auth.user" */
export type Auth_User_Obj_Rel_Insert_Input = {
  data: Auth_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** on_conflict condition type for table "auth.user" */
export type Auth_User_On_Conflict = {
  constraint: Auth_User_Constraint;
  update_columns?: Array<Auth_User_Update_Column>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user". */
export type Auth_User_Order_By = {
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user */
export type Auth_User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user" */
export enum Auth_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "auth.user" */
export type Auth_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "auth_user" */
export type Auth_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.user" */
export enum Auth_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Auth_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_User_Bool_Exp;
};

/** columns and relationships of "auth.verification_request" */
export type Auth_Verification_Request = {
  __typename?: 'auth_verification_request';
  created_at: Scalars['timestamp']['output'];
  expires: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** aggregated selection of "auth.verification_request" */
export type Auth_Verification_Request_Aggregate = {
  __typename?: 'auth_verification_request_aggregate';
  aggregate?: Maybe<Auth_Verification_Request_Aggregate_Fields>;
  nodes: Array<Auth_Verification_Request>;
};

/** aggregate fields of "auth.verification_request" */
export type Auth_Verification_Request_Aggregate_Fields = {
  __typename?: 'auth_verification_request_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Verification_Request_Max_Fields>;
  min?: Maybe<Auth_Verification_Request_Min_Fields>;
};


/** aggregate fields of "auth.verification_request" */
export type Auth_Verification_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.verification_request". All fields are combined with a logical 'AND'. */
export type Auth_Verification_Request_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Verification_Request_Bool_Exp>>;
  _not?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Verification_Request_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.verification_request" */
export enum Auth_Verification_Request_Constraint {
  /** unique or primary key constraint on columns "token", "identifier" */
  VerificationRequestIdentifierTokenKey = 'verification_request_identifier_token_key',
  /** unique or primary key constraint on columns "id" */
  VerificationRequestPkey = 'verification_request_pkey',
  /** unique or primary key constraint on columns "token" */
  VerificationRequestTokenKey = 'verification_request_token_key'
}

/** input type for inserting data into table "auth.verification_request" */
export type Auth_Verification_Request_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Auth_Verification_Request_Max_Fields = {
  __typename?: 'auth_verification_request_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Auth_Verification_Request_Min_Fields = {
  __typename?: 'auth_verification_request_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "auth.verification_request" */
export type Auth_Verification_Request_Mutation_Response = {
  __typename?: 'auth_verification_request_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Verification_Request>;
};

/** on_conflict condition type for table "auth.verification_request" */
export type Auth_Verification_Request_On_Conflict = {
  constraint: Auth_Verification_Request_Constraint;
  update_columns?: Array<Auth_Verification_Request_Update_Column>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.verification_request". */
export type Auth_Verification_Request_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.verification_request */
export type Auth_Verification_Request_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.verification_request" */
export enum Auth_Verification_Request_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.verification_request" */
export type Auth_Verification_Request_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "auth_verification_request" */
export type Auth_Verification_Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Verification_Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Verification_Request_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "auth.verification_request" */
export enum Auth_Verification_Request_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Verification_Request_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Verification_Request_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Verification_Request_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account" */
  delete_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** delete single row from the table: "auth.account" */
  delete_auth_account_by_pk?: Maybe<Auth_Account>;
  /** delete data from the table: "auth.session" */
  delete_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** delete single row from the table: "auth.session" */
  delete_auth_session_by_pk?: Maybe<Auth_Session>;
  /** delete data from the table: "auth.user" */
  delete_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** delete single row from the table: "auth.user" */
  delete_auth_user_by_pk?: Maybe<Auth_User>;
  /** delete data from the table: "auth.verification_request" */
  delete_auth_verification_request?: Maybe<Auth_Verification_Request_Mutation_Response>;
  /** delete single row from the table: "auth.verification_request" */
  delete_auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
  /** insert data into the table: "auth.account" */
  insert_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** insert a single row into the table: "auth.account" */
  insert_auth_account_one?: Maybe<Auth_Account>;
  /** insert data into the table: "auth.session" */
  insert_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** insert a single row into the table: "auth.session" */
  insert_auth_session_one?: Maybe<Auth_Session>;
  /** insert data into the table: "auth.user" */
  insert_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** insert a single row into the table: "auth.user" */
  insert_auth_user_one?: Maybe<Auth_User>;
  /** insert data into the table: "auth.verification_request" */
  insert_auth_verification_request?: Maybe<Auth_Verification_Request_Mutation_Response>;
  /** insert a single row into the table: "auth.verification_request" */
  insert_auth_verification_request_one?: Maybe<Auth_Verification_Request>;
  /** update data of the table: "auth.account" */
  update_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** update single row of the table: "auth.account" */
  update_auth_account_by_pk?: Maybe<Auth_Account>;
  /** update multiples rows of table: "auth.account" */
  update_auth_account_many?: Maybe<Array<Maybe<Auth_Account_Mutation_Response>>>;
  /** update data of the table: "auth.session" */
  update_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** update single row of the table: "auth.session" */
  update_auth_session_by_pk?: Maybe<Auth_Session>;
  /** update multiples rows of table: "auth.session" */
  update_auth_session_many?: Maybe<Array<Maybe<Auth_Session_Mutation_Response>>>;
  /** update data of the table: "auth.user" */
  update_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** update single row of the table: "auth.user" */
  update_auth_user_by_pk?: Maybe<Auth_User>;
  /** update multiples rows of table: "auth.user" */
  update_auth_user_many?: Maybe<Array<Maybe<Auth_User_Mutation_Response>>>;
  /** update data of the table: "auth.verification_request" */
  update_auth_verification_request?: Maybe<Auth_Verification_Request_Mutation_Response>;
  /** update single row of the table: "auth.verification_request" */
  update_auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
  /** update multiples rows of table: "auth.verification_request" */
  update_auth_verification_request_many?: Maybe<Array<Maybe<Auth_Verification_Request_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountArgs = {
  where: Auth_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_SessionArgs = {
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Session_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_UserArgs = {
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Verification_RequestArgs = {
  where: Auth_Verification_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Verification_Request_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountArgs = {
  objects: Array<Auth_Account_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_OneArgs = {
  object: Auth_Account_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_SessionArgs = {
  objects: Array<Auth_Session_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Session_OneArgs = {
  object: Auth_Session_Insert_Input;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_UserArgs = {
  objects: Array<Auth_User_Insert_Input>;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_OneArgs = {
  object: Auth_User_Insert_Input;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Verification_RequestArgs = {
  objects: Array<Auth_Verification_Request_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Verification_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Verification_Request_OneArgs = {
  object: Auth_Verification_Request_Insert_Input;
  on_conflict?: InputMaybe<Auth_Verification_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountArgs = {
  _set?: InputMaybe<Auth_Account_Set_Input>;
  where: Auth_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Set_Input>;
  pk_columns: Auth_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ManyArgs = {
  updates: Array<Auth_Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_SessionArgs = {
  _set?: InputMaybe<Auth_Session_Set_Input>;
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Session_By_PkArgs = {
  _set?: InputMaybe<Auth_Session_Set_Input>;
  pk_columns: Auth_Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Session_ManyArgs = {
  updates: Array<Auth_Session_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UserArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_By_PkArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  pk_columns: Auth_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_ManyArgs = {
  updates: Array<Auth_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_RequestArgs = {
  _set?: InputMaybe<Auth_Verification_Request_Set_Input>;
  where: Auth_Verification_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_Request_By_PkArgs = {
  _set?: InputMaybe<Auth_Verification_Request_Set_Input>;
  pk_columns: Auth_Verification_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_Request_ManyArgs = {
  updates: Array<Auth_Verification_Request_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table: "auth.verification_request" */
  auth_verification_request: Array<Auth_Verification_Request>;
  /** fetch aggregated fields from the table: "auth.verification_request" */
  auth_verification_request_aggregate: Auth_Verification_Request_Aggregate;
  /** fetch data from the table: "auth.verification_request" using primary key columns */
  auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
};


export type Query_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Query_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Query_RootAuth_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Verification_RequestArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Query_RootAuth_Verification_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Query_RootAuth_Verification_Request_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table in a streaming manner: "auth.account" */
  auth_account_stream: Array<Auth_Account>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table in a streaming manner: "auth.session" */
  auth_session_stream: Array<Auth_Session>;
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table in a streaming manner: "auth.user" */
  auth_user_stream: Array<Auth_User>;
  /** fetch data from the table: "auth.verification_request" */
  auth_verification_request: Array<Auth_Verification_Request>;
  /** fetch aggregated fields from the table: "auth.verification_request" */
  auth_verification_request_aggregate: Auth_Verification_Request_Aggregate;
  /** fetch data from the table: "auth.verification_request" using primary key columns */
  auth_verification_request_by_pk?: Maybe<Auth_Verification_Request>;
  /** fetch data from the table in a streaming manner: "auth.verification_request" */
  auth_verification_request_stream: Array<Auth_Verification_Request>;
};


export type Subscription_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_Account_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Account_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Session_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_RequestArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Request_Order_By>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_Request_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Verification_Request_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Verification_Request_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Verification_Request_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
