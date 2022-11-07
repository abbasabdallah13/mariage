export default {
  name: 'guests',
  title: 'Guests',
  type: 'document',

  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'userName',
      title: 'UserName',
      type: 'slug',
      options: {
        source: (doc) =>
          lastName ? doc.firstName + ' ' + doc.lastName : doc.firstName,
        maxLength: 96,
      },
    },
    {
      name: 'password',
      title: 'Password',
      type: 'slug',
      options: {
        source: (doc) => doc.firstName + new Date().getTime(),
      },
    },
    {
      name: 'childrens',
      title: 'Childrens',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'partner',
      title: 'Partner',
      type: 'string',
    },
    {
      name: 'reception',
      title: 'Reception',
      type: 'boolean',
    },
    {
      name: 'wineReception',
      title: 'Wine Reception',
      type: 'boolean',
    },
    {
      name: 'accommodation1night',
      title: 'Accommodation1night',
      type: 'boolean',
    },
    {
      name: 'accommodation2night',
      title: 'Accommodation2night',
      type: 'boolean',
    },
  ],
};
