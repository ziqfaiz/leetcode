# include <vector>
# include <unordered_map>
using namespace std;

class Solution {
public:
vector<int> twoSum(vector<int> nums, int target){
    unordered_map<int,int> temp;

    for(int i=0;i<nums.size();i++){
        int complement = target-nums[i];

        if (temp.find(complement) != temp.end()){
            return {temp[complement], i};
        }

        else{
            temp[nums[i]] = i;
        }
    }
    return {};
}
};