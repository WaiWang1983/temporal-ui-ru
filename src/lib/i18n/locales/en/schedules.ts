export const Namespace = 'schedules' as const;

export const Strings = {
  edit: 'Редактировать расписание',
  create: 'Создать расписание',
  editing: 'Редактируется расписание...',
  creating: 'Создаётся расписание...',
  'back-to-schedule': 'Назад к расписанию',
  'back-to-schedules': 'Назад к расписаниям',
  id: 'ID расписания',
  schedule: 'Расписание',
  frequency: 'Частота',
  'schedule-spec': 'Спецификация расписания',
  'schedule-input': 'Входные данные расписания',
  'empty-state-title': 'Расписания не найдены',
  'empty-state-description':
    'Попробуйте изменить или сбросить фильтры, чтобы увидеть расписания, работающие в этом пространстве имён.',
  'error-message-fetching': 'Ошибка при загрузке расписаний',
  'recent-runs': 'Последние запуски',
  'recent-runs-empty-state-title': 'Нет последних запусков',
  'upcoming-runs': 'Предстоящие запуски',
  'upcoming-runs-empty-state-title': 'Нет предстоящих запусков',
  loading: 'Загрузка расписания...',
  deleting: 'Удаление расписания...',
  'delete-schedule-error': 'Невозможно удалить расписание. {{error}}',
  pause: 'Пауза',
  unpause: 'Возобновить',
  'schedule-actions': 'Действия с расписанием',
  'pause-modal-title': 'Приостановить расписание?',
  'pause-modal-confirmation':
    'Вы уверены, что хотите приостановить {{schedule}}?',
  'pause-reason': 'Укажите причину приостановки расписания.',
  'unpause-modal-title': 'Возобновить расписание?',
  'unpause-modal-confirmation':
    'Вы уверены, что хотите возобновить {{schedule}}?',
  'unpause-reason': 'Укажите причину возобновления расписания.',
  trigger: 'Триггер',
  backfill: 'Заполнить пропуски',
  'more-options': 'Дополнительные опции',
  'trigger-modal-title': 'Запустить немедленно',
  'trigger-unspecified-title': 'Использовать политику',
  'trigger-unspecified-description':
    'Использовать политику перекрытия расписания.',
  'trigger-skip-title': 'Пропустить',
  'trigger-skip-description':
    'Когда workflow завершится, будет учитываться следующее запланированное выполнение.',
  'trigger-buffer-one-title': 'Буфер 1',
  'trigger-buffer-one-description':
    'Запустить workflow сразу после завершения текущего, но буферизовать только один запуск. Если во время работы запланирован другой запуск, и уже есть буфер, начнётся только первый после текущего.',
  'trigger-buffer-all-title': 'Буфер все',
  'trigger-buffer-all-description':
    'Буферизовать любое количество запусков, выполняя их последовательно, сразу после завершения текущего.',
  'trigger-cancel-other-title': 'Отменить другие',
  'trigger-cancel-other-description':
    'Если другой workflow работает, отменить его. После отмены предыдущего начать новый.',
  'trigger-terminate-other-title': 'Завершить другие',
  'trigger-terminate-other-description':
    'Если другой workflow работает, завершить его и сразу начать новый.',
  'trigger-allow-all-title': 'Разрешить все',
  'trigger-allow-all-description':
    'Запускать любое количество параллельных workflow. Последний результат и ошибка недоступны, т.к. workflow выполняются одновременно.',
  'delete-modal-title': 'Удалить расписание?',
  'delete-modal-confirmation': 'Вы уверены, что хотите удалить {{schedule}}?',
  'advanced-settings': 'Расширенные настройки',
  'start-time': 'Время начала расписания',
  'end-time': 'Время окончания расписания',
  jitter: 'Джиттер',
  'exclusion-calendar': 'Календарь исключений',
  'remaining-actions': 'Оставшиеся действия',
  'overlap-policy': 'Политика перекрытия',
  'recurring-dates-heading': 'Повторяющиеся даты',
  'recurring-dates-description':
    'Выберите конкретные даты, когда расписание будет запускаться всегда.',
  'recurring-days-heading': 'Повторяющиеся дни',
  'recurring-days-description':
    'Выберите дни недели, когда расписание будет запускаться всегда.',
  'time-view-heading': 'Время',
  'time-view-description':
    'Укажите время (UTC), когда это расписание будет запускаться. По умолчанию расписание запускается в 00:00 UTC, если оставить поле пустым.',
  'interval-view-heading': 'Период повторения',
  'interval-view-description':
    'Укажите интервал времени для запуска расписания (например, каждые 5 минут).',
  'offset-heading': 'Смещение',
  'offset-unit': 'Единица смещения',
  'offset-description':
    'Укажите время смещения запуска расписания (например, 15 минут после часа).',
  'cron-view-title': 'Cron-строка',
  'crow-view-example-description':
    'Cron-строки для расписаний Temporal Workflow имеют следующий формат:',
  'cron-view-description':
    'Напишите или вставьте cron-строку для создания расписания.',
  'error-title': 'Сообщение об ошибке',
  'name-label': 'Имя',
  'workflow-id-label': 'ID Workflow',
  'workflow-type-label': 'Тип Workflow',
  'task-queue-label': 'Очередь задач',
  'getting-started-docs-link-preface': 'Перейдите к',
  'getting-started-docs-link': 'документации',
  'getting-started-cli-link-preface': 'или начните с',
  'add-schedule-attr': 'Атрибуты расписания',
  'add-workflow-attr': 'Атрибуты Workflow',
} as const;
