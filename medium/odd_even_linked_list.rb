# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def odd_even_list(head)
    odd = []
    even = []
    if (head)
        odd.push(head.val)
        single = false
        while(head = head.next)
            if single
                single = false
                odd.push(head.val)
            else
                single = true
                even.push(head.val)
            end
        end
    end
    return odd += even
end
