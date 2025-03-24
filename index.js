// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

(function () {
  console.log("This function runs immediately!");
})();

function outerFunction(greeting, message = "It's a great day") {
  return function innerFunction(name, language = "JavaScript") {
    return `${greeting}, ${name}! ${message} in ${language}.`;
  };
}

const greet = outerFunction("Hello");
console.log(greet("John", "Python")); // "Hello, John! It's a great day in Python."

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10


function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}






