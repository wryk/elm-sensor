module Sensor.Orientation where

{-|

@docs absolute, alpha, beta, gamma

-}

import Native.Sensor.Orientation

{-|-}
absolute : Signal (Maybe Bool)
absolute =
    Native.Sensor.Orientation.absolute

{-|-}
alpha : Signal (Maybe Float)
alpha =
    Native.Sensor.Orientation.alpha

{-|-}
beta : Signal (Maybe Float)
beta =
    Native.Sensor.Orientation.beta

{-|-}
gamma : Signal (Maybe Float)
gamma =
    Native.Sensor.Orientation.gamma
