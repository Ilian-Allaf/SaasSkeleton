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

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_account_id: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Auth_User>;
  user_id?: Maybe<Scalars['uuid']['output']>;
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
  avg?: Maybe<Auth_Account_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Account_Max_Fields>;
  min?: Maybe<Auth_Account_Min_Fields>;
  stddev?: Maybe<Auth_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Account_Sum_Fields>;
  var_pop?: Maybe<Auth_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Account_Var_Samp_Fields>;
  variance?: Maybe<Auth_Account_Variance_Fields>;
};


/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.account" */
export type Auth_Account_Aggregate_Order_By = {
  avg?: InputMaybe<Auth_Account_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Min_Order_By>;
  stddev?: InputMaybe<Auth_Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Auth_Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Auth_Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Auth_Account_Sum_Order_By>;
  var_pop?: InputMaybe<Auth_Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Auth_Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Auth_Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account" */
export type Auth_Account_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Auth_Account_Avg_Fields = {
  __typename?: 'auth_account_avg_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.account" */
export type Auth_Account_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.account". All fields are combined with a logical 'AND'. */
export type Auth_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  provider_account_id?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account" */
export enum Auth_Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey',
  /** unique or primary key constraint on columns "provider_account_id", "provider" */
  AccountProviderIdProviderAccountIdKey = 'account_provider_id_provider_account_id_key'
}

/** input type for incrementing numeric columns in table "auth.account" */
export type Auth_Account_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "auth.account" */
export type Auth_Account_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Account_Max_Fields = {
  __typename?: 'auth_account_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_account_id?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.account" */
export type Auth_Account_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Min_Fields = {
  __typename?: 'auth_account_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_account_id?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.account" */
export type Auth_Account_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
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
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_account_id?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
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
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.account" */
export type Auth_Account_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Auth_Account_Stddev_Fields = {
  __typename?: 'auth_account_stddev_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.account" */
export type Auth_Account_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Auth_Account_Stddev_Pop_Fields = {
  __typename?: 'auth_account_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.account" */
export type Auth_Account_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Auth_Account_Stddev_Samp_Fields = {
  __typename?: 'auth_account_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.account" */
export type Auth_Account_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
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
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_account_id?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Auth_Account_Sum_Fields = {
  __typename?: 'auth_account_sum_fields';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "auth.account" */
export type Auth_Account_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** update columns of table "auth.account" */
export enum Auth_Account_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Account_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Account_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Account_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Account_Var_Pop_Fields = {
  __typename?: 'auth_account_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.account" */
export type Auth_Account_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Auth_Account_Var_Samp_Fields = {
  __typename?: 'auth_account_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.account" */
export type Auth_Account_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Auth_Account_Variance_Fields = {
  __typename?: 'auth_account_variance_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.account" */
export type Auth_Account_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "auth.activate_token" */
export type Auth_Activate_Token = {
  __typename?: 'auth_activate_token';
  activated_at?: Maybe<Scalars['timestamp']['output']>;
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  is_valid: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.activate_token" */
export type Auth_Activate_Token_Aggregate = {
  __typename?: 'auth_activate_token_aggregate';
  aggregate?: Maybe<Auth_Activate_Token_Aggregate_Fields>;
  nodes: Array<Auth_Activate_Token>;
};

export type Auth_Activate_Token_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Auth_Activate_Token_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Auth_Activate_Token_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Auth_Activate_Token_Aggregate_Bool_Exp_Count>;
};

export type Auth_Activate_Token_Aggregate_Bool_Exp_Bool_And = {
  arguments: Auth_Activate_Token_Select_Column_Auth_Activate_Token_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Activate_Token_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Auth_Activate_Token_Select_Column_Auth_Activate_Token_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Activate_Token_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.activate_token" */
export type Auth_Activate_Token_Aggregate_Fields = {
  __typename?: 'auth_activate_token_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Activate_Token_Max_Fields>;
  min?: Maybe<Auth_Activate_Token_Min_Fields>;
};


/** aggregate fields of "auth.activate_token" */
export type Auth_Activate_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.activate_token" */
export type Auth_Activate_Token_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Activate_Token_Max_Order_By>;
  min?: InputMaybe<Auth_Activate_Token_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.activate_token" */
export type Auth_Activate_Token_Arr_Rel_Insert_Input = {
  data: Array<Auth_Activate_Token_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Activate_Token_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.activate_token". All fields are combined with a logical 'AND'. */
export type Auth_Activate_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Activate_Token_Bool_Exp>>;
  _not?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Activate_Token_Bool_Exp>>;
  activated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.activate_token" */
export enum Auth_Activate_Token_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActivateTokenPkey = 'activate_token_pkey',
  /** unique or primary key constraint on columns "token" */
  ActivateTokenTokenKey = 'activate_token_token_key'
}

/** input type for inserting data into table "auth.activate_token" */
export type Auth_Activate_Token_Insert_Input = {
  activated_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Activate_Token_Max_Fields = {
  __typename?: 'auth_activate_token_max_fields';
  activated_at?: Maybe<Scalars['timestamp']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.activate_token" */
export type Auth_Activate_Token_Max_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Activate_Token_Min_Fields = {
  __typename?: 'auth_activate_token_min_fields';
  activated_at?: Maybe<Scalars['timestamp']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.activate_token" */
export type Auth_Activate_Token_Min_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.activate_token" */
export type Auth_Activate_Token_Mutation_Response = {
  __typename?: 'auth_activate_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Activate_Token>;
};

/** on_conflict condition type for table "auth.activate_token" */
export type Auth_Activate_Token_On_Conflict = {
  constraint: Auth_Activate_Token_Constraint;
  update_columns?: Array<Auth_Activate_Token_Update_Column>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.activate_token". */
export type Auth_Activate_Token_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.activate_token */
export type Auth_Activate_Token_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.activate_token" */
export enum Auth_Activate_Token_Select_Column {
  /** column name */
  ActivatedAt = 'activated_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id'
}

/** select "auth_activate_token_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.activate_token" */
export enum Auth_Activate_Token_Select_Column_Auth_Activate_Token_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** select "auth_activate_token_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.activate_token" */
export enum Auth_Activate_Token_Select_Column_Auth_Activate_Token_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** input type for updating data in table "auth.activate_token" */
export type Auth_Activate_Token_Set_Input = {
  activated_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_activate_token" */
export type Auth_Activate_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Activate_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Activate_Token_Stream_Cursor_Value_Input = {
  activated_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.activate_token" */
export enum Auth_Activate_Token_Update_Column {
  /** column name */
  ActivatedAt = 'activated_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Activate_Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Activate_Token_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Activate_Token_Bool_Exp;
};

/** columns and relationships of "auth.password_reset_token" */
export type Auth_Password_Reset_Token = {
  __typename?: 'auth_password_reset_token';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  is_valid: Scalars['Boolean']['output'];
  reset_at?: Maybe<Scalars['timestamp']['output']>;
  token: Scalars['String']['output'];
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Aggregate = {
  __typename?: 'auth_password_reset_token_aggregate';
  aggregate?: Maybe<Auth_Password_Reset_Token_Aggregate_Fields>;
  nodes: Array<Auth_Password_Reset_Token>;
};

export type Auth_Password_Reset_Token_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Auth_Password_Reset_Token_Aggregate_Bool_Exp_Count>;
};

export type Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_And = {
  arguments: Auth_Password_Reset_Token_Select_Column_Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Auth_Password_Reset_Token_Select_Column_Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_Password_Reset_Token_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Aggregate_Fields = {
  __typename?: 'auth_password_reset_token_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Password_Reset_Token_Max_Fields>;
  min?: Maybe<Auth_Password_Reset_Token_Min_Fields>;
};


/** aggregate fields of "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Password_Reset_Token_Max_Order_By>;
  min?: InputMaybe<Auth_Password_Reset_Token_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Arr_Rel_Insert_Input = {
  data: Array<Auth_Password_Reset_Token_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Password_Reset_Token_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.password_reset_token". All fields are combined with a logical 'AND'. */
export type Auth_Password_Reset_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Password_Reset_Token_Bool_Exp>>;
  _not?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Password_Reset_Token_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  reset_at?: InputMaybe<Timestamp_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.password_reset_token" */
export enum Auth_Password_Reset_Token_Constraint {
  /** unique or primary key constraint on columns "id" */
  PasswordResetTokenPkey = 'password_reset_token_pkey',
  /** unique or primary key constraint on columns "token" */
  PasswordResetTokenTokenKey = 'password_reset_token_token_key'
}

/** input type for inserting data into table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  reset_at?: InputMaybe<Scalars['timestamp']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Auth_Password_Reset_Token_Max_Fields = {
  __typename?: 'auth_password_reset_token_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reset_at?: Maybe<Scalars['timestamp']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reset_at?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Password_Reset_Token_Min_Fields = {
  __typename?: 'auth_password_reset_token_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reset_at?: Maybe<Scalars['timestamp']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reset_at?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Mutation_Response = {
  __typename?: 'auth_password_reset_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Password_Reset_Token>;
};

/** on_conflict condition type for table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_On_Conflict = {
  constraint: Auth_Password_Reset_Token_Constraint;
  update_columns?: Array<Auth_Password_Reset_Token_Update_Column>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.password_reset_token". */
export type Auth_Password_Reset_Token_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  reset_at?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.password_reset_token */
export type Auth_Password_Reset_Token_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.password_reset_token" */
export enum Auth_Password_Reset_Token_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  ResetAt = 'reset_at',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id'
}

/** select "auth_password_reset_token_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.password_reset_token" */
export enum Auth_Password_Reset_Token_Select_Column_Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** select "auth_password_reset_token_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.password_reset_token" */
export enum Auth_Password_Reset_Token_Select_Column_Auth_Password_Reset_Token_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** input type for updating data in table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  reset_at?: InputMaybe<Scalars['timestamp']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "auth_password_reset_token" */
export type Auth_Password_Reset_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Password_Reset_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Password_Reset_Token_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  reset_at?: InputMaybe<Scalars['timestamp']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.password_reset_token" */
export enum Auth_Password_Reset_Token_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  ResetAt = 'reset_at',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id'
}

export type Auth_Password_Reset_Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Password_Reset_Token_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Password_Reset_Token_Bool_Exp;
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
  /** An array relationship */
  activate_tokens: Array<Auth_Activate_Token>;
  /** An aggregate relationship */
  activate_tokens_aggregate: Auth_Activate_Token_Aggregate;
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  password_reset_tokens: Array<Auth_Password_Reset_Token>;
  /** An aggregate relationship */
  password_reset_tokens_aggregate: Auth_Password_Reset_Token_Aggregate;
  role: Scalars['String']['output'];
  /** An array relationship */
  sessions: Array<Auth_Session>;
  /** An aggregate relationship */
  sessions_aggregate: Auth_Session_Aggregate;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_subscribtion_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  subscribtionPlanBySubscribtionPlan?: Maybe<Subscribtion_Plan>;
  subscribtion_plan?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  team?: Maybe<Team>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamp']['output'];
  updated_email?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
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
export type Auth_UserActivate_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Activate_Token_Order_By>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserActivate_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Activate_Token_Order_By>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserPassword_Reset_TokensArgs = {
  distinct_on?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Password_Reset_Token_Order_By>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserPassword_Reset_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Password_Reset_Token_Order_By>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
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

export type Auth_User_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Auth_User_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Auth_User_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Auth_User_Aggregate_Bool_Exp_Count>;
};

export type Auth_User_Aggregate_Bool_Exp_Bool_And = {
  arguments: Auth_User_Select_Column_Auth_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_User_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Auth_User_Select_Column_Auth_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Auth_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "auth.user" */
export type Auth_User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_User_Max_Order_By>;
  min?: InputMaybe<Auth_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user" */
export type Auth_User_Arr_Rel_Insert_Input = {
  data: Array<Auth_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user". All fields are combined with a logical 'AND'. */
export type Auth_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  accounts?: InputMaybe<Auth_Account_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Bool_Exp>;
  activate_tokens?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
  activate_tokens_aggregate?: InputMaybe<Auth_Activate_Token_Aggregate_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  password_reset_tokens?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
  password_reset_tokens_aggregate?: InputMaybe<Auth_Password_Reset_Token_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Auth_Session_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Bool_Exp>;
  stripe_customer_id?: InputMaybe<String_Comparison_Exp>;
  stripe_subscribtion_id?: InputMaybe<String_Comparison_Exp>;
  subscribtionPlanBySubscribtionPlan?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  subscribtion_plan?: InputMaybe<String_Comparison_Exp>;
  team?: InputMaybe<Team_Bool_Exp>;
  team_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  updated_email?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user" */
export enum Auth_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "stripe_customer_id" */
  UserStripeCustomerIdKey = 'user_stripe_customer_id_key',
  /** unique or primary key constraint on columns "stripe_subscribtion_id" */
  UserStripeSubscribtionIdKey = 'user_stripe_subscribtion_id_key',
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = 'user_username_key'
}

/** input type for inserting data into table "auth.user" */
export type Auth_User_Insert_Input = {
  accounts?: InputMaybe<Auth_Account_Arr_Rel_Insert_Input>;
  activate_tokens?: InputMaybe<Auth_Activate_Token_Arr_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_reset_tokens?: InputMaybe<Auth_Password_Reset_Token_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Auth_Session_Arr_Rel_Insert_Input>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  stripe_subscribtion_id?: InputMaybe<Scalars['String']['input']>;
  subscribtionPlanBySubscribtionPlan?: InputMaybe<Subscribtion_Plan_Obj_Rel_Insert_Input>;
  subscribtion_plan?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  updated_email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_User_Max_Fields = {
  __typename?: 'auth_user_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_subscribtion_id?: Maybe<Scalars['String']['output']>;
  subscribtion_plan?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  updated_email?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "auth.user" */
export type Auth_User_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  stripe_subscribtion_id?: InputMaybe<Order_By>;
  subscribtion_plan?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_email?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_User_Min_Fields = {
  __typename?: 'auth_user_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_subscribtion_id?: Maybe<Scalars['String']['output']>;
  subscribtion_plan?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  updated_email?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "auth.user" */
export type Auth_User_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  stripe_subscribtion_id?: InputMaybe<Order_By>;
  subscribtion_plan?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_email?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
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
  activate_tokens_aggregate?: InputMaybe<Auth_Activate_Token_Aggregate_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  password_reset_tokens_aggregate?: InputMaybe<Auth_Password_Reset_Token_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  stripe_subscribtion_id?: InputMaybe<Order_By>;
  subscribtionPlanBySubscribtionPlan?: InputMaybe<Subscribtion_Plan_Order_By>;
  subscribtion_plan?: InputMaybe<Order_By>;
  team?: InputMaybe<Team_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_email?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user */
export type Auth_User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user" */
export enum Auth_User_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  StripeSubscribtionId = 'stripe_subscribtion_id',
  /** column name */
  SubscribtionPlan = 'subscribtion_plan',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedEmail = 'updated_email',
  /** column name */
  Username = 'username'
}

/** select "auth_user_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.user" */
export enum Auth_User_Select_Column_Auth_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "auth_user_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.user" */
export enum Auth_User_Select_Column_Auth_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "auth.user" */
export type Auth_User_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  stripe_subscribtion_id?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  updated_email?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  stripe_subscribtion_id?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  updated_email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.user" */
export enum Auth_User_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  StripeSubscribtionId = 'stripe_subscribtion_id',
  /** column name */
  SubscribtionPlan = 'subscribtion_plan',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedEmail = 'updated_email',
  /** column name */
  Username = 'username'
}

export type Auth_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_User_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "language" */
export type Language = {
  __typename?: 'language';
  code: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  translations: Array<Translation>;
  /** An aggregate relationship */
  translations_aggregate: Translation_Aggregate;
  updated_at: Scalars['timestamp']['output'];
};


/** columns and relationships of "language" */
export type LanguageTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};


/** columns and relationships of "language" */
export type LanguageTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** aggregated selection of "language" */
export type Language_Aggregate = {
  __typename?: 'language_aggregate';
  aggregate?: Maybe<Language_Aggregate_Fields>;
  nodes: Array<Language>;
};

/** aggregate fields of "language" */
export type Language_Aggregate_Fields = {
  __typename?: 'language_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Language_Max_Fields>;
  min?: Maybe<Language_Min_Fields>;
};


/** aggregate fields of "language" */
export type Language_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Language_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "language". All fields are combined with a logical 'AND'. */
export type Language_Bool_Exp = {
  _and?: InputMaybe<Array<Language_Bool_Exp>>;
  _not?: InputMaybe<Language_Bool_Exp>;
  _or?: InputMaybe<Array<Language_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Translation_Bool_Exp>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "language" */
export enum Language_Constraint {
  /** unique or primary key constraint on columns "name" */
  LanguageNameKey = 'language_name_key',
  /** unique or primary key constraint on columns "code" */
  LanguagePkey = 'language_pkey'
}

/** input type for inserting data into table "language" */
export type Language_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Translation_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Language_Max_Fields = {
  __typename?: 'language_max_fields';
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Language_Min_Fields = {
  __typename?: 'language_min_fields';
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "language" */
export type Language_Mutation_Response = {
  __typename?: 'language_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Language>;
};

/** input type for inserting object relation for remote table "language" */
export type Language_Obj_Rel_Insert_Input = {
  data: Language_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Language_On_Conflict>;
};

/** on_conflict condition type for table "language" */
export type Language_On_Conflict = {
  constraint: Language_Constraint;
  update_columns?: Array<Language_Update_Column>;
  where?: InputMaybe<Language_Bool_Exp>;
};

/** Ordering options when selecting data from "language". */
export type Language_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: language */
export type Language_Pk_Columns_Input = {
  code: Scalars['String']['input'];
};

/** select columns of table "language" */
export enum Language_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "language" */
export type Language_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "language" */
export type Language_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Language_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Language_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "language" */
export enum Language_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Language_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Language_Set_Input>;
  /** filter the rows which have to be updated */
  where: Language_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account" */
  delete_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** delete single row from the table: "auth.account" */
  delete_auth_account_by_pk?: Maybe<Auth_Account>;
  /** delete data from the table: "auth.activate_token" */
  delete_auth_activate_token?: Maybe<Auth_Activate_Token_Mutation_Response>;
  /** delete single row from the table: "auth.activate_token" */
  delete_auth_activate_token_by_pk?: Maybe<Auth_Activate_Token>;
  /** delete data from the table: "auth.password_reset_token" */
  delete_auth_password_reset_token?: Maybe<Auth_Password_Reset_Token_Mutation_Response>;
  /** delete single row from the table: "auth.password_reset_token" */
  delete_auth_password_reset_token_by_pk?: Maybe<Auth_Password_Reset_Token>;
  /** delete data from the table: "auth.session" */
  delete_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** delete single row from the table: "auth.session" */
  delete_auth_session_by_pk?: Maybe<Auth_Session>;
  /** delete data from the table: "auth.user" */
  delete_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** delete single row from the table: "auth.user" */
  delete_auth_user_by_pk?: Maybe<Auth_User>;
  /** delete data from the table: "language" */
  delete_language?: Maybe<Language_Mutation_Response>;
  /** delete single row from the table: "language" */
  delete_language_by_pk?: Maybe<Language>;
  /** delete data from the table: "subscribtion_feature" */
  delete_subscribtion_feature?: Maybe<Subscribtion_Feature_Mutation_Response>;
  /** delete single row from the table: "subscribtion_feature" */
  delete_subscribtion_feature_by_pk?: Maybe<Subscribtion_Feature>;
  /** delete data from the table: "subscribtion_plan" */
  delete_subscribtion_plan?: Maybe<Subscribtion_Plan_Mutation_Response>;
  /** delete single row from the table: "subscribtion_plan" */
  delete_subscribtion_plan_by_pk?: Maybe<Subscribtion_Plan>;
  /** delete data from the table: "subscribtion_plan_subscribtion_feature_assoc" */
  delete_subscribtion_plan_subscribtion_feature_assoc?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Mutation_Response>;
  /** delete single row from the table: "subscribtion_plan_subscribtion_feature_assoc" */
  delete_subscribtion_plan_subscribtion_feature_assoc_by_pk?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** delete data from the table: "text_content" */
  delete_text_content?: Maybe<Text_Content_Mutation_Response>;
  /** delete single row from the table: "text_content" */
  delete_text_content_by_pk?: Maybe<Text_Content>;
  /** delete data from the table: "translation" */
  delete_translation?: Maybe<Translation_Mutation_Response>;
  /** delete single row from the table: "translation" */
  delete_translation_by_pk?: Maybe<Translation>;
  /** insert data into the table: "auth.account" */
  insert_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** insert a single row into the table: "auth.account" */
  insert_auth_account_one?: Maybe<Auth_Account>;
  /** insert data into the table: "auth.activate_token" */
  insert_auth_activate_token?: Maybe<Auth_Activate_Token_Mutation_Response>;
  /** insert a single row into the table: "auth.activate_token" */
  insert_auth_activate_token_one?: Maybe<Auth_Activate_Token>;
  /** insert data into the table: "auth.password_reset_token" */
  insert_auth_password_reset_token?: Maybe<Auth_Password_Reset_Token_Mutation_Response>;
  /** insert a single row into the table: "auth.password_reset_token" */
  insert_auth_password_reset_token_one?: Maybe<Auth_Password_Reset_Token>;
  /** insert data into the table: "auth.session" */
  insert_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** insert a single row into the table: "auth.session" */
  insert_auth_session_one?: Maybe<Auth_Session>;
  /** insert data into the table: "auth.user" */
  insert_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** insert a single row into the table: "auth.user" */
  insert_auth_user_one?: Maybe<Auth_User>;
  /** insert data into the table: "language" */
  insert_language?: Maybe<Language_Mutation_Response>;
  /** insert a single row into the table: "language" */
  insert_language_one?: Maybe<Language>;
  /** insert data into the table: "subscribtion_feature" */
  insert_subscribtion_feature?: Maybe<Subscribtion_Feature_Mutation_Response>;
  /** insert a single row into the table: "subscribtion_feature" */
  insert_subscribtion_feature_one?: Maybe<Subscribtion_Feature>;
  /** insert data into the table: "subscribtion_plan" */
  insert_subscribtion_plan?: Maybe<Subscribtion_Plan_Mutation_Response>;
  /** insert a single row into the table: "subscribtion_plan" */
  insert_subscribtion_plan_one?: Maybe<Subscribtion_Plan>;
  /** insert data into the table: "subscribtion_plan_subscribtion_feature_assoc" */
  insert_subscribtion_plan_subscribtion_feature_assoc?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Mutation_Response>;
  /** insert a single row into the table: "subscribtion_plan_subscribtion_feature_assoc" */
  insert_subscribtion_plan_subscribtion_feature_assoc_one?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** insert data into the table: "text_content" */
  insert_text_content?: Maybe<Text_Content_Mutation_Response>;
  /** insert a single row into the table: "text_content" */
  insert_text_content_one?: Maybe<Text_Content>;
  /** insert data into the table: "translation" */
  insert_translation?: Maybe<Translation_Mutation_Response>;
  /** insert a single row into the table: "translation" */
  insert_translation_one?: Maybe<Translation>;
  /** update data of the table: "auth.account" */
  update_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** update single row of the table: "auth.account" */
  update_auth_account_by_pk?: Maybe<Auth_Account>;
  /** update multiples rows of table: "auth.account" */
  update_auth_account_many?: Maybe<Array<Maybe<Auth_Account_Mutation_Response>>>;
  /** update data of the table: "auth.activate_token" */
  update_auth_activate_token?: Maybe<Auth_Activate_Token_Mutation_Response>;
  /** update single row of the table: "auth.activate_token" */
  update_auth_activate_token_by_pk?: Maybe<Auth_Activate_Token>;
  /** update multiples rows of table: "auth.activate_token" */
  update_auth_activate_token_many?: Maybe<Array<Maybe<Auth_Activate_Token_Mutation_Response>>>;
  /** update data of the table: "auth.password_reset_token" */
  update_auth_password_reset_token?: Maybe<Auth_Password_Reset_Token_Mutation_Response>;
  /** update single row of the table: "auth.password_reset_token" */
  update_auth_password_reset_token_by_pk?: Maybe<Auth_Password_Reset_Token>;
  /** update multiples rows of table: "auth.password_reset_token" */
  update_auth_password_reset_token_many?: Maybe<Array<Maybe<Auth_Password_Reset_Token_Mutation_Response>>>;
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
  /** update data of the table: "language" */
  update_language?: Maybe<Language_Mutation_Response>;
  /** update single row of the table: "language" */
  update_language_by_pk?: Maybe<Language>;
  /** update multiples rows of table: "language" */
  update_language_many?: Maybe<Array<Maybe<Language_Mutation_Response>>>;
  /** update data of the table: "subscribtion_feature" */
  update_subscribtion_feature?: Maybe<Subscribtion_Feature_Mutation_Response>;
  /** update single row of the table: "subscribtion_feature" */
  update_subscribtion_feature_by_pk?: Maybe<Subscribtion_Feature>;
  /** update multiples rows of table: "subscribtion_feature" */
  update_subscribtion_feature_many?: Maybe<Array<Maybe<Subscribtion_Feature_Mutation_Response>>>;
  /** update data of the table: "subscribtion_plan" */
  update_subscribtion_plan?: Maybe<Subscribtion_Plan_Mutation_Response>;
  /** update single row of the table: "subscribtion_plan" */
  update_subscribtion_plan_by_pk?: Maybe<Subscribtion_Plan>;
  /** update multiples rows of table: "subscribtion_plan" */
  update_subscribtion_plan_many?: Maybe<Array<Maybe<Subscribtion_Plan_Mutation_Response>>>;
  /** update data of the table: "subscribtion_plan_subscribtion_feature_assoc" */
  update_subscribtion_plan_subscribtion_feature_assoc?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Mutation_Response>;
  /** update single row of the table: "subscribtion_plan_subscribtion_feature_assoc" */
  update_subscribtion_plan_subscribtion_feature_assoc_by_pk?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** update multiples rows of table: "subscribtion_plan_subscribtion_feature_assoc" */
  update_subscribtion_plan_subscribtion_feature_assoc_many?: Maybe<Array<Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Mutation_Response>>>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
  /** update multiples rows of table: "team" */
  update_team_many?: Maybe<Array<Maybe<Team_Mutation_Response>>>;
  /** update data of the table: "text_content" */
  update_text_content?: Maybe<Text_Content_Mutation_Response>;
  /** update single row of the table: "text_content" */
  update_text_content_by_pk?: Maybe<Text_Content>;
  /** update multiples rows of table: "text_content" */
  update_text_content_many?: Maybe<Array<Maybe<Text_Content_Mutation_Response>>>;
  /** update data of the table: "translation" */
  update_translation?: Maybe<Translation_Mutation_Response>;
  /** update single row of the table: "translation" */
  update_translation_by_pk?: Maybe<Translation>;
  /** update multiples rows of table: "translation" */
  update_translation_many?: Maybe<Array<Maybe<Translation_Mutation_Response>>>;
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
export type Mutation_RootDelete_Auth_Activate_TokenArgs = {
  where: Auth_Activate_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Activate_Token_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Password_Reset_TokenArgs = {
  where: Auth_Password_Reset_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Password_Reset_Token_By_PkArgs = {
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
export type Mutation_RootDelete_LanguageArgs = {
  where: Language_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Language_By_PkArgs = {
  code: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subscribtion_FeatureArgs = {
  where: Subscribtion_Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscribtion_Feature_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subscribtion_PlanArgs = {
  where: Subscribtion_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscribtion_Plan_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subscribtion_Plan_Subscribtion_Feature_AssocArgs = {
  where: Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscribtion_Plan_Subscribtion_Feature_Assoc_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Text_ContentArgs = {
  where: Text_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Text_Content_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TranslationArgs = {
  where: Translation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Translation_By_PkArgs = {
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
export type Mutation_RootInsert_Auth_Activate_TokenArgs = {
  objects: Array<Auth_Activate_Token_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Activate_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Activate_Token_OneArgs = {
  object: Auth_Activate_Token_Insert_Input;
  on_conflict?: InputMaybe<Auth_Activate_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Password_Reset_TokenArgs = {
  objects: Array<Auth_Password_Reset_Token_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Password_Reset_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Password_Reset_Token_OneArgs = {
  object: Auth_Password_Reset_Token_Insert_Input;
  on_conflict?: InputMaybe<Auth_Password_Reset_Token_On_Conflict>;
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
export type Mutation_RootInsert_LanguageArgs = {
  objects: Array<Language_Insert_Input>;
  on_conflict?: InputMaybe<Language_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Language_OneArgs = {
  object: Language_Insert_Input;
  on_conflict?: InputMaybe<Language_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribtion_FeatureArgs = {
  objects: Array<Subscribtion_Feature_Insert_Input>;
  on_conflict?: InputMaybe<Subscribtion_Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribtion_Feature_OneArgs = {
  object: Subscribtion_Feature_Insert_Input;
  on_conflict?: InputMaybe<Subscribtion_Feature_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribtion_PlanArgs = {
  objects: Array<Subscribtion_Plan_Insert_Input>;
  on_conflict?: InputMaybe<Subscribtion_Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribtion_Plan_OneArgs = {
  object: Subscribtion_Plan_Insert_Input;
  on_conflict?: InputMaybe<Subscribtion_Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribtion_Plan_Subscribtion_Feature_AssocArgs = {
  objects: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Insert_Input>;
  on_conflict?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribtion_Plan_Subscribtion_Feature_Assoc_OneArgs = {
  object: Subscribtion_Plan_Subscribtion_Feature_Assoc_Insert_Input;
  on_conflict?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: InputMaybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Text_ContentArgs = {
  objects: Array<Text_Content_Insert_Input>;
  on_conflict?: InputMaybe<Text_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Text_Content_OneArgs = {
  object: Text_Content_Insert_Input;
  on_conflict?: InputMaybe<Text_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TranslationArgs = {
  objects: Array<Translation_Insert_Input>;
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Translation_OneArgs = {
  object: Translation_Insert_Input;
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountArgs = {
  _inc?: InputMaybe<Auth_Account_Inc_Input>;
  _set?: InputMaybe<Auth_Account_Set_Input>;
  where: Auth_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_By_PkArgs = {
  _inc?: InputMaybe<Auth_Account_Inc_Input>;
  _set?: InputMaybe<Auth_Account_Set_Input>;
  pk_columns: Auth_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ManyArgs = {
  updates: Array<Auth_Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Activate_TokenArgs = {
  _set?: InputMaybe<Auth_Activate_Token_Set_Input>;
  where: Auth_Activate_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Activate_Token_By_PkArgs = {
  _set?: InputMaybe<Auth_Activate_Token_Set_Input>;
  pk_columns: Auth_Activate_Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Activate_Token_ManyArgs = {
  updates: Array<Auth_Activate_Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Password_Reset_TokenArgs = {
  _set?: InputMaybe<Auth_Password_Reset_Token_Set_Input>;
  where: Auth_Password_Reset_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Password_Reset_Token_By_PkArgs = {
  _set?: InputMaybe<Auth_Password_Reset_Token_Set_Input>;
  pk_columns: Auth_Password_Reset_Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Password_Reset_Token_ManyArgs = {
  updates: Array<Auth_Password_Reset_Token_Updates>;
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
export type Mutation_RootUpdate_LanguageArgs = {
  _set?: InputMaybe<Language_Set_Input>;
  where: Language_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Language_By_PkArgs = {
  _set?: InputMaybe<Language_Set_Input>;
  pk_columns: Language_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Language_ManyArgs = {
  updates: Array<Language_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_FeatureArgs = {
  _set?: InputMaybe<Subscribtion_Feature_Set_Input>;
  where: Subscribtion_Feature_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Feature_By_PkArgs = {
  _set?: InputMaybe<Subscribtion_Feature_Set_Input>;
  pk_columns: Subscribtion_Feature_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Feature_ManyArgs = {
  updates: Array<Subscribtion_Feature_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_PlanArgs = {
  _set?: InputMaybe<Subscribtion_Plan_Set_Input>;
  where: Subscribtion_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Plan_By_PkArgs = {
  _set?: InputMaybe<Subscribtion_Plan_Set_Input>;
  pk_columns: Subscribtion_Plan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Plan_ManyArgs = {
  updates: Array<Subscribtion_Plan_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Plan_Subscribtion_Feature_AssocArgs = {
  _set?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Set_Input>;
  where: Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Plan_Subscribtion_Feature_Assoc_By_PkArgs = {
  _set?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Set_Input>;
  pk_columns: Subscribtion_Plan_Subscribtion_Feature_Assoc_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribtion_Plan_Subscribtion_Feature_Assoc_ManyArgs = {
  updates: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _set?: InputMaybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Team_ManyArgs = {
  updates: Array<Team_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Text_ContentArgs = {
  _set?: InputMaybe<Text_Content_Set_Input>;
  where: Text_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Text_Content_By_PkArgs = {
  _set?: InputMaybe<Text_Content_Set_Input>;
  pk_columns: Text_Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Text_Content_ManyArgs = {
  updates: Array<Text_Content_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TranslationArgs = {
  _set?: InputMaybe<Translation_Set_Input>;
  where: Translation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Translation_By_PkArgs = {
  _set?: InputMaybe<Translation_Set_Input>;
  pk_columns: Translation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Translation_ManyArgs = {
  updates: Array<Translation_Updates>;
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
  /** fetch data from the table: "auth.activate_token" */
  auth_activate_token: Array<Auth_Activate_Token>;
  /** fetch aggregated fields from the table: "auth.activate_token" */
  auth_activate_token_aggregate: Auth_Activate_Token_Aggregate;
  /** fetch data from the table: "auth.activate_token" using primary key columns */
  auth_activate_token_by_pk?: Maybe<Auth_Activate_Token>;
  /** fetch data from the table: "auth.password_reset_token" */
  auth_password_reset_token: Array<Auth_Password_Reset_Token>;
  /** fetch aggregated fields from the table: "auth.password_reset_token" */
  auth_password_reset_token_aggregate: Auth_Password_Reset_Token_Aggregate;
  /** fetch data from the table: "auth.password_reset_token" using primary key columns */
  auth_password_reset_token_by_pk?: Maybe<Auth_Password_Reset_Token>;
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
  /** fetch data from the table: "language" */
  language: Array<Language>;
  /** fetch aggregated fields from the table: "language" */
  language_aggregate: Language_Aggregate;
  /** fetch data from the table: "language" using primary key columns */
  language_by_pk?: Maybe<Language>;
  /** fetch data from the table: "subscribtion_feature" */
  subscribtion_feature: Array<Subscribtion_Feature>;
  /** fetch aggregated fields from the table: "subscribtion_feature" */
  subscribtion_feature_aggregate: Subscribtion_Feature_Aggregate;
  /** fetch data from the table: "subscribtion_feature" using primary key columns */
  subscribtion_feature_by_pk?: Maybe<Subscribtion_Feature>;
  /** fetch data from the table: "subscribtion_plan" */
  subscribtion_plan: Array<Subscribtion_Plan>;
  /** fetch aggregated fields from the table: "subscribtion_plan" */
  subscribtion_plan_aggregate: Subscribtion_Plan_Aggregate;
  /** fetch data from the table: "subscribtion_plan" using primary key columns */
  subscribtion_plan_by_pk?: Maybe<Subscribtion_Plan>;
  /** fetch data from the table: "subscribtion_plan_subscribtion_feature_assoc" */
  subscribtion_plan_subscribtion_feature_assoc: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** fetch aggregated fields from the table: "subscribtion_plan_subscribtion_feature_assoc" */
  subscribtion_plan_subscribtion_feature_assoc_aggregate: Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate;
  /** fetch data from the table: "subscribtion_plan_subscribtion_feature_assoc" using primary key columns */
  subscribtion_plan_subscribtion_feature_assoc_by_pk?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "text_content" */
  text_content: Array<Text_Content>;
  /** fetch aggregated fields from the table: "text_content" */
  text_content_aggregate: Text_Content_Aggregate;
  /** fetch data from the table: "text_content" using primary key columns */
  text_content_by_pk?: Maybe<Text_Content>;
  /** fetch data from the table: "translation" */
  translation: Array<Translation>;
  /** fetch aggregated fields from the table: "translation" */
  translation_aggregate: Translation_Aggregate;
  /** fetch data from the table: "translation" using primary key columns */
  translation_by_pk?: Maybe<Translation>;
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


export type Query_RootAuth_Activate_TokenArgs = {
  distinct_on?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Activate_Token_Order_By>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


export type Query_RootAuth_Activate_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Activate_Token_Order_By>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


export type Query_RootAuth_Activate_Token_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuth_Password_Reset_TokenArgs = {
  distinct_on?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Password_Reset_Token_Order_By>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
};


export type Query_RootAuth_Password_Reset_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Password_Reset_Token_Order_By>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
};


export type Query_RootAuth_Password_Reset_Token_By_PkArgs = {
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


export type Query_RootLanguageArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Query_RootLanguage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Query_RootLanguage_By_PkArgs = {
  code: Scalars['String']['input'];
};


export type Query_RootSubscribtion_FeatureArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Feature_Order_By>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


export type Query_RootSubscribtion_Feature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Feature_Order_By>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


export type Query_RootSubscribtion_Feature_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootSubscribtion_PlanArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


export type Query_RootSubscribtion_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


export type Query_RootSubscribtion_Plan_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootSubscribtion_Plan_Subscribtion_Feature_AssocArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


export type Query_RootSubscribtion_Plan_Subscribtion_Feature_Assoc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


export type Query_RootSubscribtion_Plan_Subscribtion_Feature_Assoc_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootText_ContentArgs = {
  distinct_on?: InputMaybe<Array<Text_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Content_Order_By>>;
  where?: InputMaybe<Text_Content_Bool_Exp>;
};


export type Query_RootText_Content_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Text_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Content_Order_By>>;
  where?: InputMaybe<Text_Content_Bool_Exp>;
};


export type Query_RootText_Content_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTranslationArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};


export type Query_RootTranslation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};


export type Query_RootTranslation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "subscribtion_feature" */
export type Subscribtion_Feature = {
  __typename?: 'subscribtion_feature';
  created_at: Scalars['timestamp']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  subscribtion_plan_subscribtion_feature_assocs: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** An aggregate relationship */
  subscribtion_plan_subscribtion_feature_assocs_aggregate: Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate;
  /** An object relationship */
  text_content: Text_Content;
  text_content_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamp']['output'];
};


/** columns and relationships of "subscribtion_feature" */
export type Subscribtion_FeatureSubscribtion_Plan_Subscribtion_Feature_AssocsArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


/** columns and relationships of "subscribtion_feature" */
export type Subscribtion_FeatureSubscribtion_Plan_Subscribtion_Feature_Assocs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};

/** aggregated selection of "subscribtion_feature" */
export type Subscribtion_Feature_Aggregate = {
  __typename?: 'subscribtion_feature_aggregate';
  aggregate?: Maybe<Subscribtion_Feature_Aggregate_Fields>;
  nodes: Array<Subscribtion_Feature>;
};

export type Subscribtion_Feature_Aggregate_Bool_Exp = {
  count?: InputMaybe<Subscribtion_Feature_Aggregate_Bool_Exp_Count>;
};

export type Subscribtion_Feature_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subscribtion_feature" */
export type Subscribtion_Feature_Aggregate_Fields = {
  __typename?: 'subscribtion_feature_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Subscribtion_Feature_Max_Fields>;
  min?: Maybe<Subscribtion_Feature_Min_Fields>;
};


/** aggregate fields of "subscribtion_feature" */
export type Subscribtion_Feature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subscribtion_feature" */
export type Subscribtion_Feature_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subscribtion_Feature_Max_Order_By>;
  min?: InputMaybe<Subscribtion_Feature_Min_Order_By>;
};

/** input type for inserting array relation for remote table "subscribtion_feature" */
export type Subscribtion_Feature_Arr_Rel_Insert_Input = {
  data: Array<Subscribtion_Feature_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscribtion_Feature_On_Conflict>;
};

/** Boolean expression to filter rows from the table "subscribtion_feature". All fields are combined with a logical 'AND'. */
export type Subscribtion_Feature_Bool_Exp = {
  _and?: InputMaybe<Array<Subscribtion_Feature_Bool_Exp>>;
  _not?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
  _or?: InputMaybe<Array<Subscribtion_Feature_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  subscribtion_plan_subscribtion_feature_assocs?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
  subscribtion_plan_subscribtion_feature_assocs_aggregate?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Bool_Exp>;
  text_content?: InputMaybe<Text_Content_Bool_Exp>;
  text_content_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscribtion_feature" */
export enum Subscribtion_Feature_Constraint {
  /** unique or primary key constraint on columns "name" */
  SubscribtionFeaturePkey = 'subscribtion_feature_pkey'
}

/** input type for inserting data into table "subscribtion_feature" */
export type Subscribtion_Feature_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan_subscribtion_feature_assocs?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Arr_Rel_Insert_Input>;
  text_content?: InputMaybe<Text_Content_Obj_Rel_Insert_Input>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Subscribtion_Feature_Max_Fields = {
  __typename?: 'subscribtion_feature_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text_content_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "subscribtion_feature" */
export type Subscribtion_Feature_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subscribtion_Feature_Min_Fields = {
  __typename?: 'subscribtion_feature_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text_content_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "subscribtion_feature" */
export type Subscribtion_Feature_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subscribtion_feature" */
export type Subscribtion_Feature_Mutation_Response = {
  __typename?: 'subscribtion_feature_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscribtion_Feature>;
};

/** input type for inserting object relation for remote table "subscribtion_feature" */
export type Subscribtion_Feature_Obj_Rel_Insert_Input = {
  data: Subscribtion_Feature_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscribtion_Feature_On_Conflict>;
};

/** on_conflict condition type for table "subscribtion_feature" */
export type Subscribtion_Feature_On_Conflict = {
  constraint: Subscribtion_Feature_Constraint;
  update_columns?: Array<Subscribtion_Feature_Update_Column>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};

/** Ordering options when selecting data from "subscribtion_feature". */
export type Subscribtion_Feature_Order_By = {
  created_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  subscribtion_plan_subscribtion_feature_assocs_aggregate?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Order_By>;
  text_content?: InputMaybe<Text_Content_Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscribtion_feature */
export type Subscribtion_Feature_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "subscribtion_feature" */
export enum Subscribtion_Feature_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  TextContentId = 'text_content_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subscribtion_feature" */
export type Subscribtion_Feature_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "subscribtion_feature" */
export type Subscribtion_Feature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscribtion_Feature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscribtion_Feature_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "subscribtion_feature" */
export enum Subscribtion_Feature_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  TextContentId = 'text_content_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscribtion_Feature_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscribtion_Feature_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscribtion_Feature_Bool_Exp;
};

/** columns and relationships of "subscribtion_plan" */
export type Subscribtion_Plan = {
  __typename?: 'subscribtion_plan';
  created_at: Scalars['timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  popular: Scalars['Boolean']['output'];
  stripe_monthly_price_id: Scalars['String']['output'];
  stripe_yearly_price_id: Scalars['String']['output'];
  /** An array relationship */
  subscribtion_plan_subscribtion_feature_assocs: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** An aggregate relationship */
  subscribtion_plan_subscribtion_feature_assocs_aggregate: Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate;
  /** An object relationship */
  text_content: Text_Content;
  text_content_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  users: Array<Auth_User>;
  /** An aggregate relationship */
  users_aggregate: Auth_User_Aggregate;
};


/** columns and relationships of "subscribtion_plan" */
export type Subscribtion_PlanSubscribtion_Plan_Subscribtion_Feature_AssocsArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


/** columns and relationships of "subscribtion_plan" */
export type Subscribtion_PlanSubscribtion_Plan_Subscribtion_Feature_Assocs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


/** columns and relationships of "subscribtion_plan" */
export type Subscribtion_PlanUsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


/** columns and relationships of "subscribtion_plan" */
export type Subscribtion_PlanUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** aggregated selection of "subscribtion_plan" */
export type Subscribtion_Plan_Aggregate = {
  __typename?: 'subscribtion_plan_aggregate';
  aggregate?: Maybe<Subscribtion_Plan_Aggregate_Fields>;
  nodes: Array<Subscribtion_Plan>;
};

export type Subscribtion_Plan_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Subscribtion_Plan_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Subscribtion_Plan_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Subscribtion_Plan_Aggregate_Bool_Exp_Count>;
};

export type Subscribtion_Plan_Aggregate_Bool_Exp_Bool_And = {
  arguments: Subscribtion_Plan_Select_Column_Subscribtion_Plan_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Subscribtion_Plan_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Subscribtion_Plan_Select_Column_Subscribtion_Plan_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Subscribtion_Plan_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subscribtion_plan" */
export type Subscribtion_Plan_Aggregate_Fields = {
  __typename?: 'subscribtion_plan_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Subscribtion_Plan_Max_Fields>;
  min?: Maybe<Subscribtion_Plan_Min_Fields>;
};


/** aggregate fields of "subscribtion_plan" */
export type Subscribtion_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subscribtion_plan" */
export type Subscribtion_Plan_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subscribtion_Plan_Max_Order_By>;
  min?: InputMaybe<Subscribtion_Plan_Min_Order_By>;
};

/** input type for inserting array relation for remote table "subscribtion_plan" */
export type Subscribtion_Plan_Arr_Rel_Insert_Input = {
  data: Array<Subscribtion_Plan_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscribtion_Plan_On_Conflict>;
};

/** Boolean expression to filter rows from the table "subscribtion_plan". All fields are combined with a logical 'AND'. */
export type Subscribtion_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Subscribtion_Plan_Bool_Exp>>;
  _not?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Subscribtion_Plan_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  popular?: InputMaybe<Boolean_Comparison_Exp>;
  stripe_monthly_price_id?: InputMaybe<String_Comparison_Exp>;
  stripe_yearly_price_id?: InputMaybe<String_Comparison_Exp>;
  subscribtion_plan_subscribtion_feature_assocs?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
  subscribtion_plan_subscribtion_feature_assocs_aggregate?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Bool_Exp>;
  text_content?: InputMaybe<Text_Content_Bool_Exp>;
  text_content_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Auth_User_Bool_Exp>;
  users_aggregate?: InputMaybe<Auth_User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "subscribtion_plan" */
export enum Subscribtion_Plan_Constraint {
  /** unique or primary key constraint on columns "name" */
  SubscribtionPlanPkey = 'subscribtion_plan_pkey',
  /** unique or primary key constraint on columns "stripe_monthly_price_id" */
  SubscribtionPlanStripeMonthlyPriceIdKey = 'subscribtion_plan_stripe_monthly_price_id_key',
  /** unique or primary key constraint on columns "stripe_yearly_price_id" */
  SubscribtionPlanStripeYearlyPriceIdKey = 'subscribtion_plan_stripe_yearly_price_id_key'
}

/** input type for inserting data into table "subscribtion_plan" */
export type Subscribtion_Plan_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  stripe_monthly_price_id?: InputMaybe<Scalars['String']['input']>;
  stripe_yearly_price_id?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan_subscribtion_feature_assocs?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Arr_Rel_Insert_Input>;
  text_content?: InputMaybe<Text_Content_Obj_Rel_Insert_Input>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users?: InputMaybe<Auth_User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Subscribtion_Plan_Max_Fields = {
  __typename?: 'subscribtion_plan_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stripe_monthly_price_id?: Maybe<Scalars['String']['output']>;
  stripe_yearly_price_id?: Maybe<Scalars['String']['output']>;
  text_content_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "subscribtion_plan" */
export type Subscribtion_Plan_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_monthly_price_id?: InputMaybe<Order_By>;
  stripe_yearly_price_id?: InputMaybe<Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subscribtion_Plan_Min_Fields = {
  __typename?: 'subscribtion_plan_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stripe_monthly_price_id?: Maybe<Scalars['String']['output']>;
  stripe_yearly_price_id?: Maybe<Scalars['String']['output']>;
  text_content_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "subscribtion_plan" */
export type Subscribtion_Plan_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_monthly_price_id?: InputMaybe<Order_By>;
  stripe_yearly_price_id?: InputMaybe<Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subscribtion_plan" */
export type Subscribtion_Plan_Mutation_Response = {
  __typename?: 'subscribtion_plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscribtion_Plan>;
};

/** input type for inserting object relation for remote table "subscribtion_plan" */
export type Subscribtion_Plan_Obj_Rel_Insert_Input = {
  data: Subscribtion_Plan_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscribtion_Plan_On_Conflict>;
};

/** on_conflict condition type for table "subscribtion_plan" */
export type Subscribtion_Plan_On_Conflict = {
  constraint: Subscribtion_Plan_Constraint;
  update_columns?: Array<Subscribtion_Plan_Update_Column>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};

/** Ordering options when selecting data from "subscribtion_plan". */
export type Subscribtion_Plan_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  popular?: InputMaybe<Order_By>;
  stripe_monthly_price_id?: InputMaybe<Order_By>;
  stripe_yearly_price_id?: InputMaybe<Order_By>;
  subscribtion_plan_subscribtion_feature_assocs_aggregate?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Order_By>;
  text_content?: InputMaybe<Text_Content_Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Auth_User_Aggregate_Order_By>;
};

/** primary key columns input for table: subscribtion_plan */
export type Subscribtion_Plan_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "subscribtion_plan" */
export enum Subscribtion_Plan_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Popular = 'popular',
  /** column name */
  StripeMonthlyPriceId = 'stripe_monthly_price_id',
  /** column name */
  StripeYearlyPriceId = 'stripe_yearly_price_id',
  /** column name */
  TextContentId = 'text_content_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "subscribtion_plan_aggregate_bool_exp_bool_and_arguments_columns" columns of table "subscribtion_plan" */
export enum Subscribtion_Plan_Select_Column_Subscribtion_Plan_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Popular = 'popular'
}

/** select "subscribtion_plan_aggregate_bool_exp_bool_or_arguments_columns" columns of table "subscribtion_plan" */
export enum Subscribtion_Plan_Select_Column_Subscribtion_Plan_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Popular = 'popular'
}

/** input type for updating data in table "subscribtion_plan" */
export type Subscribtion_Plan_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  stripe_monthly_price_id?: InputMaybe<Scalars['String']['input']>;
  stripe_yearly_price_id?: InputMaybe<Scalars['String']['input']>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "subscribtion_plan" */
export type Subscribtion_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscribtion_Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscribtion_Plan_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  stripe_monthly_price_id?: InputMaybe<Scalars['String']['input']>;
  stripe_yearly_price_id?: InputMaybe<Scalars['String']['input']>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc = {
  __typename?: 'subscribtion_plan_subscribtion_feature_assoc';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  subscribtionFeatureBySubscribtionFeature: Subscribtion_Feature;
  /** An object relationship */
  subscribtionPlanBySubscribtionPlan: Subscribtion_Plan;
  subscribtion_feature: Scalars['String']['output'];
  subscribtion_plan: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** aggregated selection of "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate = {
  __typename?: 'subscribtion_plan_subscribtion_feature_assoc_aggregate';
  aggregate?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Fields>;
  nodes: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
};

export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Bool_Exp = {
  count?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Bool_Exp_Count>;
};

export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Fields = {
  __typename?: 'subscribtion_plan_subscribtion_feature_assoc_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Max_Fields>;
  min?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Min_Fields>;
};


/** aggregate fields of "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Max_Order_By>;
  min?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Min_Order_By>;
};

/** input type for inserting array relation for remote table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Arr_Rel_Insert_Input = {
  data: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_On_Conflict>;
};

/** Boolean expression to filter rows from the table "subscribtion_plan_subscribtion_feature_assoc". All fields are combined with a logical 'AND'. */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp = {
  _and?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>>;
  _not?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
  _or?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  subscribtionFeatureBySubscribtionFeature?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
  subscribtionPlanBySubscribtionPlan?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  subscribtion_feature?: InputMaybe<String_Comparison_Exp>;
  subscribtion_plan?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscribtion_plan_subscribtion_feature_assoc" */
export enum Subscribtion_Plan_Subscribtion_Feature_Assoc_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubscribtionPlanSubscribtionFeatureAssocPkey = 'subscribtion_plan_subscribtion_feature_assoc_pkey'
}

/** input type for inserting data into table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  subscribtionFeatureBySubscribtionFeature?: InputMaybe<Subscribtion_Feature_Obj_Rel_Insert_Input>;
  subscribtionPlanBySubscribtionPlan?: InputMaybe<Subscribtion_Plan_Obj_Rel_Insert_Input>;
  subscribtion_feature?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Max_Fields = {
  __typename?: 'subscribtion_plan_subscribtion_feature_assoc_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  subscribtion_feature?: Maybe<Scalars['String']['output']>;
  subscribtion_plan?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscribtion_feature?: InputMaybe<Order_By>;
  subscribtion_plan?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Min_Fields = {
  __typename?: 'subscribtion_plan_subscribtion_feature_assoc_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  subscribtion_feature?: Maybe<Scalars['String']['output']>;
  subscribtion_plan?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscribtion_feature?: InputMaybe<Order_By>;
  subscribtion_plan?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Mutation_Response = {
  __typename?: 'subscribtion_plan_subscribtion_feature_assoc_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
};

/** on_conflict condition type for table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_On_Conflict = {
  constraint: Subscribtion_Plan_Subscribtion_Feature_Assoc_Constraint;
  update_columns?: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Update_Column>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};

/** Ordering options when selecting data from "subscribtion_plan_subscribtion_feature_assoc". */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscribtionFeatureBySubscribtionFeature?: InputMaybe<Subscribtion_Feature_Order_By>;
  subscribtionPlanBySubscribtionPlan?: InputMaybe<Subscribtion_Plan_Order_By>;
  subscribtion_feature?: InputMaybe<Order_By>;
  subscribtion_plan?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscribtion_plan_subscribtion_feature_assoc */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "subscribtion_plan_subscribtion_feature_assoc" */
export enum Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubscribtionFeature = 'subscribtion_feature',
  /** column name */
  SubscribtionPlan = 'subscribtion_plan',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  subscribtion_feature?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "subscribtion_plan_subscribtion_feature_assoc" */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscribtion_Plan_Subscribtion_Feature_Assoc_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  subscribtion_feature?: InputMaybe<Scalars['String']['input']>;
  subscribtion_plan?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "subscribtion_plan_subscribtion_feature_assoc" */
export enum Subscribtion_Plan_Subscribtion_Feature_Assoc_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubscribtionFeature = 'subscribtion_feature',
  /** column name */
  SubscribtionPlan = 'subscribtion_plan',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscribtion_Plan_Subscribtion_Feature_Assoc_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp;
};

/** update columns of table "subscribtion_plan" */
export enum Subscribtion_Plan_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Popular = 'popular',
  /** column name */
  StripeMonthlyPriceId = 'stripe_monthly_price_id',
  /** column name */
  StripeYearlyPriceId = 'stripe_yearly_price_id',
  /** column name */
  TextContentId = 'text_content_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscribtion_Plan_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscribtion_Plan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscribtion_Plan_Bool_Exp;
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
  /** fetch data from the table: "auth.activate_token" */
  auth_activate_token: Array<Auth_Activate_Token>;
  /** fetch aggregated fields from the table: "auth.activate_token" */
  auth_activate_token_aggregate: Auth_Activate_Token_Aggregate;
  /** fetch data from the table: "auth.activate_token" using primary key columns */
  auth_activate_token_by_pk?: Maybe<Auth_Activate_Token>;
  /** fetch data from the table in a streaming manner: "auth.activate_token" */
  auth_activate_token_stream: Array<Auth_Activate_Token>;
  /** fetch data from the table: "auth.password_reset_token" */
  auth_password_reset_token: Array<Auth_Password_Reset_Token>;
  /** fetch aggregated fields from the table: "auth.password_reset_token" */
  auth_password_reset_token_aggregate: Auth_Password_Reset_Token_Aggregate;
  /** fetch data from the table: "auth.password_reset_token" using primary key columns */
  auth_password_reset_token_by_pk?: Maybe<Auth_Password_Reset_Token>;
  /** fetch data from the table in a streaming manner: "auth.password_reset_token" */
  auth_password_reset_token_stream: Array<Auth_Password_Reset_Token>;
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
  /** fetch data from the table: "language" */
  language: Array<Language>;
  /** fetch aggregated fields from the table: "language" */
  language_aggregate: Language_Aggregate;
  /** fetch data from the table: "language" using primary key columns */
  language_by_pk?: Maybe<Language>;
  /** fetch data from the table in a streaming manner: "language" */
  language_stream: Array<Language>;
  /** fetch data from the table: "subscribtion_feature" */
  subscribtion_feature: Array<Subscribtion_Feature>;
  /** fetch aggregated fields from the table: "subscribtion_feature" */
  subscribtion_feature_aggregate: Subscribtion_Feature_Aggregate;
  /** fetch data from the table: "subscribtion_feature" using primary key columns */
  subscribtion_feature_by_pk?: Maybe<Subscribtion_Feature>;
  /** fetch data from the table in a streaming manner: "subscribtion_feature" */
  subscribtion_feature_stream: Array<Subscribtion_Feature>;
  /** fetch data from the table: "subscribtion_plan" */
  subscribtion_plan: Array<Subscribtion_Plan>;
  /** fetch aggregated fields from the table: "subscribtion_plan" */
  subscribtion_plan_aggregate: Subscribtion_Plan_Aggregate;
  /** fetch data from the table: "subscribtion_plan" using primary key columns */
  subscribtion_plan_by_pk?: Maybe<Subscribtion_Plan>;
  /** fetch data from the table in a streaming manner: "subscribtion_plan" */
  subscribtion_plan_stream: Array<Subscribtion_Plan>;
  /** fetch data from the table: "subscribtion_plan_subscribtion_feature_assoc" */
  subscribtion_plan_subscribtion_feature_assoc: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** fetch aggregated fields from the table: "subscribtion_plan_subscribtion_feature_assoc" */
  subscribtion_plan_subscribtion_feature_assoc_aggregate: Subscribtion_Plan_Subscribtion_Feature_Assoc_Aggregate;
  /** fetch data from the table: "subscribtion_plan_subscribtion_feature_assoc" using primary key columns */
  subscribtion_plan_subscribtion_feature_assoc_by_pk?: Maybe<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** fetch data from the table in a streaming manner: "subscribtion_plan_subscribtion_feature_assoc" */
  subscribtion_plan_subscribtion_feature_assoc_stream: Array<Subscribtion_Plan_Subscribtion_Feature_Assoc>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table in a streaming manner: "team" */
  team_stream: Array<Team>;
  /** fetch data from the table: "text_content" */
  text_content: Array<Text_Content>;
  /** fetch aggregated fields from the table: "text_content" */
  text_content_aggregate: Text_Content_Aggregate;
  /** fetch data from the table: "text_content" using primary key columns */
  text_content_by_pk?: Maybe<Text_Content>;
  /** fetch data from the table in a streaming manner: "text_content" */
  text_content_stream: Array<Text_Content>;
  /** fetch data from the table: "translation" */
  translation: Array<Translation>;
  /** fetch aggregated fields from the table: "translation" */
  translation_aggregate: Translation_Aggregate;
  /** fetch data from the table: "translation" using primary key columns */
  translation_by_pk?: Maybe<Translation>;
  /** fetch data from the table in a streaming manner: "translation" */
  translation_stream: Array<Translation>;
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


export type Subscription_RootAuth_Activate_TokenArgs = {
  distinct_on?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Activate_Token_Order_By>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Activate_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Activate_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Activate_Token_Order_By>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Activate_Token_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Activate_Token_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Activate_Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Activate_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Password_Reset_TokenArgs = {
  distinct_on?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Password_Reset_Token_Order_By>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Password_Reset_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Password_Reset_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Password_Reset_Token_Order_By>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Password_Reset_Token_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Password_Reset_Token_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Password_Reset_Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Password_Reset_Token_Bool_Exp>;
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


export type Subscription_RootLanguageArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Subscription_RootLanguage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Language_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Language_Order_By>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Subscription_RootLanguage_By_PkArgs = {
  code: Scalars['String']['input'];
};


export type Subscription_RootLanguage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Language_Stream_Cursor_Input>>;
  where?: InputMaybe<Language_Bool_Exp>;
};


export type Subscription_RootSubscribtion_FeatureArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Feature_Order_By>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Feature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Feature_Order_By>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Feature_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootSubscribtion_Feature_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscribtion_Feature_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


export type Subscription_RootSubscribtion_PlanArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Plan_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootSubscribtion_Plan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscribtion_Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Plan_Subscribtion_Feature_AssocArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Plan_Subscribtion_Feature_Assoc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Subscribtion_Feature_Assoc_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


export type Subscription_RootSubscribtion_Plan_Subscribtion_Feature_Assoc_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSubscribtion_Plan_Subscribtion_Feature_Assoc_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscribtion_Plan_Subscribtion_Feature_Assoc_Bool_Exp>;
};


export type Subscription_RootTeamArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Team_Order_By>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTeam_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Team_Stream_Cursor_Input>>;
  where?: InputMaybe<Team_Bool_Exp>;
};


export type Subscription_RootText_ContentArgs = {
  distinct_on?: InputMaybe<Array<Text_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Content_Order_By>>;
  where?: InputMaybe<Text_Content_Bool_Exp>;
};


export type Subscription_RootText_Content_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Text_Content_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Content_Order_By>>;
  where?: InputMaybe<Text_Content_Bool_Exp>;
};


export type Subscription_RootText_Content_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootText_Content_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Text_Content_Stream_Cursor_Input>>;
  where?: InputMaybe<Text_Content_Bool_Exp>;
};


export type Subscription_RootTranslationArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};


export type Subscription_RootTranslation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};


export type Subscription_RootTranslation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTranslation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Translation_Stream_Cursor_Input>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** columns and relationships of "team" */
export type Team = {
  __typename?: 'team';
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Auth_User>;
  /** An aggregate relationship */
  users_aggregate: Auth_User_Aggregate;
};


/** columns and relationships of "team" */
export type TeamUsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  __typename?: 'team_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: InputMaybe<Array<Team_Bool_Exp>>;
  _not?: InputMaybe<Team_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Auth_User_Bool_Exp>;
  users_aggregate?: InputMaybe<Auth_User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamPkey = 'team_pkey'
}

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Auth_User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  __typename?: 'team_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  __typename?: 'team_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  __typename?: 'team_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** on_conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns?: Array<Team_Update_Column>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** Ordering options when selecting data from "team". */
export type Team_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Auth_User_Aggregate_Order_By>;
};

/** primary key columns input for table: team */
export type Team_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "team" */
export type Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Team_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Set_Input>;
  /** filter the rows which have to be updated */
  where: Team_Bool_Exp;
};

/** columns and relationships of "text_content" */
export type Text_Content = {
  __typename?: 'text_content';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  subscribtion_features: Array<Subscribtion_Feature>;
  /** An aggregate relationship */
  subscribtion_features_aggregate: Subscribtion_Feature_Aggregate;
  /** An array relationship */
  subscribtion_plans: Array<Subscribtion_Plan>;
  /** An aggregate relationship */
  subscribtion_plans_aggregate: Subscribtion_Plan_Aggregate;
  /** An array relationship */
  translations: Array<Translation>;
  /** An aggregate relationship */
  translations_aggregate: Translation_Aggregate;
  updated_at: Scalars['timestamp']['output'];
};


/** columns and relationships of "text_content" */
export type Text_ContentSubscribtion_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Feature_Order_By>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


/** columns and relationships of "text_content" */
export type Text_ContentSubscribtion_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Feature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Feature_Order_By>>;
  where?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
};


/** columns and relationships of "text_content" */
export type Text_ContentSubscribtion_PlansArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


/** columns and relationships of "text_content" */
export type Text_ContentSubscribtion_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribtion_Plan_Order_By>>;
  where?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
};


/** columns and relationships of "text_content" */
export type Text_ContentTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};


/** columns and relationships of "text_content" */
export type Text_ContentTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** aggregated selection of "text_content" */
export type Text_Content_Aggregate = {
  __typename?: 'text_content_aggregate';
  aggregate?: Maybe<Text_Content_Aggregate_Fields>;
  nodes: Array<Text_Content>;
};

/** aggregate fields of "text_content" */
export type Text_Content_Aggregate_Fields = {
  __typename?: 'text_content_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Text_Content_Max_Fields>;
  min?: Maybe<Text_Content_Min_Fields>;
};


/** aggregate fields of "text_content" */
export type Text_Content_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Text_Content_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "text_content". All fields are combined with a logical 'AND'. */
export type Text_Content_Bool_Exp = {
  _and?: InputMaybe<Array<Text_Content_Bool_Exp>>;
  _not?: InputMaybe<Text_Content_Bool_Exp>;
  _or?: InputMaybe<Array<Text_Content_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  subscribtion_features?: InputMaybe<Subscribtion_Feature_Bool_Exp>;
  subscribtion_features_aggregate?: InputMaybe<Subscribtion_Feature_Aggregate_Bool_Exp>;
  subscribtion_plans?: InputMaybe<Subscribtion_Plan_Bool_Exp>;
  subscribtion_plans_aggregate?: InputMaybe<Subscribtion_Plan_Aggregate_Bool_Exp>;
  translations?: InputMaybe<Translation_Bool_Exp>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "text_content" */
export enum Text_Content_Constraint {
  /** unique or primary key constraint on columns "id" */
  TextContentPkey = 'text_content_pkey'
}

/** input type for inserting data into table "text_content" */
export type Text_Content_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  subscribtion_features?: InputMaybe<Subscribtion_Feature_Arr_Rel_Insert_Input>;
  subscribtion_plans?: InputMaybe<Subscribtion_Plan_Arr_Rel_Insert_Input>;
  translations?: InputMaybe<Translation_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Text_Content_Max_Fields = {
  __typename?: 'text_content_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Text_Content_Min_Fields = {
  __typename?: 'text_content_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "text_content" */
export type Text_Content_Mutation_Response = {
  __typename?: 'text_content_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Text_Content>;
};

/** input type for inserting object relation for remote table "text_content" */
export type Text_Content_Obj_Rel_Insert_Input = {
  data: Text_Content_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Text_Content_On_Conflict>;
};

/** on_conflict condition type for table "text_content" */
export type Text_Content_On_Conflict = {
  constraint: Text_Content_Constraint;
  update_columns?: Array<Text_Content_Update_Column>;
  where?: InputMaybe<Text_Content_Bool_Exp>;
};

/** Ordering options when selecting data from "text_content". */
export type Text_Content_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscribtion_features_aggregate?: InputMaybe<Subscribtion_Feature_Aggregate_Order_By>;
  subscribtion_plans_aggregate?: InputMaybe<Subscribtion_Plan_Aggregate_Order_By>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: text_content */
export type Text_Content_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "text_content" */
export enum Text_Content_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "text_content" */
export type Text_Content_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "text_content" */
export type Text_Content_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Text_Content_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Text_Content_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "text_content" */
export enum Text_Content_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Text_Content_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Text_Content_Set_Input>;
  /** filter the rows which have to be updated */
  where: Text_Content_Bool_Exp;
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

/** columns and relationships of "translation" */
export type Translation = {
  __typename?: 'translation';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  language: Scalars['String']['output'];
  /** An object relationship */
  languageByLanguage: Language;
  /** An object relationship */
  text_content: Text_Content;
  text_content_id: Scalars['uuid']['output'];
  text_label?: Maybe<Scalars['String']['output']>;
  translation: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};

/** aggregated selection of "translation" */
export type Translation_Aggregate = {
  __typename?: 'translation_aggregate';
  aggregate?: Maybe<Translation_Aggregate_Fields>;
  nodes: Array<Translation>;
};

export type Translation_Aggregate_Bool_Exp = {
  count?: InputMaybe<Translation_Aggregate_Bool_Exp_Count>;
};

export type Translation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Translation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Translation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "translation" */
export type Translation_Aggregate_Fields = {
  __typename?: 'translation_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Translation_Max_Fields>;
  min?: Maybe<Translation_Min_Fields>;
};


/** aggregate fields of "translation" */
export type Translation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Translation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "translation" */
export type Translation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Translation_Max_Order_By>;
  min?: InputMaybe<Translation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "translation" */
export type Translation_Arr_Rel_Insert_Input = {
  data: Array<Translation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "translation". All fields are combined with a logical 'AND'. */
export type Translation_Bool_Exp = {
  _and?: InputMaybe<Array<Translation_Bool_Exp>>;
  _not?: InputMaybe<Translation_Bool_Exp>;
  _or?: InputMaybe<Array<Translation_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  languageByLanguage?: InputMaybe<Language_Bool_Exp>;
  text_content?: InputMaybe<Text_Content_Bool_Exp>;
  text_content_id?: InputMaybe<Uuid_Comparison_Exp>;
  text_label?: InputMaybe<String_Comparison_Exp>;
  translation?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "translation" */
export enum Translation_Constraint {
  /** unique or primary key constraint on columns "id" */
  TranslationPkey = 'translation_pkey',
  /** unique or primary key constraint on columns "language", "text_content_id", "text_label" */
  TranslationTextContentLabelUnique = 'translation_text_content_label_unique'
}

/** input type for inserting data into table "translation" */
export type Translation_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  languageByLanguage?: InputMaybe<Language_Obj_Rel_Insert_Input>;
  text_content?: InputMaybe<Text_Content_Obj_Rel_Insert_Input>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  text_label?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Translation_Max_Fields = {
  __typename?: 'translation_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  text_content_id?: Maybe<Scalars['uuid']['output']>;
  text_label?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "translation" */
export type Translation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  text_label?: InputMaybe<Order_By>;
  translation?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Translation_Min_Fields = {
  __typename?: 'translation_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  text_content_id?: Maybe<Scalars['uuid']['output']>;
  text_label?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "translation" */
export type Translation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  text_label?: InputMaybe<Order_By>;
  translation?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "translation" */
export type Translation_Mutation_Response = {
  __typename?: 'translation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Translation>;
};

/** on_conflict condition type for table "translation" */
export type Translation_On_Conflict = {
  constraint: Translation_Constraint;
  update_columns?: Array<Translation_Update_Column>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** Ordering options when selecting data from "translation". */
export type Translation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  languageByLanguage?: InputMaybe<Language_Order_By>;
  text_content?: InputMaybe<Text_Content_Order_By>;
  text_content_id?: InputMaybe<Order_By>;
  text_label?: InputMaybe<Order_By>;
  translation?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: translation */
export type Translation_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "translation" */
export enum Translation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  TextContentId = 'text_content_id',
  /** column name */
  TextLabel = 'text_label',
  /** column name */
  Translation = 'translation',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "translation" */
export type Translation_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  text_label?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "translation" */
export type Translation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Translation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Translation_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  text_content_id?: InputMaybe<Scalars['uuid']['input']>;
  text_label?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "translation" */
export enum Translation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  TextContentId = 'text_content_id',
  /** column name */
  TextLabel = 'text_label',
  /** column name */
  Translation = 'translation',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Translation_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Translation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Translation_Bool_Exp;
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

export type GetUserQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserQuery = { __typename?: 'query_root', auth_user_by_pk?: { __typename?: 'auth_user', id: any, stripe_customer_id?: string | null, subscribtion_plan?: string | null, stripe_subscribtion_id?: string | null, team_id?: any | null } | null };

export type GetUserEmailQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserEmailQuery = { __typename?: 'query_root', auth_user_by_pk?: { __typename?: 'auth_user', email: string } | null };

export type UpdateUsernameMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  username: Scalars['String']['input'];
}>;


export type UpdateUsernameMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', username?: string | null } | null };

export type UpdateEmailMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  email: Scalars['String']['input'];
}>;


export type UpdateEmailMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', email: string } | null };

export type UpdateUpdatedEmailMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  updated_email: Scalars['String']['input'];
}>;


export type UpdateUpdatedEmailMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', updated_email?: string | null } | null };

export type GetSubscriptionPlansQueryVariables = Exact<{
  languageCode: Scalars['String']['input'];
}>;


export type GetSubscriptionPlansQuery = { __typename?: 'query_root', subscribtion_plan: Array<{ __typename?: 'subscribtion_plan', name: string, stripe_monthly_price_id: string, stripe_yearly_price_id: string, popular: boolean, text_content: { __typename?: 'text_content', translations: Array<{ __typename?: 'translation', text_label?: string | null, translation: string }> }, subscribtion_plan_subscribtion_feature_assocs: Array<{ __typename?: 'subscribtion_plan_subscribtion_feature_assoc', subscribtionFeatureBySubscribtionFeature: { __typename?: 'subscribtion_feature', text_content: { __typename?: 'text_content', translations: Array<{ __typename?: 'translation', translation: string }> } } }> }> };

export type GetSubscriptionPlanIdByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetSubscriptionPlanIdByNameQuery = { __typename?: 'query_root', subscribtion_plan: Array<{ __typename?: 'subscribtion_plan', stripe_monthly_price_id: string, stripe_yearly_price_id: string }> };

export type GetSubscriptionPlanNameByMonthlyPriceIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSubscriptionPlanNameByMonthlyPriceIdQuery = { __typename?: 'query_root', subscribtion_plan: Array<{ __typename?: 'subscribtion_plan', name: string }> };

export type UpdateUserSubscriptionPlanMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  stripe_customer_id: Scalars['String']['input'];
  subscribtion_plan: Scalars['String']['input'];
  subscribtion_id: Scalars['String']['input'];
}>;


export type UpdateUserSubscriptionPlanMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', id: any } | null };

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateTeamMutation = { __typename?: 'mutation_root', insert_team_one?: { __typename?: 'team', id: any, name: string } | null };

export type UpdateUserTeamIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  teamid: Scalars['uuid']['input'];
}>;


export type UpdateUserTeamIdMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', id: any } | null };


export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stripe_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"subscribtion_plan"}},{"kind":"Field","name":{"kind":"Name","value":"stripe_subscribtion_id"}},{"kind":"Field","name":{"kind":"Name","value":"team_id"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUserEmailQuery, GetUserEmailQueryVariables>;
export const UpdateUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UpdateUsernameMutation, UpdateUsernameMutationVariables>;
export const UpdateEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const UpdateUpdatedEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUpdatedEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated_email"}}]}}]}}]} as unknown as DocumentNode<UpdateUpdatedEmailMutation, UpdateUpdatedEmailMutationVariables>;
export const GetSubscriptionPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionPlans"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribtion_plan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stripe_monthly_price_id"}},{"kind":"Field","name":{"kind":"Name","value":"stripe_yearly_price_id"}},{"kind":"Field","name":{"kind":"Name","value":"popular"}},{"kind":"Field","name":{"kind":"Name","value":"text_content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text_label"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscribtion_plan_subscribtion_feature_assocs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribtionFeatureBySubscribtionFeature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text_content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translation"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionPlansQuery, GetSubscriptionPlansQueryVariables>;
export const GetSubscriptionPlanIdByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionPlanIdByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribtion_plan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripe_monthly_price_id"}},{"kind":"Field","name":{"kind":"Name","value":"stripe_yearly_price_id"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionPlanIdByNameQuery, GetSubscriptionPlanIdByNameQueryVariables>;
export const GetSubscriptionPlanNameByMonthlyPriceIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscriptionPlanNameByMonthlyPriceId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribtion_plan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stripe_monthly_price_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSubscriptionPlanNameByMonthlyPriceIdQuery, GetSubscriptionPlanNameByMonthlyPriceIdQueryVariables>;
export const UpdateUserSubscriptionPlanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserSubscriptionPlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stripe_customer_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscribtion_plan"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscribtion_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stripe_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stripe_customer_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"subscribtion_plan"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscribtion_plan"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"stripe_subscribtion_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscribtion_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserSubscriptionPlanMutation, UpdateUserSubscriptionPlanMutationVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_team_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const UpdateUserTeamIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserTeamId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserTeamIdMutation, UpdateUserTeamIdMutationVariables>;