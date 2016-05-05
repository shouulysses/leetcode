# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
    #return null when there is nothing
    if nums.length == 0 or k == 0
        return "null"
    end
    h = Hash.new
    answer = []
    # use Hash to know the number of elements
    for i in 0...nums.length
        if h.has_key? nums[i]
            h[nums[i]] += 1
        else
            h[nums[i]] = 1
        end
    end
    for j in 0...k
        answer.push(h.key(h.values.max))
        h.delete(h.key(h.values.max))
    end
    return answer
end
