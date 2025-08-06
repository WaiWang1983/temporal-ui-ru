export const Namespace = 'data-encoder' as const;

export const Strings = {
  'codec-server': 'Codec сервер',
  'endpoint-title': 'Точка доступа Codec сервера для браузера',
  'endpoint-description':
    'Введите точку доступа Codec сервера для этого браузера. Она будет сохранена в вашем браузере и доступна только вам.',
  'endpoint-placeholder': 'Вставьте здесь вашу точку доступа',
  'pass-access-token-label': 'Передавать токен доступа пользователя',
  'include-cross-origin-credentials-label':
    'Включить кросс-доменные учетные данные',
  'include-cross-origin-credentials-warning':
    'Внимание: будут выполнены предварительные проверки, и при неправильной настройке это может привести к ошибке декодирования.',
  'port-title': 'Порт плагина tctl',
  'port-info':
    'Если оба параметра заданы, будет использоваться точка доступа Codec сервера.',
  'access-token-https-error':
    'Точка доступа должна начинаться с https:// при передаче токена доступа',
  'prefix-error': 'Точка доступа должна начинаться с http:// или https://',
  'codec-server-description-prefix': 'Сервер ',
  'codec-server-description-suffix':
    ' декодирует ваши данные. Точку доступа Codec сервера можно задать на уровне {{level}} или локально в вашем браузере.',
  'browser-override-description':
    'Использовать настройки моего браузера и игнорировать настройки уровня {{level}}.',
  'no-browser-override-description':
    'Использовать настройки уровня {{level}}, если они доступны.',
  'codec-server-configured': 'Codec сервер настроен',
  'codec-server-error': 'Не удалось подключиться к Codec серверу',
  'codec-server-success': 'Codec сервер успешно преобразовал содержимое',
  'configure-codec-server': 'Настроить Codec сервер',
  'encode-error': 'Codec сервер не смог выполнить кодирование',
} as const;
