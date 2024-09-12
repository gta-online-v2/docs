# Variables Naming

Rules for naming variables in GTA Online V2.

Every variable should be named in a way that makes sense to the reader. The naming should be consistent and easy to understand.

## Word choice
✔️ Choose readable English words (SetEntityCoords is better than EntityCoordsSet)\
✔️ Prefer readability to brevity (EntityLevel is better than ELevel)\
❌ Do not use any special or nonalphanumeric character\
❌ Do not use an already existing keyword (GetLength is better than GetInt)\
❌ Do not use abbreviations or contractions (SetEntityLevel rather than SetELevel)

## Type prefix

These guidelines draw inspiration from the `Hungarian Notation Systems`, a methodology employed by Microsoft to improve code readability. In this system, a variable's name can be prefixed with a specific indicator based on its type. Below is a comprehensive list of these prefixes along with examples for better understanding.\

```
i       integer/number                      iMoney = pOwner:GetMoney()
b       boolean                             bDead = pOwner:IsDead()
s       string                              sReason = "You are not allowed to do that."
t       table                               tPlayerData = {"Name", "Age", "Job"}

p       player                              pOwner = Player(iSource)
e       entity                              eVehicle = Entity(11)
o       object (not listed above)           oProp = ClearPedProp(pOwner, iProp)

vec     vector                              vecPlayerPos = GetEntityCoords(pOwner)
h       hash                                hWeapon = GetCurrentPedWeapon(pOwner)

by      byte                                byH = string.byte('H')
nil     nil                                 nilUseless = nil
fc      function                            fcCallback = function() print("Hello world!") end
th      thread                              thSQLWait = coroutine.create(function() print("I'm in a routine!") end)
```