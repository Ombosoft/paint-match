package com.ombosoft.paintmatch;

import android.app.Activity;
import android.util.Log;

import com.facebook.appevents.AppEventsConstants;
import com.facebook.appevents.AppEventsLogger;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "OmMeta")
public class OmMetaPlugin extends Plugin {

    @PluginMethod()
    public void log(PluginCall call) {
        Log.i("meta1", "called");
        String event = call.getString("event");
        JSObject ret = new JSObject();

        Activity activity = getBridge().getActivity();
        if (activity instanceof BridgeActivity) {
            if (event.equals("rate")) {
                AppEventsLogger logger = AppEventsLogger.newLogger(activity);
                logger.logEvent(AppEventsConstants.EVENT_NAME_RATED);
                ret.put("success", true);
                Log.i("meta1", "success");
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
