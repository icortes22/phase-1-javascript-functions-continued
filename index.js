function saturdayFun(funDay = "roller-skate"){
  return `This Saturday, I want to ${funDay}!`
}
function mondayWork(workDay = "go to the office"){
  return `This Monday, I will ${workDay}.`
}
function wrapAdjective(adjective = '*'){
  const inner = function(byDefault = "special"){
    return `You are ${adjective}${byDefault}${adjective}!`
  }
  return inner 
}