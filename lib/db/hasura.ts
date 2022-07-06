async function queryHasuraGQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, any>,
  token: string
) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  });

  return await result.json();
}

async function adminQueryHasuraGQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, any>
) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  });

  return await result.json();
}

export async function createNewUser(token: string, address: string) {
  const operationsDoc = `
    mutation createNewUser($address: String!) {
        insert_users_one(object: {address: $address}) {
            created_at
            id
        }
    }
  `;

  const response = await queryHasuraGQL(
    operationsDoc,
    'createNewUser',
    {
      address,
    },
    token
  );

  return response?.data?.ideas;
}

export async function isNewUser(token: string, address: string) {
  const operationsDoc = `
    query isNewUser($address: String!) {
      users(where: {address: {_eq: $address}}) {
        id
        address
      }
    }
  `;

  const response = await queryHasuraGQL(
    operationsDoc,
    'isNewUser',
    {
      address,
    },
    token
  );

  return response?.data?.users?.length === 0;
}

export async function getIdeas(address: string) {
  //   return response?.data?.ideas;
  const operationsDoc = `
    query getIdeas($address: String) {
        ideas (order_by: {ideas_liked_aggregate: {count: desc}}) {
            address
                created_at
                description
                title
                tldr
                id
                ideas_liked_aggregate(where: {liked: {_eq: true}}) {
                    aggregate {
                    count(columns: liked)
                    }
                }
        }
        ideas_likes(where: {liked: {_eq: true}, address: {_eq: $address}}) {
            idea_id
        }
    }
`;
  const response = await adminQueryHasuraGQL(operationsDoc, 'getIdeas', {
    address,
  });

  return response?.data;
}

export async function getIdea(ideaId: string) {
  const operationsDoc = `
        query getIdea($ideaId: bigint!) {
            ideas(where: {id: {_eq: $ideaId}}) {
                address
                created_at
                description
                id
                title
                tldr
            }
     }
  `;

  const response = await adminQueryHasuraGQL(operationsDoc, 'getIdea', {
    ideaId,
  });

  return response?.data?.ideas;
}

export async function getLikesForAddress(address: string) {
  const operationsDoc = `
    query getLikesForAddress($address: String!) {
        ideas_likes(where: {liked: {_eq: true}, address: {_eq: $address}) {
            idea_id
        }
    }
`;

  const response = await adminQueryHasuraGQL(
    operationsDoc,
    'getLikesForAddress',
    {
      address,
    }
  );

  return response?.data?.ideas_likes;
}

export async function insertIdea(token, { address, title, tldr, description }) {
  const operationsDoc = `
    mutation insertIdea($address: String!, $title: String!, $tldr: String!, $description: String!) {
        insert_ideas_one(object: {address: $address, description: $description, title: $title, tldr: $tldr}) {
            created_at
            id
        }
    }
`;
  return await queryHasuraGQL(
    operationsDoc,
    'insertIdea',
    { address, title, tldr, description },
    token
  );
}

export async function isLikedForIdeaAndAddress(
  token: string,
  ideaId: string,
  address: string
) {
  const operationsDoc = `
    query isLikedForIdeaAndAddress($address: String!, $ideaId: bigint!) {
        ideas_likes(where: {address: {_eq: $address}, idea_id: {_eq: $ideaId}}) {
            idea_id
            liked
        }
    }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    'isLikedForIdeaAndAddress',
    {
      address,
      ideaId,
    },
    token
  );

  return response?.data?.ideas_likes?.length > 0;
}

export async function updateLikedForIdeaAndAddress(
  token: string,
  ideaId: string,
  address: string,
  liked: boolean
) {
  const operationsDoc = `
    mutation updateLikedForIdeaAndAddress($address: String!, $ideaId: bigint!, $liked: Boolean!) {
      update_ideas_likes(where: {address: {_eq: $address}, idea_id: {_eq: $ideaId}}, _set: {liked: $liked}) {
        returning {
          idea_id
          liked
        }
      }
    }
  `;

  const response = await queryHasuraGQL(
    operationsDoc,
    'updateLikedForIdeaAndAddress',
    {
      address,
      ideaId,
      liked,
    },
    token
  );

  return response?.data;
}

export async function insertLikedForIdeaAndAddress(
  token: string,
  ideaId: string,
  address: string
) {
  const operationsDoc = `
  mutation insertLikedForIdeaAndAddress($address: String!, $ideaId: bigint!) {
    insert_ideas_likes_one(object: {address: $address, idea_id: $ideaId, liked: true}) {
      idea_id
      liked
      address
    }
  }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    'insertLikedForIdeaAndAddress',
    {
      address,
      ideaId,
    },
    token
  );

  return response?.data;
}
