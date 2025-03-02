function runProgram(input) {
    
    let data = input.trim().split("\n");
    let t = Number(data[0]);
    let index = 1;

    while (t--) {
        let [L, K] = data[index].split(" ").map(Number);
        let A = data[index + 1].split(" ").map(Number);
        index += 2;

        let result = [];
        let deque = [];

        for (let i = 0; i < L; i++) {
            // Remove elements not in the current window
            while (deque.length > 0 && deque[0] < i - K + 1) {
                deque.shift();
            }

            // Remove elements from the back that are smaller than current
            while (deque.length > 0 && A[deque[deque.length - 1]] <= A[i]) {
                deque.pop();
            }

            // Add current element at the end
            deque.push(i);

            // Push the max of the current window
            if (i >= K - 1) {
                result.push(A[deque[0]]);
            }
        }

        console.log(result.join(" "));
    }
}
