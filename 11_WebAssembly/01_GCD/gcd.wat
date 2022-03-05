(module
(export "gcd" (func $gcd))
(func $gcd (param $a i32) (param $b i32) (result i32) (local $temp i32)
local.get $a
i32.eqz
if
    local.get $b
    return
end
local.get $b
i32.eqz
if
    local.get $a
    return
end
loop $do
get_local $a
get_local $b
i32.rem_s
set_local $temp

get_local $b
set_local $a

get_local $temp
set_local $b

i32.const 0
get_local $b
i32.ne
br_if $do
end

    local.get $a
))
