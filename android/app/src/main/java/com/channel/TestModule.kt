package com.channel

import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TestModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    @ReactMethod
    fun testing(body: String, callback : Callback) {
        callback.invoke(body)
    }

    override fun getName(): String {
        return "TestModule"
    }
}
