function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return "This one is on me!";
  } else if (distance > 2000 && distance < 2500){
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  const message = (cityName === 'NYC') ? "Ok, sounds good." : "No go.";
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip){
    case 'thanks for everything':
      message = "Bye.";
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
    case 'generous':
      message = "Thank you so much.";
      break
  }
  return message;
}