import Capacitor
import FBSDKCoreKit
import Foundation
import StoreKit

@objc(OmMetaPlugin)
public class OmMetaPlugin: CAPPlugin {
    @objc func log(_ call: CAPPluginCall) {
        let value = call.getString("event") ?? ""
        AppEvents.shared.logEvent(AppEvents.Name(value))
        call.resolve(["success": true])
    }

    @objc func requestReview(_ call: CAPPluginCall) {
        SKStoreReviewController.requestReview()
        call.resolve()
    }
}

