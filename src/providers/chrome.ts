export const chromeProviderNetwork = (callback: (request: chrome.devtools.network.Request) => void) => {
  // eslint-disable-next-line no-undef
  chrome.devtools.network.onRequestFinished.addListener(
      function(request) {
          if (request.request.url.includes('graphql')) {
              callback(request);
          }
      }
    );
};
