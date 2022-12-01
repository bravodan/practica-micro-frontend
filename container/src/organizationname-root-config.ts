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

registerApplication({
  name: "@organizationname/mf-singlespa-details",
  app: () =>
    System.import<LifeCycles>(
      "@organizationname/mf-singlespa-details"
    ),
  activeWhen: ["/mf-singlespa-details"],
});

registerApplication({
  name: "@organizationname/mf-microfrontend-details",
  app: () =>
    System.import<LifeCycles>(
      "@organizationname/mf-microfrontend-details"
    ),
  activeWhen: ["/mf-microfrontend-details"],
});

// registerApplication({
//   name: "@organizationname/navbar",
//   app: () => System.import("@organizationname/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
