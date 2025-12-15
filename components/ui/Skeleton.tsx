export default function Skeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
      <div className="h-40 rounded-lg bg-white/10" />
      <div className="h-4 w-3/4 rounded bg-white/10" />
      <div className="h-4 w-1/2 rounded bg-white/10" />
    </div>
  );
}