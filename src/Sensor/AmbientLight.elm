module Sensor.AmbientLight where

{-|

@docs max, min, value

-}

import Native.Sensor.AmbientLight

{-|-}
max : Signal (Maybe Float)
max =
    Native.Sensor.AmbientLight.max

{-|-}
min : Signal (Maybe Float)
min =
    Native.Sensor.AmbientLight.min

{-|-}
value : Signal (Maybe Float)
value =
    Native.Sensor.AmbientLight.value
