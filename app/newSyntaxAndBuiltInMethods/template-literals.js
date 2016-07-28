export default () => {
  /*
    template literals allow you to concatenate strings without the use of +
    open and close ` ` then inside put whatever text you wish then to print a variable
    surround with ${variable} or  ${obj.foo} or ${obj.foo.length} you get the idea
  */
  const sendEmail = function(from, to, message) {
    const email = `Hello ${to},\nthis is ${from},
    Message
      ${message.toUpperCase().substring(0, 5).length}`;
    return email;
  }

  const email = sendEmail("nelson", "aisha", "i love you");
  console.log(email);

}
