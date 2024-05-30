<?php

class Solution{
    function twosum($nums, $target){
        $map =[];
        for ($i=0; $i<count($nums); $i++){
            $residue = $target - $nums[$i];
            if (array_key_exists($residue, $map)){
                return [$i, $map[$residue]];
            }else{
                $map[$nums[$i]] = $i;
            } 
        }
        throw new InvalidArgumentException('No two sum solution');
    }
}

$sol = new Solution();

$nums = [2, 7, 11, 15];

$target = 9;

print_r($sol->twosum($nums, $target));