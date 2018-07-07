function countStairs(n) {
   if (n === 0) return 1;
   if (n < 0) return 0;
   return countStairs(n-1) + countStairs(n-2);
}
