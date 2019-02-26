import {
  CollectionStore,
  InstanceStore,
  NamespaceStore
} from 'stores';
/**
 * Activate all the components in the App Stores package.
 * @param {Object} appRegistry - The Hadron appRegisrty to activate this plugin with.
 **/
function activate(appRegistry) {
  appRegistry.registerStore('App.NamespaceStore', NamespaceStore);
  appRegistry.registerStore('App.InstanceStore', InstanceStore);
  appRegistry.registerStore('App.CollectionStore', CollectionStore);
}

/**
 * Deactivate all the components in the App Stores package.
 * @param {Object} appRegistry - The Hadron appRegisrty to deactivate this plugin with.
 **/
function deactivate(appRegistry) {
  appRegistry.deregisterStore('App.NamespaceStore');
  appRegistry.deregisterStore('App.InstanceStore');
  appRegistry.deregisterStore('App.CollectionStore');
}

export default {
  CollectionStore
};
export { activate, deactivate };
