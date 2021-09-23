import { useMutation } from "@apollo/client";
import { getTodoList } from "graphql/query";
import { DeleteTodo } from "graphql/mutation";
export default function useDeleteTodo() {
    const [deleteTodo, { loading: loadingDelete }] = useMutation(DeleteTodo, {
        refetchQueries: [getTodoList],
    });
    return {
        deleteTodo,
        loadingDelete,
    };
}
