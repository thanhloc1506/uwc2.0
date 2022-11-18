export const getTextPath = (text: string) => {
  switch (text) {
    case "home":
      return "Home";

    case "manageUsers":
      return "Manage users";

    case "createRoute":
      return "Create route";

    case "assignTask":
      return "Assign task";

    case "conversation":
      return "Conversation";

    case "":
      return "Dashboard";

    default:
      return "";
  }
};
