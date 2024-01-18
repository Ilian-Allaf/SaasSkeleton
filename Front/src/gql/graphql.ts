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
  numeric: { input: any; output: any; }
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
  count?: InputMaybe<Auth_Activate_Token_Aggregate_Bool_Exp_Count>;
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
  Token = 'token',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.activate_token" */
export type Auth_Activate_Token_Set_Input = {
  activated_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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
  count?: InputMaybe<Auth_Password_Reset_Token_Aggregate_Bool_Exp_Count>;
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
  ResetAt = 'reset_at',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.password_reset_token" */
export type Auth_Password_Reset_Token_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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
  subsciption_plan_id?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  updated_email?: Maybe<Scalars['String']['output']>;
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
  subsciption_plan_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  updated_email?: InputMaybe<String_Comparison_Exp>;
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
  subsciption_plan_id?: InputMaybe<Scalars['String']['input']>;
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
  subsciption_plan_id?: Maybe<Scalars['String']['output']>;
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
  subsciption_plan_id?: InputMaybe<Order_By>;
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
  subsciption_plan_id?: Maybe<Scalars['String']['output']>;
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
  subsciption_plan_id?: InputMaybe<Order_By>;
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
  subsciption_plan_id?: InputMaybe<Order_By>;
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
  SubsciptionPlanId = 'subsciption_plan_id',
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
  subsciption_plan_id?: InputMaybe<Scalars['String']['input']>;
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
  subsciption_plan_id?: InputMaybe<Scalars['String']['input']>;
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
  SubsciptionPlanId = 'subsciption_plan_id',
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
  /** delete data from the table: "subscibtion_plan" */
  delete_subscibtion_plan?: Maybe<Subscibtion_Plan_Mutation_Response>;
  /** delete single row from the table: "subscibtion_plan" */
  delete_subscibtion_plan_by_pk?: Maybe<Subscibtion_Plan>;
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
  /** insert data into the table: "subscibtion_plan" */
  insert_subscibtion_plan?: Maybe<Subscibtion_Plan_Mutation_Response>;
  /** insert a single row into the table: "subscibtion_plan" */
  insert_subscibtion_plan_one?: Maybe<Subscibtion_Plan>;
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
  /** update data of the table: "subscibtion_plan" */
  update_subscibtion_plan?: Maybe<Subscibtion_Plan_Mutation_Response>;
  /** update single row of the table: "subscibtion_plan" */
  update_subscibtion_plan_by_pk?: Maybe<Subscibtion_Plan>;
  /** update multiples rows of table: "subscibtion_plan" */
  update_subscibtion_plan_many?: Maybe<Array<Maybe<Subscibtion_Plan_Mutation_Response>>>;
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
export type Mutation_RootDelete_Subscibtion_PlanArgs = {
  where: Subscibtion_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscibtion_Plan_By_PkArgs = {
  id: Scalars['String']['input'];
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
export type Mutation_RootInsert_Subscibtion_PlanArgs = {
  objects: Array<Subscibtion_Plan_Insert_Input>;
  on_conflict?: InputMaybe<Subscibtion_Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscibtion_Plan_OneArgs = {
  object: Subscibtion_Plan_Insert_Input;
  on_conflict?: InputMaybe<Subscibtion_Plan_On_Conflict>;
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
export type Mutation_RootUpdate_Subscibtion_PlanArgs = {
  _inc?: InputMaybe<Subscibtion_Plan_Inc_Input>;
  _set?: InputMaybe<Subscibtion_Plan_Set_Input>;
  where: Subscibtion_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscibtion_Plan_By_PkArgs = {
  _inc?: InputMaybe<Subscibtion_Plan_Inc_Input>;
  _set?: InputMaybe<Subscibtion_Plan_Set_Input>;
  pk_columns: Subscibtion_Plan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscibtion_Plan_ManyArgs = {
  updates: Array<Subscibtion_Plan_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
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
  /** fetch data from the table: "subscibtion_plan" */
  subscibtion_plan: Array<Subscibtion_Plan>;
  /** fetch aggregated fields from the table: "subscibtion_plan" */
  subscibtion_plan_aggregate: Subscibtion_Plan_Aggregate;
  /** fetch data from the table: "subscibtion_plan" using primary key columns */
  subscibtion_plan_by_pk?: Maybe<Subscibtion_Plan>;
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


export type Query_RootSubscibtion_PlanArgs = {
  distinct_on?: InputMaybe<Array<Subscibtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscibtion_Plan_Order_By>>;
  where?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
};


export type Query_RootSubscibtion_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscibtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscibtion_Plan_Order_By>>;
  where?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
};


export type Query_RootSubscibtion_Plan_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "subscibtion_plan" */
export type Subscibtion_Plan = {
  __typename?: 'subscibtion_plan';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  users: Array<Auth_User>;
  /** An aggregate relationship */
  users_aggregate: Auth_User_Aggregate;
};


/** columns and relationships of "subscibtion_plan" */
export type Subscibtion_PlanUsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


/** columns and relationships of "subscibtion_plan" */
export type Subscibtion_PlanUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** aggregated selection of "subscibtion_plan" */
export type Subscibtion_Plan_Aggregate = {
  __typename?: 'subscibtion_plan_aggregate';
  aggregate?: Maybe<Subscibtion_Plan_Aggregate_Fields>;
  nodes: Array<Subscibtion_Plan>;
};

/** aggregate fields of "subscibtion_plan" */
export type Subscibtion_Plan_Aggregate_Fields = {
  __typename?: 'subscibtion_plan_aggregate_fields';
  avg?: Maybe<Subscibtion_Plan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Subscibtion_Plan_Max_Fields>;
  min?: Maybe<Subscibtion_Plan_Min_Fields>;
  stddev?: Maybe<Subscibtion_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Subscibtion_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subscibtion_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Subscibtion_Plan_Sum_Fields>;
  var_pop?: Maybe<Subscibtion_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Subscibtion_Plan_Var_Samp_Fields>;
  variance?: Maybe<Subscibtion_Plan_Variance_Fields>;
};


/** aggregate fields of "subscibtion_plan" */
export type Subscibtion_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscibtion_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Subscibtion_Plan_Avg_Fields = {
  __typename?: 'subscibtion_plan_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "subscibtion_plan". All fields are combined with a logical 'AND'. */
export type Subscibtion_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Subscibtion_Plan_Bool_Exp>>;
  _not?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Subscibtion_Plan_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Auth_User_Bool_Exp>;
  users_aggregate?: InputMaybe<Auth_User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "subscibtion_plan" */
export enum Subscibtion_Plan_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubscibtionPlanPkey = 'subscibtion_plan_pkey'
}

/** input type for incrementing numeric columns in table "subscibtion_plan" */
export type Subscibtion_Plan_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "subscibtion_plan" */
export type Subscibtion_Plan_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users?: InputMaybe<Auth_User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Subscibtion_Plan_Max_Fields = {
  __typename?: 'subscibtion_plan_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Subscibtion_Plan_Min_Fields = {
  __typename?: 'subscibtion_plan_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "subscibtion_plan" */
export type Subscibtion_Plan_Mutation_Response = {
  __typename?: 'subscibtion_plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscibtion_Plan>;
};

/** on_conflict condition type for table "subscibtion_plan" */
export type Subscibtion_Plan_On_Conflict = {
  constraint: Subscibtion_Plan_Constraint;
  update_columns?: Array<Subscibtion_Plan_Update_Column>;
  where?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
};

/** Ordering options when selecting data from "subscibtion_plan". */
export type Subscibtion_Plan_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Auth_User_Aggregate_Order_By>;
};

/** primary key columns input for table: subscibtion_plan */
export type Subscibtion_Plan_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "subscibtion_plan" */
export enum Subscibtion_Plan_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subscibtion_plan" */
export type Subscibtion_Plan_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Subscibtion_Plan_Stddev_Fields = {
  __typename?: 'subscibtion_plan_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Subscibtion_Plan_Stddev_Pop_Fields = {
  __typename?: 'subscibtion_plan_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Subscibtion_Plan_Stddev_Samp_Fields = {
  __typename?: 'subscibtion_plan_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "subscibtion_plan" */
export type Subscibtion_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscibtion_Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscibtion_Plan_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Subscibtion_Plan_Sum_Fields = {
  __typename?: 'subscibtion_plan_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "subscibtion_plan" */
export enum Subscibtion_Plan_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscibtion_Plan_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subscibtion_Plan_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscibtion_Plan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscibtion_Plan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subscibtion_Plan_Var_Pop_Fields = {
  __typename?: 'subscibtion_plan_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Subscibtion_Plan_Var_Samp_Fields = {
  __typename?: 'subscibtion_plan_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Subscibtion_Plan_Variance_Fields = {
  __typename?: 'subscibtion_plan_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
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
  /** fetch data from the table: "subscibtion_plan" */
  subscibtion_plan: Array<Subscibtion_Plan>;
  /** fetch aggregated fields from the table: "subscibtion_plan" */
  subscibtion_plan_aggregate: Subscibtion_Plan_Aggregate;
  /** fetch data from the table: "subscibtion_plan" using primary key columns */
  subscibtion_plan_by_pk?: Maybe<Subscibtion_Plan>;
  /** fetch data from the table in a streaming manner: "subscibtion_plan" */
  subscibtion_plan_stream: Array<Subscibtion_Plan>;
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


export type Subscription_RootSubscibtion_PlanArgs = {
  distinct_on?: InputMaybe<Array<Subscibtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscibtion_Plan_Order_By>>;
  where?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
};


export type Subscription_RootSubscibtion_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscibtion_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscibtion_Plan_Order_By>>;
  where?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
};


export type Subscription_RootSubscibtion_Plan_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSubscibtion_Plan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscibtion_Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscibtion_Plan_Bool_Exp>;
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


export type GetUsersQuery = { __typename?: 'query_root', auth_user: Array<{ __typename?: 'auth_user', email: string, username: string, id: any }> };

export type GetUserEmailQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserEmailQuery = { __typename?: 'query_root', auth_user_by_pk?: { __typename?: 'auth_user', email: string } | null };

export type UpdateUsernameMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  username: Scalars['String']['input'];
}>;


export type UpdateUsernameMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', username: string } | null };

export type UpdateEmailMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  email: Scalars['String']['input'];
}>;


export type UpdateEmailMutation = { __typename?: 'mutation_root', update_auth_user_by_pk?: { __typename?: 'auth_user', email: string } | null };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUserEmailQuery, GetUserEmailQueryVariables>;
export const UpdateUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UpdateUsernameMutation, UpdateUsernameMutationVariables>;
export const UpdateEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_auth_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateEmailMutation, UpdateEmailMutationVariables>;