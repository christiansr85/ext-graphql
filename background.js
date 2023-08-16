console.log('test crissssss');
// eslint-disable-next-line no-undef
chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
        if (request.request.url.includes('graphql')) {
            console.log({
              request,
              content: request.getContent(),
            });
        }
    }
  );