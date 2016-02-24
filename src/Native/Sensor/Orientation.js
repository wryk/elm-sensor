Elm.Native = Elm.Native || {};
Elm.Native.Sensor = Elm.Native.Sensor || {};
Elm.Native.Sensor.Orientation = {};

Elm.Native.Sensor.Orientation.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Sensor = localRuntime.Native.Sensor || {};
    localRuntime.Native.Sensor.Orientation = localRuntime.Native.Sensor.Orientation || {};

    if (localRuntime.Native.Sensor.Orientation.values) {
        return localRuntime.Native.Sensor.Orientation.values;
    }

    var Maybe = Elm.Maybe.make(localRuntime);
    var NativeSignal = Elm.Native.Signal.make(localRuntime);

    // value : Signal (Maybe Float)
    var absolute = NativeSignal.input('Sensor.Orientation.absolute', Maybe.Nothing);

    // value : Signal (Maybe Float)
    var alpha = NativeSignal.input('Sensor.Orientation.alpha', Maybe.Nothing);

    // value : Signal (Maybe Float)
    var beta = NativeSignal.input('Sensor.Orientation.beta', Maybe.Nothing);

    // value : Signal (Maybe Float)
    var gamma = NativeSignal.input('Sensor.Orientation.gamma', Maybe.Nothing);

    localRuntime.addListener([alpha.id, beta.id, gamma.id], window, 'deviceorientation', notifyDeviceOrientation);

    function notifyDeviceOrientation(event) {
        localRuntime.notify(absolute.id, Maybe.Just(event.absolute));
        localRuntime.notify(alpha.id, Maybe.Just(event.alpha));
        localRuntime.notify(beta.id, Maybe.Just(event.beta));
        localRuntime.notify(gamma.id, Maybe.Just(event.gamma));
    }

    return {
        absolute: absolute,
        alpha: alpha,
        beta: beta,
        gamma: gamma
    };
};
