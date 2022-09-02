let array = [
    {
      id: 0, 
      isActive: false,
      name: "Alice Freeman", 
      pic: "https://e7.pngegg.com/pngimages/716/149/png-clipart-frankenstein-s-monster-victor-frankenstein-computer-icons-little-monsters-miscellaneous-face.png",
      last_message: "Good night",
      updated: "8/28/2022, 11:18 PM"
      
    },
    {
      id: 1, 
      isActive: true,
      name: "Josefina", 
      pic: "https://e7.pngegg.com/pngimages/716/149/png-clipart-frankenstein-s-monster-victor-frankenstein-computer-icons-little-monsters-miscellaneous-face.png",
      last_message: "I'm having breakfast right now",
      updated:  "8/29/2022, 1:17 PM"
    
    },
  ]

  function setDate (date)  {
    return new Date(date).toLocaleString('en', {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    })
  }

let sorted = array.sort((a,b) => new Date(b.updated) - new Date(a.updated))
console.log(sorted)