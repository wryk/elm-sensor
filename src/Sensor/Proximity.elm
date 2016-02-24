module Sensor.Proximity where

{-|

@docs max, min, near, value

-}

import Native.Sensor.Proximity

{-|-}
max : Signal (Maybe Int)
max =
    Native.Sensor.Proximity.max

{-|-}
min : Signal (Maybe Int)
min =
    Native.Sensor.Proximity.min

{-|-}
near : Signal (Maybe Bool)
near =
    Native.Sensor.Proximity.near

{-|-}
value : Signal (Maybe Int)
value =
    Native.Sensor.Proximity.value
