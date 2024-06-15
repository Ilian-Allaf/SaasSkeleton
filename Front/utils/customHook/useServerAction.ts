import { useState } from 'react';

type Action<TArgs extends any[], TResult> = (
  ...args: TArgs
) => Promise<TResult | void>;

interface CustomError {
  message: string;
  field?: string | null;
}

// The type TResult must include the structure to contain data or errors
type ResultWithError<TResult> = TResult & {
  error?: CustomError;
};

interface ServerActionOptions<TArgs extends any[], TResult> {
  action: Action<TArgs, ResultWithError<TResult>>;
  onSuccess?: (result: ResultWithError<TResult> | void) => void;
  onError?: (error: CustomError) => void;
}

function useServerAction<TArgs extends any[], TResult>({
  action,
  onSuccess,
  onError,
}: ServerActionOptions<TArgs, TResult>) {
  const [loading, setLoading] = useState(false);

  const callableName = async (...args: TArgs) => {
    setLoading(true);
    try {
      const result = await action(...args);
      if (result && result.error) {
        console.error(result.error.message);
        onError?.(result.error); // Safe call only if error exists
      } else {
        onSuccess?.(result);
      }
    } catch (err: any) {
      console.error(err);
      onError?.({ message: 'Internal Server Error', field: null });
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
