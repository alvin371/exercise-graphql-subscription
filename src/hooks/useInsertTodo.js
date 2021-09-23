import { useMutation } from "@apollo/client";
import { getTodoList } from "graphql/query";
import { InsertTodo } from "graphql/mutation";
export default function useInsertTodo() {
    const [insertTodo, { loading: loadingInsert }] = useMutation(InsertTodo, {
        refetchQueries: [getTodoList],
    });
    return {
        insertTodo,
        loadingInsert,
    };
}
