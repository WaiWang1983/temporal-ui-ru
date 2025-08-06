export const Namespace = 'typed-errors';

export const Strings = {
  'link-preface': 'Узнайте больше о ',
  Unspecified: {
    title: 'Неуточнено',
    description:
      'Задача Workflow завершилась с ошибкой. Подробнее в сообщении об ошибке.',
  },
  UnhandledCommand: {
    title: 'Необработанная команда',
    description:
      'Задача Workflow завершилась с ошибкой из-за появления новых событий после старта последней задачи Workflow. Запланирована повторная задача Workflow для обработки этих событий.',
  },
  BadScheduleActivityAttributes: {
    title: 'Неверные атрибуты Schedule Activity',
    description:
      'Задача Workflow завершилась с ошибкой из-за отсутствия или некорректных атрибутов ScheduleActivity.',
  },
  BadRequestCancelActivityAttributes: {
    title: 'Неверные атрибуты Request Cancel Activity',
    description:
      'Задача Workflow завершилась с ошибкой из-за некорректных атрибутов RequestCancelActivity. Активность была запланирована на отмену, но id события отмены не был установлен.',
  },
  BadStartTimerAttributes: {
    title: 'Неверные атрибуты Start Timer',
    description:
      'Задача Workflow завершилась с ошибкой из-за отсутствия id таймера в запланированном событии.',
  },
  BadCancelTimerAttributes: {
    title: 'Неверные атрибуты Cancel Timer',
    description:
      'Задача Workflow завершилась с ошибкой при попытке отмены таймера из-за отсутствия id таймера.',
  },
  BadRecordMarkerAttributes: {
    title: 'Неверные атрибуты Record Marker',
    description:
      'Задача Workflow завершилась с ошибкой из-за отсутствия или некорректного имени Marker.',
  },
  BadCompleteWorkflowExecutionAttributes: {
    title: 'Неверные атрибуты Complete Workflow Execution',
    description:
      'Задача Workflow завершилась с ошибкой из-за отсутствия атрибута CompleteWorkflowExecution.',
  },
  BadFailWorkflowExecutionAttributes: {
    title: 'Неверные атрибуты Fail Workflow Execution',
    description:
      'Задача Workflow завершилась с ошибкой из-за отсутствия атрибута FailWorkflowExecution или ошибки failure.',
  },
  BadCancelWorkflowExecutionAttributes: {
    title: 'Неверные атрибуты Cancel Workflow Execution',
    description:
      'Задача Workflow завершилась с ошибкой из-за отсутствия атрибута CancelWorkflowExecution.',
  },
  BadRequestCancelExternalAttributes: {
    title: 'Неверные атрибуты Request Cancel External',
    description:
      'Задача Workflow завершилась с ошибкой из-за некорректного атрибута запроса на отмену внешнего Workflow. Подробнее в сообщении об ошибке.',
  },
  BadContinueAsNewAttributes: {
    title: 'Неверные атрибуты Continue As New',
    description:
      'Задача Workflow завершилась с ошибкой из-за ошибки валидации атрибута ContinueAsNew. Подробнее в сообщении об ошибке.',
  },
  StartTimerDuplicateId: {
    title: 'Дубликат ID для Start Timer',
    description:
      'Задача Workflow завершилась с ошибкой, так как таймер с данным id уже запущен.',
  },
  ResetStickyTaskQueue: {
    title: 'Сброс Sticky Task Queue',
    description:
      'Задача Workflow завершилась с ошибкой из-за необходимости сброса Sticky Task Queue. Система автоматически выполнит повтор.',
  },
  WorkflowWorkerUnhandledFailure: {
    title: 'Необработанная ошибка Workflow Worker',
    description:
      'Задача Workflow завершилась с ошибкой из-за необработанной ошибки в коде Workflow.',
    action: 'детерминированные ограничения',
    link: 'https://docs.temporal.io/workflows/#deterministic-constraints',
  },
  WorkflowTaskHeartbeatError: {
    title: 'Ошибка Heartbeat задачи Workflow',
    description:
      'Задача Workflow не смогла отправить heartbeat при выполнении длительных локальных активностей. Эти активности будут выполнены повторно при следующей задаче Workflow. При постоянной ошибке активности будут повторяться до тайм-аута Workflow.',
  },
  BadSignalWorkflowExecutionAttributes: {
    title: 'Неверные атрибуты Signal Workflow Execution',
    description:
      'Задача Workflow не прошла валидацию атрибутов SignalWorkflowExecution. Подробнее в сообщении об ошибке.',
  },
  BadStartChildExecutionAttributes: {
    title: 'Неверные атрибуты Start Child Execution',
    description:
      'Задача Workflow не прошла валидацию атрибутов StartChildWorkflowExecution. Подробнее в сообщении об ошибке.',
  },
  ForceCloseCommand: {
    title: 'Принудительное закрытие команды',
    description:
      'Задача Workflow была принудительно закрыта. При восстановимой ошибке будет запланирован повтор.',
  },
  FailoverCloseCommand: {
    title: 'Закрытие из-за Failover',
    description:
      'Задача Workflow была принудительно закрыта из-за failover пространства имён. Повтор будет запланирован автоматически.',
  },
  BadSignalInputSize: {
    title: 'Неверный размер входных данных сигнала',
    description: 'Размер полезной нагрузки сигнала превысил допустимый лимит.',
  },
  BadBinary: {
    title: 'Плохой бинарник',
    description:
      'Система отклонила задачу Workflow, так как версия Worker помечена как плохая (bad binary).',
  },
  ScheduleActivityDuplicateId: {
    title: 'Дубликат ID для Schedule Activity',
    description:
      'Задача Workflow завершилась с ошибкой, так как Activity ID уже используется. Проверьте, не указали ли вы одинаковые Activity ID в workflow.',
  },
  BadSearchAttributes: {
    title: 'Неверные атрибуты поиска',
    description:
      'Отсутствует атрибут поиска или его значение превышает лимит. Это может привести к бесконечным повторным попыткам выполнения задачи Workflow.',
    action: 'настройка атрибутов поиска',
    link: 'https://docs.temporal.io/visibility#search-attribute',
  },
  NonDeterministicError: {
    title: 'Недетерминированная ошибка',
    description:
      'Ошибка недетерминированности вызвала сбой задачи Workflow. Обычно это означает несовместимое изменение кода workflow без правильной версии/ветвления.',
  },
  BadModifyWorkflowPropertiesAttributes: {
    title: 'Неверные атрибуты Modify Workflow Properties',
    description:
      'Задача Workflow не прошла валидацию атрибутов ModifyWorkflowProperty в upsert memo. Подробнее в сообщении об ошибке.',
  },
  PendingChildWorkflowsLimitExceeded: {
    title: 'Превышен лимит ожидающих дочерних Workflow',
    description:
      'Достигнута максимальная вместимость ожидающих дочерних Workflow. Задача Workflow завершена, чтобы предотвратить добавление новых.',
  },
  PendingActivitiesLimitExceeded: {
    title: 'Превышен лимит ожидающих активностей',
    description:
      'Достигнута максимальная вместимость ожидающих активностей. Задача Workflow завершена, чтобы предотвратить создание новых.',
  },
  PendingSignalsLimitExceeded: {
    title: 'Превышен лимит ожидающих сигналов',
    description:
      'Достигнута максимальная вместимость ожидающих сигналов, которые должны быть отправлены из этого Workflow.',
  },
  PendingRequestCancelLimitExceeded: {
    title: 'Превышен лимит ожидающих запросов на отмену',
    description:
      'Достигнута максимальная вместимость ожидающих запросов на отмену других Workflow.',
  },
  BadUpdateWorkflowExecutionMessage: {
    title: 'Неверное обновление',
    description:
      'Workflow Execution пытался завершиться до получения обновления.',
  },
  UnhandledUpdate: {
    title: 'Необработанное обновление',
    description:
      'Обновление Workflow было получено Temporal Server во время обработки задачи Workflow на Worker.',
  },
  BadScheduleNexusOperationAttributes: {
    title: 'Неверные атрибуты Schedule Nexus Operation',
    description:
      'Задача Workflow завершилась с ошибкой из-за недопустимой команды ScheduleNexusOperation.',
  },
  PendingNexusOperationsLimitExceeded: {
    title: 'Превышен лимит ожидающих операций Nexus',
    description:
      'Задача Workflow завершилась с ошибкой из-за запроса на планирование операции Nexus, превышающего лимит, заданный сервером.',
  },
  BadRequestCancelNexusOperationAttributes: {
    title: 'Неверные атрибуты Request Cancel Nexus Operation',
    description:
      'Задача Workflow завершилась с ошибкой из-за недопустимой команды RequestCancelNexusOperation.',
  },
  FeatureDisabled: {
    title: 'Функция отключена',
    description:
      'Задача Workflow завершилась с ошибкой из-за запроса функции, которая отключена на сервере (для всей системы или для пространства имён workflow). Подробнее в сообщении об ошибке.',
  },
} as const;
