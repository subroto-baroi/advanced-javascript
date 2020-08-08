const nums = [4, 5, 6, 7, 8, 9];
    const part = nums.slice(2, 5);
    console.log(part);
    const part2= nums.splice(1, 3, 55, 22);
    console.log(part2);
    console.log(nums);

    const add = nums.join('');
    const add = nums.join(' ');
    const add = nums.join(' , ');
    console.log(add);