-- singleTimer = {
--   calls = {},
--   times = {},
--   tickeds = {}
-- }

-- local tick = 0.01
-- local call = singleTimer.calls
-- local time = singleTimer.times
-- local ticked = singleTimer.tickeds

-- local tickTime = 0

-- TimerStart(CreateTimer(), tick, true, function()
--   tickTime = tickTime + tick
--   for key in pairs(call) do
--     ticked[key] = ticked[key] + tick
--     if ticked[key] == time[key] then
--       call[key]()
--       ticked[key] = 0
--     end
--   end
-- end)

-- function addTimer(key, pTime, callback)
--   time[key] = pTime
--   call[key] = callback
--   ticked[key] = 0
-- end

-- singleTimer = {
--   calls = {}
-- }

-- local calls = singleTimer.calls
-- local tick = 0.01
-- local tickTime = 0

-- function addTimer(key, pTime, callback)
--   local call = calls[tostring(pTime + tickTime)]
--   if not call then
--     call = {}
--   end
--   call[key] = callback
-- end

-- TimerStart(CreateTimer(), tick, true, function()
--   tickTime = tickTime + tick

-- end)