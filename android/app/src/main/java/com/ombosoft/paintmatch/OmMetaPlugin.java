package com.ombosoft.paintmatch;

import static com.facebook.FacebookSdk.fullyInitialize;
import static com.facebook.FacebookSdk.setAdvertiserIDCollectionEnabled;
import static com.facebook.FacebookSdk.setAutoInitEnabled;
import static com.facebook.FacebookSdk.setAutoLogAppEventsEnabled;

import android.app.Activity;

import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsConstants;
import com.facebook.appevents.AppEventsLogger;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "OmFb")
public class OmFbPlugin extends Plugin {

    @PluginMethod()
    public void enable(PluginCall call) {
        setAutoInitEnabled(true);
        setAutoLogAppEventsEnabled(true);
        setAdvertiserIDCollectionEnabled(true);
        fullyInitialize();
    }

    @PluginMethod()
    public void log(PluginCall call) {
        String event = call.getString("event");
        JSObject ret = new JSObject();

        Activity activity = getBridge().getActivity();
        if (activity instanceof BridgeActivity) {
            if (event.equals("rate")) {
                AppEventsLogger logger = AppEventsLogger.newLogger(activity);
                logger.logEvent(AppEventsConstants.EVENT_NAME_RATED);
                ret.put("success", true);
            } else {
                ret.put("success", false);
                ret.put("detail", "Unexpected event");
            }
        } else {
            ret.put("success", false);
            ret.put("detail", "Can't find mainActivity");
        }
        call.resolve(ret);
    }
}
