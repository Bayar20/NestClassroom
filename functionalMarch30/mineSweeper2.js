const input = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ];
  
  const checkingArray = [
      { y: -1, x: -1 },
      { y: -1, x: 0 },
      { y: -1, x: 1 },
  
      { y: 0, x: -1 },
      { y: 0, x: 1 },
  
      { y: 1, x: -1 },
      { y: 1, x: 0 },
      { y: 1, x: 1 },
  ]
  
  const hasMine = (arr, x, y) => {
      if (x < 0 || x >= arr[0].length) {
          return false;
      }
      if (y < 0 || y >= arr.length) {
          return false;
      }
      return arr[y][x] === 1;
  }
  
  const result = input.map((row, y) => {
      return row.map((item, x) => {
          if (item === 1) return 9;
  
          let count = 0;
          for (const coord of checkingArray) {
              if (hasMine(input, x + coord.x, y + coord.y)) {
                  count ++;
              }
          }
  
          return count;
      });
  });

  console.log(result)