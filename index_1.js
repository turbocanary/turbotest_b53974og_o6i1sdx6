function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var suffix = Math.random();
  var password = "sssAAAA" + suffix;
  return password;
}