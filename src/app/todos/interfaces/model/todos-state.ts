import { TodoResponseDTO } from '../dto/todo.dto';

export const enum REQUEST_STATE {
  NOT_SENT = 0,
  SENT = 1,
  END = 2,
}

export interface TodoState extends TodoResponseDTO {
  loading: boolean;
  error: unknown;
  requestState: REQUEST_STATE;
}
