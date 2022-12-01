import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@organizationname/mf-header",
  app: () =>
    System.import<LifeCycles>(
      "@organizationname/mf-header"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@organizationname/mf-main",
  app: () =>
    System.import<LifeCycles>(
      "@organizationname/mf-main"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@organizationname/navbar",
//   app: () => System.import("@organizationname/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
