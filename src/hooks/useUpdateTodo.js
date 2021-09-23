import { useMutation } from "@apollo/client";
import { getTodoList } from "graphql/query";
import { UpdateTodo } from "graphql/mutation";
export default function useUpdateTodo() {
    const [updateTodo, { loading: loadingUpdate }] = useMutation(UpdateTodo, {
        refetchQueries: [getTodoList],
    });
    return {
        updateTodo,
        loadingUpdate,
    };
}
