Elm.Native = Elm.Native || {};
Elm.Native.Sensor = Elm.Native.Sensor || {};
Elm.Native.Sensor.AmbientLight = {};

Elm.Native.Sensor.AmbientLight.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Sensor = localRuntime.Native.Sensor || {};
    localRuntime.Native.Sensor.AmbientLight = localRuntime.Native.Sensor.AmbientLight || {};

    if (localRuntime.Native.Sensor.AmbientLight.values) {
        return localRuntime.Native.Sensor.AmbientLight.values;
    }

    var Maybe = Elm.Maybe.make(localRuntime);
    var NativeSignal = Elm.Native.Signal.make(localRuntime);

    // max : Signal (Maybe Float)
    var max = NativeSignal.input('Sensor.AmbientLight.max', Maybe.Nothing);

    // min : Signal (Maybe Float)
    var min = NativeSignal.input('Sensor.AmbientLight.min', Maybe.Nothing);

    // intensity : Signal (Maybe Float)
    var value = NativeSignal.input('Sensor.AmbientLight.value', Maybe.Nothing);

    localRuntime.addListener([intensity.id], window, 'devicelight', notifyDeviceLight);

    function notifyDeviceLight(event) {
        localRuntime.notify(max.id, Maybe.just(event.max));
        localRuntime.notify(min.id, Maybe.just(event.min));
        localRuntime.notify(value.id, Maybe.just(event.value));
    }

    return {
        max: max,
        min: min,
        value: value
    };
};
