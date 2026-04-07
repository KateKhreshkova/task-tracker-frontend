import {$authHost} from "../../../shared/config/api.ts";
import type {Task} from "../model/types.ts";

const API_URL : string= "/tasks";
export const taskApi = {
    getAll: () => $authHost.get( API_URL ),
    create: (data: Task) => $authHost.post( API_URL, data),
    update: (taskId: string, data: Task) => $authHost.put( API_URL + "/" + taskId, data),
    delete: (taskId: string) => $authHost.delete( API_URL + "/" + taskId ),
    done: (taskId: string) => $authHost.put( API_URL + "/done/" + taskId),
};
