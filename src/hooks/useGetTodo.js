import { useQuery } from "@apollo/client";
import { getTodoList } from "graphql/query";
import { SubscriptionTodo } from "../graphql/subscription";
export default function useGetTodo() {
    const { data, loading, error, subscribeToMore } = useQuery(getTodoList);
    const subscribeTodo = () => {
        subscribeToMore({
            document: SubscriptionTodo,
            updateQuery: (prev, { subscriptionData: { data } }) => {
                console.log(data);
                return data;
            },
        });
    };
    return {
        todolist: data ? data.todolist : [],
        loading,
        error,
        subscribeTodo,
    };
}
