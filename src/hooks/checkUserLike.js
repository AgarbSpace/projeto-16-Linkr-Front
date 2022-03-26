export default function checkUserLike(lst, userId) {
  for (let i = 0; i < lst.length; i++) 
   if (lst[i].userId === userId)
    return true
  return false
}