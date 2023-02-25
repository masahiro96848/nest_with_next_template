import { AxiosResponse } from 'axios'
import { globalAxios, isAxiosError } from '@/api/config'
import { TodoType } from '@/interfaces/Todo'

/**
 * Todoリストの取得のAPI接続処理
 */
export const fetchTodoListApi = async () => {
    try {
        const { data }: AxiosResponse<Array<TodoType>> = await globalAxios.get('/todo')
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}

/**
 * Todo新規登録のAPI接続処理
 */
export const createTodoApi = async (title: string, content: string) => {
    try {
        const { data }: AxiosResponse<TodoType> = await globalAxios.post('/todo', {
            title,
            content,
        })
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}
