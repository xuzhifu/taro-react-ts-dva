import { create } from "dva-core";
import createLoading from "dva-loading";

let app;
let store;
let dispatch;
function createApp(opt) {
  app = create(opt);
  app.use(createLoading({}));

  opt.models.forEach((model) => app.model(model));
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;
  app.getDispatch = () => dispatch;

  return app;
}

export default { createApp };

