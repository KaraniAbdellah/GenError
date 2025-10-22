import { JSX, useState } from "react";
import { Check, Command } from "lucide-react";
import PricingPlan from "@/types/PricingPlan";
import { toast } from "react-hot-toast";

type BillingCycle = "monthly" | "yearly";

export default function UpgradePage(): JSX.Element {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "For personal use and exploration",
      features: [
        "Basic error tracking",
        "Up to 3 projects",
        "7 days data retention",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: { monthly: 29, yearly: 290 },
      description: "For professionals and small teams",
      features: [
        "Advanced error tracking",
        "Unlimited projects",
        "90 days data retention",
        "Priority email support",
        "Custom integrations",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: { monthly: 99, yearly: 990 },
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited data retention",
        "24/7 dedicated support",
        "Advanced security features",
        "Custom SLA",
        "On-premise deployment option",
      ],
    },
  ];

  const handleBillingChange = (cycle: BillingCycle): void => {
    setBillingCycle(cycle);
  };
  const Hint = () => {
    toast("Will Be Soon!", {
      icon: "👏",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white text-sm font-mono">
                <Command></Command>
              </span>
            </div>
            <span className="ml-2 text-sm font-medium">GenError V0.1</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything is free for now, but the next version will be PAID :&#41;
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => handleBillingChange("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingChange("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan: PricingPlan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg border-2 p-8 relative ${
                plan.popular ? "border-gray-900 shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-block bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-gray-900">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="ml-2 text-gray-600">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => Hint()}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors mb-8 ${
                  plan.popular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50"
                }`}
              >
                {plan.name === "Free" ? "Current Plan" : "Upgrade"}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Have questions?{" "}
            <a
              href="/help"
              className="text-gray-900 underline hover:no-underline"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
