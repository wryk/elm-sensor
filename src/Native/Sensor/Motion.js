Elm.Native = Elm.Native || {};
Elm.Native.Sensor = Elm.Native.Sensor || {};
Elm.Native.Sensor.Motion = {};

Elm.Native.Sensor.Motion.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Sensor = localRuntime.Native.Sensor || {};
    localRuntime.Native.Sensor.Motion = localRuntime.Native.Sensor.Motion || {};

    if (localRuntime.Native.Sensor.Motion.values) {
        return localRuntime.Native.Sensor.Motion.values;
    }

    var Maybe = Elm.Maybe.make(localRuntime);
    var NativeSignal = Elm.Native.Signal.make(localRuntime);

    // value : Signal (Maybe Acceleration)
    var acceleration = NativeSignal.input('Sensor.Motion.acceleration', Maybe.Nothing);

    // value : Signal (Maybe Acceleration)
    var accelerationIncludingGravity = NativeSignal.input('Sensor.Motion.acceleration', Maybe.Nothing);

    localRuntime.addListener([x.id, y.id, z.id], window, 'devicemotion', notifyDeviceMotion);

    function notifyDeviceMotion(event) {
        localRuntime.notify(acceleration.id, Maybe.Just(event.acceleration));
        localRuntime.notify(accelerationIncludingGravity.id, Maybe.Just(event.accelerationIncludingGravity));
    }

    return {
        acceleration: acceleration,
        accelerationIncludingGravity: accelerationIncludingGravity
    };
};
