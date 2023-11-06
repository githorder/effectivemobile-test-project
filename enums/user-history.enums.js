const events = (attribute = "attribute") => ({
  CREATED: "User is created",
  DELETED: "User is deleted",
  UPDATED: `User's ${attribute} is updated`,
});

module.exports = { events };
