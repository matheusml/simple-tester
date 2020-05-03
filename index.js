const { red, green } = require("chalk");

function describe(description, callback) {
  try {
    callback();
    console.log(green(`✅ ${description}`));
  } catch (error) {
    console.log(red(description));
    console.log(red(error.message));
  }
}

function it(description, callback) {
  try {
    callback();
  } catch (error) {
    const message = `${" ".repeat(4)}${description}\n${" ".repeat(8)}${
      error.message
    }`;
    throw new Error(message);
  }
}

function expect(lhs) {
  return {
    toBe(rhs) {
      if (lhs !== rhs) {
        const message = `Expected ${lhs} to be ${rhs}`;
        throw new Error(message);
      }
    },
    notToBe(rhs) {
      if (lhs === rhs) {
        const message = `Expected ${lhs} to not be ${rhs}`;
        throw new Error(message);
      }
    },
  };
}

module.exports = { describe, it, expect };
