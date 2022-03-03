(module
(export "gcd" (func $gcd))
(func $gcd (param $a i32) (param $b i32) (result i32)
local.get $a
i32.eqz
if
    local.get $b
    return
end
loop $looplabel
    local.get $a
    i32.const 0
    i32.gt_s
    if
        local.get $a
        local.get $b
        i32.gt_s ;; a > b?
        if
            local.get $a
            local.get $b
            i32.sub
            local.set $a ;; a=a-b
        end ;; else (b > a)
        local.get $b
        local.get $a
        i32.sub
        local.set $b ;; b=b-a
    end
end
    local.get $a
))
