"use client";

type StatBadgeProps = {
  label: string;
  value: string;
};

export function StatBadge({ label, value }: StatBadgeProps) {
  // Small display pill for a labeled stat value.
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center shadow-sm">
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}
