import { useState } from 'react';

type Action<TArgs extends any[], TResult> = (
  ...args: TArgs
) => Promise<TResult>;

interface CustomError {
  message: string;
  field?: string | null;
}

// Le type TResult doit inclure la structure pour contenir des données ou des erreurs
type ResultWithError<TResult> = TResult & {
  error?: CustomError;
};

interface ServerActionOptions<TArgs extends any[], TResult> {
  action: Action<TArgs, ResultWithError<TResult>>;
  onSuccess?: (result: ResultWithError<TResult>) => void;
  onError?: (error: CustomError) => void;
}

function useServerAction<TArgs extends any[], TResult>({
  action,
  onSuccess,
  onError,
}: ServerActionOptions<TArgs, ResultWithError<TResult>>) {
  const [loading, setLoading] = useState(false);

  const callableName = async (...args: TArgs) => {
    setLoading(true);
    try {
      const result = await action(...args);
      if (result.error && onError) {
        onError(result.error);
      } else if (onSuccess) {
        onSuccess(result);
      }
    } catch (err: any) {
      console.error(err);
      if (onError) {
        onError({ message: 'Internal Server Error' });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    callableName,
    isPending: loading,
  };
}

export default useServerAction;
