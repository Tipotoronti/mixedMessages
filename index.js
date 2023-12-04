const messages = ["Abstraction gambles with lives, happiness, and even destiny itself!", "Enqoyism lies ahead, what with the future yet to come.", "Nihilism is like a summer breeze.", "The clear star that is yesterday brings both pleasure and pain."]

const createRndNumber = () => Math.floor(Math.random()*messages.length)

const createRndMessage = () => console.log(messages[createRndNumber()])

createRndMessage();
