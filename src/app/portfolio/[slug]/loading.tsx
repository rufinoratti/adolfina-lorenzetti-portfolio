import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="pt-28 lg:pt-36">
      <Container>
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-8 h-16 w-full max-w-2xl" />
        <Skeleton className="mt-4 h-6 w-full max-w-md" />
        <Skeleton className="mt-14 aspect-[16/10] w-full rounded-2xl" />
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-4 lg:col-span-7">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="space-y-5 lg:col-span-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}