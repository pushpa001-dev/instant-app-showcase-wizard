
import Hero from "../components/Hero";
import FeatureHighlights from "../components/FeatureHighlights";
import PricingTiers from "../components/PricingTiers";
import CTA from "../components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeatureHighlights />
      <PricingTiers />
      <CTA />
    </div>
  );
};

export default Index;
