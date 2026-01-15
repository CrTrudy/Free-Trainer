"use client";

type SelectPillOption = { label: string; value: string };

type SelectPillProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectPillOption[];
};

export function SelectPill({
  label,
  value,
  onChange,
  options,
}: SelectPillProps) {
  // Header select control styled as a pill.
  return (
    <label className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow">
      <span className="uppercase tracking-wide text-[11px] text-blue-100">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white outline-none backdrop-blur"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-slate-900">
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
