export default {
  name: "guest",
  title: "Guest",
  type: "document",

  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "userName",
      title: "UserName",
      type: "slug",
      options: {
        source:  doc => doc.firstName + " " + doc.lastName,
        maxLength: 96,
      },
    },
    {
      name: "childrens",
      title: "Childrens",
      type: "array",
      of: [{ type: "string" }],

    },
    {
      name: "partner",
      title: "Partner",
      type: "string",
    },
    {
      name: "reception",
      title: "Reception",
      type: "string",
    },
    {
      name: "wineReception",
      title: "Wine Reception",
      type: "string",
    },
    {
      name: "accommodation1night",
      title: "Accommodation1night",
      type: "string",
    },
    {
      name: "accommodation2night",
      title: "Accommodation2night",
      type: "string",
    },
  ],
};
