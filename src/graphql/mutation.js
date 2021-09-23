import { gql } from "@apollo/client";

export const UpdateTodo = gql`
  mutation MyMutation($id: Int!, $isdone: Boolean) {
    update_todolist_by_pk(
      pk_columns: { id: $id }
      _set: { isdone: $isdone }
    ) {
      id
    }
  }
`;

export const DeleteTodo = gql`
  mutation Mutationnn($id: Int!) {
    delete_todolist_by_pk(id: $id) {
      id
    }
  }
`;

export const InsertTodo = gql`
  mutation Mutationnn($object:  todolist_insert_input!) {
    insert_todolist_one(object: $object) {
      id
    }
  }
`;
