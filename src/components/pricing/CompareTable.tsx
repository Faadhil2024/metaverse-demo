import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { compareFeatures, pricingTiers } from "@/lib/data";

export default function CompareTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="py-4 text-left font-normal text-[var(--text-muted)]"></th>
            {pricingTiers.map((tier) => (
              <th key={tier.id} className="py-4 text-center font-display font-normal">
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareFeatures.map((row) => (
            <tr key={row.feature} className="border-b border-[var(--border)]">
              <td className="py-5 pr-6">
                <div>{row.feature}</div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  {row.description}
                </div>
              </td>
              {row.values.map((value, i) => (
                <td key={i} className="py-5 text-center text-[var(--text-muted)]">
                  {value === "check" ? (
                    <Check size={16} weight="bold" className="mx-auto text-[var(--accent)]" />
                  ) : value === "-" ? (
                    <Minus size={14} className="mx-auto" />
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}