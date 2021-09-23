import { gql } from "@apollo/client";

export const SubscriptionTodo = gql`
  subscription MySubscription {
    todolist {
      id
      isdone
      todo
    }
  }
`;
