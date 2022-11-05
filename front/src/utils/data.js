export const feedQuery = `*[_type == "guest"] | order(_createdAt desc) {
        _id,
        childrens,
        userName,
        firstName,
        lastName,
        partner,
        reception,
        WineReception,
        accommodation1night,
        accommodation2night,
      } `;
  
  export const guestDetailQuery = (guestId) => {
    const query = `*[_type == "guest" && _id == '${guestId}']{
      _id,
        childrens,
        userName,
        firstName,
        lastName,
        partner,
        reception,
        WineReception,
        accommodation1night,
        accommodation2night,

    }`;
    return query;
  };
  
  // export const guestDetailMoreguestQuery = (guest) => {
  //   const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
  //     image{
  //       asset->{
  //         url
  //       }
  //     },
  //     _id,
  //     destination,
  //     postedBy->{
  //       _id,
  //       userName,
  //       image
  //     },
  //     save[]{
  //       _key,
  //       postedBy->{
  //         _id,
  //         userName,
  //         image
  //       },
  //     },
  //   }`;
  //   return query;
  // };
  
  // export const searchQuery = (searchTerm) => {
  //   const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
  //         image{
  //           asset->{
  //             url
  //           }
  //         },
  //             _id,
  //             destination,
  //             postedBy->{
  //               _id,
  //               userName,
  //               image
  //             },
  //             save[]{
  //               _key,
  //               postedBy->{
  //                 _id,
  //                 userName,
  //                 image
  //               },
  //             },
  //           }`;
  //   return query;
  // };
  
  // export const userQuery = (userId) => {
  //   const query = `*[_type == "user" && _id == '${userId}']`;
  //   return query;
  // };
  
  // export const userCreatedPinsQuery = (userId) => {
  //   const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
  //     image{
  //       asset->{
  //         url
  //       }
  //     },
  //     _id,
  //     destination,
  //     postedBy->{
  //       _id,
  //       userName,
  //       image
  //     },
  //     save[]{
  //       postedBy->{
  //         _id,
  //         userName,
  //         image
  //       },
  //     },
  //   }`;
  //   return query;
  // };
  
  // export const userSavedPinsQuery = (userId) => {
  //   const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
  //     image{
  //       asset->{
  //         url
  //       }
  //     },
  //     _id,
  //     destination,
  //     postedBy->{
  //       _id,
  //       userName,
  //       image
  //     },
  //     save[]{
  //       postedBy->{
  //         _id,
  //         userName,
  //         image
  //       },
  //     },
  //   }`;
  //   return query;
  // }; 