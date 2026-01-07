function anotherInsecurePassword() {
  // Use a cryptographically secure random suffix instead of Math.random().
  var suffix;

  // Browser environment with Web Crypto API
  if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
    var arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    suffix = arr[0] * Math.pow(2, -32); // value in [0, 1)
  } else {
    // Fallback for environments like Node.js
    try {
      var crypto = require("crypto");
      var buf = crypto.randomBytes(4);
      var rand32 =
        (buf[0] << 24) >>> 0 |
        (buf[1] << 16) |
        (buf[2] << 8) |
        buf[3];
      suffix = rand32 * Math.pow(2, -32); // value in [0, 1)
    } catch (e) {
      // As a last resort, fall back to Math.random (not cryptographically secure).
      suffix = Math.random();
    }
  }

  var password = "sssAAAA" + suffix;
  return password;
}