export default function checkUserLike(lst, userId) {
  // recebe uma lista no formato: 
  //lst = [
  //   {name: "nomeQualquer", userId: 7},
  //   {name: "outroNume", userId: 4},
  // ]
  
  for (let i = 0; i < lst.length; i++) 
   if (lst[i].userId === userId)
    return true
  return false
}