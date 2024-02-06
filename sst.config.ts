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
      const site = new AstroSite(stack, "site", { customDomain: app.stage == "production" ? { domainName: "liteseed.xyz", domainAlias: "www.liteseed.xyz"} : undefined });
      stack.addOutputs({
	   SiteUrl:  site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
