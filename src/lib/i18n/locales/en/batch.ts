export const Namespace = 'batch' as const;

export const Strings = {
  'nav-title': 'Пакетные операции',
  'list-page-title': 'Пакетные операции',
  'describe-page-title': 'Пакетная операция',
  'empty-state-title': 'Пакетные операции отсутствуют',
  'back-link': 'Назад к пакетным операциям',
  'operation-type': 'Тип операции',
  details: 'Детали операции',
  identity: 'Идентификатор',
  'total-operations': 'Всего операций',
  'operations-failed': '{{ count, number }} не выполнено',
  'operations-succeeded': '{{ count, number }} выполнено успешно',
  'operations-progress': '{{ percent }}% выполнено',
  results: 'Результаты операции',
  'max-concurrent-alert-title':
    'Достигнуто максимальное количество одновременных пакетных операций',
  'max-concurrent-alert-description':
    'Разрешена только 1 пакетная операция в процессе выполнения. Если вы пытаетесь создать новую, пока предыдущая выполняется, она завершится с ошибкой.',
  'job-id-input-hint':
    'Идентификатор задания должен быть уникальным. Если оставить поле пустым, будет сгенерирован случайный UUID.',
  'job-id-input-error':
    'Идентификатор задания может содержать только URL-безопасные символы',
} as const;
