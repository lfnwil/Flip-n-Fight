import UserCard from "../models/index.model.js";

export async function getUserCards(userId) {
  return await UserCard.findAll({ where: { user_id: userId } });
}

export async function addUserCard(userId, cardId, quantity) {
  let userCard = await UserCard.findOne({ where: { user_id: userId, card_id: cardId } });
  if (userCard) {
    userCard.quantity += quantity;
    return await userCard.save();
  } else {
    return await UserCard.create({ user_id: userId, card_id: cardId, quantity });
  }
}
