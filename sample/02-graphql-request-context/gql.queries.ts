export const findQuery = `
query { 
  find {
    id
    name
    age
    breed
    ownerId
  }
}
`;

export const validUpdateQuery = `
mutation {
  update(input: {
    id: 1,
    name: "Princess"
  }) {
    id
    name
    age
    breed
    ownerId
  }
}
`;

export const invalidUpdateQuery = `
mutation {
  update(input: {
    id: 2,
    name: "Princess"
  }) {
    id
    name
    age
    breed
    ownerId
  }
}
`;
