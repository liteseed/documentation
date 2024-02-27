import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "documentation",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", { customDomain: app.stage === "production" ? { domainName: "docs.liteseed.xyz", hostedZone: "liteseed.xyz" } : undefined });
      stack.addOutputs({
	   SiteUrl:  site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
