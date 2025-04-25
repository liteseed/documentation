/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  // Your app's config
  app(input) {
    return {
      name: "documentation",
      home: "aws",
      providers: {

        aws: {
          region: "us-east-1",
        },
      },
    };
  },
  // Your app's resources
  async run() {
    const site = new sst.aws.Astro("site", {
      domain: {
        name: "docs.liteseed.xyz"
      },
    });

    // Return outputs
    return {
      ...site
    };
  },
});
