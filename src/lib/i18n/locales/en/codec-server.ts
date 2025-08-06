export const Namespace = 'codec-server' as const;

export const Strings = {
  'info-message':
    'Пользователи могут использовать этот endpoint кодек-сервера на уровне Namespace или переопределить его в браузере другим endpoint.',
  'endpoint-description-prefix': 'Введите ',
  'endpoint-link-text': 'endpoint кодек-сервера',
  'endpoint-description-suffix':
    ' для декодирования данных пользователей, взаимодействующих с этим Namespace',
  'endpoint-label': 'Endpoint кодек-сервера',
  'endpoint-placeholder': 'https://your-codec-server.com/api/v1',
  'pass-access-token-label': 'Передавать Access Token пользователя',
  'pass-access-token-description':
    'Включать access token пользователя в запросы к кодек-серверу',
  'cross-origin-credentials-label': 'Включить кросс-доменные учетные данные',
  'cross-origin-credentials-description':
    'Включать учетные данные при выполнении кросс-доменных запросов к кодек-серверу',
  'custom-section-description':
    'Опционально настройте сообщение об ошибке и ссылку для перенаправления пользователей при сбое кодек-сервера.',
  'add-custom-button': 'Добавить пользовательское сообщение и ссылку',
  'custom-message-label': 'Пользовательское сообщение об ошибке',
  'custom-message-placeholder':
    'Введите пользовательское сообщение об ошибке...',
  'custom-link-label': 'Пользовательская ссылка ошибки',
  'custom-link-placeholder': 'https://your-help-docs.com/codec-errors',
  'custom-link-description':
    'Используйте только доверенные ссылки. Этот URL будет виден конечным пользователям и должен вести на защищённый ресурс на случай сбоя кодек-сервера.',
  'remove-custom-button': 'Удалить пользовательское сообщение и ссылку',
  'validation-error-title': 'Ошибка проверки',
  'validation-endpoint-required': 'Требуется endpoint',
  'validation-endpoint-url': 'Пожалуйста, введите корректный URL',
  'validation-custom-link-url': 'Пожалуйста, введите корректный URL',
  'save-button': 'Сохранить',
  'saving-button': 'Сохранение...',
  'cancel-button': 'Отмена',
  'save-success': 'Конфигурация кодек-сервера успешно сохранена',
  'load-error-title': 'Не удалось загрузить настройки кодек-сервера',
} as const;
