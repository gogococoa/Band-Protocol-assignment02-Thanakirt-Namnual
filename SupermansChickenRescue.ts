const supermansChickenRescue = (n: number, k: number, positions: number[]) => {
    let left: number = 0; // left position of the roof (start)
    let result: number = 0; // right position of the roof (end)

    if (positions.length !== n) return "positions length doesn't equal to n";

    for (let right = 0; right < n; right++) {
        // use while loop to check : is the next position exceed the roof length
        // if true do the while loop
        while (positions[right] >= positions[left] + k) {
            // change increase left (change starting position)
            left++;
        }

        // if false (next position doesn't exceed the roof length)
        // then calculate the maximum number of chickens Superman can protect
        result = Math.max(result, right - left + 1);
    }

    return result;
};
