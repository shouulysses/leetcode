function solution(A) {
    let p = 0;
    let q = -1;
    let r = -1;
    let max_depth = 0;
    for(let i = 1; i < A.length; i++){
        if(q < 0 && A[i] >= A[i-1]){
            q = i-1;
        }
             
        if(q >= 0 && r < 0 && (A[i] <= A[i-1] || i + 1 == A.length)){
            r = A[i] <= A[i-1] ? i - 1: i;
            //console.log(p,q,r)
            max_depth = Math.max(Math.min(A[p] - A[q], A[r] - A[q]), max_depth);
            //console.log(max_depth)
            p = i-1;
            q = r = -1;
        }
    }

    return max_depth || -1;
}
