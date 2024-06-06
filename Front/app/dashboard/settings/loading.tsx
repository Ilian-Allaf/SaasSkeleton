import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Skeleton className="h-5 col-start-1 col-end-4" />
        <Skeleton className="h-4 col-start-1 col-end-4" />
      </div>
      <div>
        <Skeleton className="h-20 col-start-1 col-end-4" />
      </div>
    </div>
  );
}
