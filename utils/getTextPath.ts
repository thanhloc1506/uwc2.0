export const getTextPath = (text: string) => {
  switch (text) {
    case "home":
      return "Home";

    case "manageUsers":
      return "Manage users";

    case "createRoute":
      return "Create route";

    case "assignTasks":
      return "Assign task";

    case "addVehicle":
      return "Add vehicle";

    case "conversation":
      return "Conversation";

    case "":
      return "Dashboard";

    default:
      return "";
  }
};
