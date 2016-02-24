module Sensor.Motion where

{-|

@docs Acceleration, acceleration, accelerationIncludingGravity

-}

import Native.Sensor.Motion

{-|-}
type alias Acceleration =
    { x : Float
    , y : Float
    , z : Float
    }

{-|-}
acceleration : Signal (Maybe Acceleration)
acceleration =
    Native.Sensor.Motion.acceleration

{-|-}
accelerationIncludingGravity : Signal (Maybe Acceleration)
accelerationIncludingGravity =
    Native.Sensor.Motion.accelerationIncludingGravity
