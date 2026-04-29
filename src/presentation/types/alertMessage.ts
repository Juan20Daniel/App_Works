export interface AlertMessage {
    type:    TypeAlertMessage;
    visible: boolean;
    title:   string;
    message: string;
}

export type TypeAlertMessage = 'success' | 'error'; 