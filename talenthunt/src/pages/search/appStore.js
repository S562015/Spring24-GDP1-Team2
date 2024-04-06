import { store } from "@risingstack/react-easy-state";
import * as api from "./api";

// Use 'appStore' instead of 'this' in the store methods to allow them to be passed as callbacks
const appStore = store({
  beers: [],
  async fetchBeers(filter) {
    appStore.isLoading = true;
    appStore.beers = await api.fetchBeers(filter);
    appStore.isLoading = false;
  },
});

export default appStore;
