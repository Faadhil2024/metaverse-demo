import PricingSection from "@/components/pricing/PricingSection";
import EnterpriseCard from "@/components/pricing/EnterpriseCard";
import CompareTable from "@/components/pricing/CompareTable";
import CreditsSection from "@/components/pricing/CreditsSection";
import FAQAccordion from "@/components/pricing/FAQAccordion";
import { enterpriseTiers } from "@/lib/data";

export default function Pricing() {
  return (
    <div className="mx-auto max-w-8xl px-6 py-20">
      <h1 className="mb-12 text-center font-display text-4xl">Choose your plan</h1>

      <PricingSection />

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {enterpriseTiers.map((tier) => (
          <EnterpriseCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-center font-display text-3xl">Compare features</h2>
        <CompareTable />
      </div>

      <div className="mt-24">
        <CreditsSection />
      </div>

      <div className="mt-24">
        <FAQAccordion />
      </div>
    </div>
  );
}