#import <Capacitor/Capacitor.h>

CAP_PLUGIN(OmMetaPlugin, "OmMeta",
    CAP_PLUGIN_METHOD(log, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(requestReview, CAPPluginReturnPromise);
)
