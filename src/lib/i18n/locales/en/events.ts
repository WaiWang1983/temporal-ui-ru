export const Namespace = 'events' as const;

export const Strings = {
  'empty-state-title': 'События не найдены',
  'empty-state-description':
    'Нет событий, соответствующих вашим фильтрам или выбранному виду. Отрегулируйте фильтры или вид, чтобы увидеть события.',
  'group-empty-state-title': 'Группа событий не найдена',
  'sort-ascending': 'Сортировка 1-9',
  'sort-descending': 'Сортировка 9-1',
  'date-and-time': 'Дата и время',
  'show-elapsed-time': 'Показать прошедшее время и длительность',
  'event-type': 'Тип события',
  'workflow-events': 'События Workflow',
  category: {
    all: 'Все',
    activity: 'Активность',
    'activity-tooltip':
      'Активность — это обычное выполнение функции или метода, предназначенное для выполнения одного четко определенного действия.',
    'child-workflow': 'Дочерний Workflow',
    'child-workflow-tooltip':
      'Дочернее выполнение Workflow — это Workflow, запущенный из другого Workflow в том же пространстве имён.',
    command: 'Команда',
    'command-tooltip': 'События команд',
    other: 'Прочее',
    'other-tooltip':
      'Записи маркеров, обновление пользовательских атрибутов поиска и изменение свойств Workflow.',
    'local-activity': 'Локальная активность',
    'local-activity-tooltip':
      'Локальная активность — это выполнение активности в том же процессе, что и Workflow, который её порождает.',
    nexus: 'Nexus',
    'nexus-tooltip':
      'Nexus связывает долговременные исполнения внутри и между пространствами имён.',
    signal: 'Сигнал',
    'signal-tooltip':
      'Сигналы — это асинхронные запросы записи. Они вызывают изменения в запущенном Workflow, но не ожидают ответа или ошибки.',
    timer: 'Таймер',
    'timer-tooltip':
      'Таймеры — это долговременные таймеры, настроенные на фиксированный период времени.',
    update: 'Обновление',
    'update-tooltip':
      'Обновления — это синхронные отслеживаемые запросы записи. Отправитель может ждать ответа или ошибки.',
    workflow: 'Workflow',
    'workflow-tooltip':
      'Задача Workflow — это задача, содержащая контекст, необходимый для прогресса выполнения Workflow.',
  },
  'attribute-group': {
    activity: 'Активность',
    parent: 'Родитель',
    'retry-policy': 'Политика повторов',
    schedule: 'Расписание',
    'search-attributes': 'Атрибуты поиска',
    summary: 'Сводка',
    'task-queue': 'Очередь задач',
    workflow: 'Workflow',
  },
  'custom-search-attributes': 'Пользовательские атрибуты поиска',
  'custom-search': 'пользовательский поиск',
  attribute: 'атрибут',
  'event-group': 'События, связанные с {{eventName}}',
  'error-event': 'Событие ошибки',
  'import-event-history': 'Импорт истории событий',
  'import-event-history-file-upload':
    'Выберите JSON-файл истории событий для загрузки',
  'event-history-view': 'Просмотр истории событий',
  'api-history-link': 'Просмотреть на Github',
  'history-expected-formats': 'Ожидаемые форматы JSON',
  'event-history-import-error': 'Не удалось создать историю событий из JSON',
  'event-history-load-error': 'Не удалось разобрать JSON',
  'event-classification-label': 'Классификация событий',
  'event-classification': {
    unspecified: 'Не указано',
    scheduled: 'Запланировано',
    open: 'Открыто',
    new: 'Новое',
    started: 'Начато',
    initiated: 'Инициировано',
    running: 'Выполняется',
    completed: 'Завершено',
    fired: 'Выполнено',
    cancelrequested: 'Запрошена отмена',
    timedout: 'Истекло время',
    signaled: 'Отправлен сигнал',
    canceled: 'Отменено',
    failed: 'Ошибка',
    terminated: 'Завершено принудительно',
    pending: 'В ожидании',
    retrying: 'Повтор',
  },
  'decode-event-history': 'Декодировать историю событий',
  encoded: 'Закодировано',
  decoded: 'Декодировано',
  'decoded-description':
    'Декодировано и закодировано в base64 сервером кодеков',
  readable: 'Читаемый формат',
  'readable-description':
    'Декодировано и декодировано из base64 сервером кодеков',
  'event-types': 'Типы событий',
  'decode-failed': 'Ошибка декодирования',
  'view-raw-history': 'Просмотреть необработанную историю',
} as const;
