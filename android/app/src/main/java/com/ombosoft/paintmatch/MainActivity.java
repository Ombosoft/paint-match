package com.ombosoft.paintmatch;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(OmMetaPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
