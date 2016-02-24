Elm.Native = Elm.Native || {};
Elm.Native.Sensor = Elm.Native.Sensor || {};
Elm.Native.Sensor.Proximity = {};

Elm.Native.Sensor.Proximity.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Sensor = localRuntime.Native.Sensor || {};
    localRuntime.Native.Sensor.Proximity = localRuntime.Native.Sensor.Proximity || {};

    if (localRuntime.Native.Sensor.Proximity.values) {
        return localRuntime.Native.Sensor.Proximity.values;
    }

    var Maybe = Elm.Maybe.make(localRuntime);
    var NativeSignal = Elm.Native.Signal.make(localRuntime);

    // max : Signal (Maybe Int)
    var max = NativeSignal.input('Sensor.Proximity.max', Maybe.Nothing);

    // min : Signal (Maybe Int)
    var min = NativeSignal.input('Sensor.Proximity.min', Maybe.Nothing);

    // near : Signal (Maybe Bool)
    var near = NativeSignal.input('Sensor.Proximity.near', Maybe.Nothing);

    // value : Signal (Maybe Int)
    var value = NativeSignal.input('Sensor.Proximity.value', Maybe.Nothing);

    localRuntime.addListener([max.id, min.id, value.id], window, 'deviceproximity', notifyDeviceProximity);
    localRuntime.addListener([near.id], window, 'userproximity', notifyUserProximity);

    function notifyDeviceProximity(event) {
        localRuntime.notify(max.id, Maybe.Just(event.max));
        localRuntime.notify(min.id, Maybe.Just(event.min));
        localRuntime.notify(value.id, Maybe.Just(event.value));
    }

    function notifyUserProximity(event) {
        localRuntime.notify(near.id, Maybe.Just(event.near));
    }

    return {
        max: max,
        min: min,
        near: near,
        value: value
    };
};
