(module
(func (export "gcd") (param $a i32) (param $b i32) (result i32)
local.get $a
i32.eqz ;; a === 0
if
    local.get $b
    return
end

loop $loopi
    local.get $b
    i32.const 0
    i32.gt_s ;; b != 0
        local.get $a
        local.get $b
        i32.gt_s ;; a > b -> a=a-b
        if
            local.get $a
            local.get $b
            i32.sub
            local.set $a
            br $loopi
            end ;; else b=b-a
            local.get $b
            local.get $a
            i32.sub
            local.set $b
            br $loopi
     end

local.get $a
return
)
)