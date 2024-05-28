function generatePassword(length) {
  const char = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }
  return password;
}
module.exports = { generatePassword };
