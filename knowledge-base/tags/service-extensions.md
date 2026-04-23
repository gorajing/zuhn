# Tag: service-extensions

- `INS-260423-81B6` Google Cloud: the load balancer has a service extension that runs Model Armor on every request before it hits the backend, so even if the application forgets to validate, the filter still runs.
