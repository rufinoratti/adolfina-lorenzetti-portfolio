import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="pt-28 lg:pt-36">
      <Container>
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-8 h-16 w-full max-w-3xl" />
        <Skeleton className="mt-4 h-6 w-full max-w-lg" />
        <div className="mt-16 grid items-start gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
              <Skeleton className="mt-5 h-5 w-40" />
              <Skeleton className="mt-2 h-3 w-24" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}