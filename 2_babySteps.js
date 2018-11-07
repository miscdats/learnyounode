/*  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).*/

for (i=2, sum=0; i < process.argv.length; i++) {
  sum += +process.argv[i];
};
console.log(sum);
