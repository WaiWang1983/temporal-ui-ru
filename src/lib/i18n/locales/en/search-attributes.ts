export const Namespace = 'search-attributes' as const;

export const Strings = {
  // Заголовки компонентов и метки
  'column-attribute': 'Атрибут',
  'column-type': 'Тип',
  'attribute-label': 'Атрибут {{index}}',
  'type-label': 'Тип для атрибута {{index}}',
  'select-type-placeholder': 'Выберите тип',

  // Кнопки
  'add-attribute-button': 'Добавить новый пользовательский атрибут поиска',
  'save-button': 'Сохранить',
  'saving-button': 'Сохранение...',
  'cancel-button': 'Отмена',

  // Сообщения
  'validation-error-title': 'Ошибка валидации',
  'save-success': 'Атрибуты поиска успешно сохранены',
  'save-error': 'Не удалось сохранить атрибуты поиска',
  'save-error-generic': 'Произошла ошибка при сохранении атрибутов поиска',
  'load-error-title': 'Не удалось загрузить атрибуты поиска',
  'error-title': 'Ошибка',

  // Сообщения валидации
  'validation-name-required': 'Требуется имя атрибута',
  'validation-names-unique': 'Имена атрибутов должны быть уникальными',

  // Сообщения для разработчиков
  'crud-not-implemented':
    'Операции CRUD будут реализованы, когда команда SDK добавит конечные точки',

  // Метки типов
  'type-keyword': 'Ключевое слово',
  'type-text': 'Текст',
  'type-int': 'Целое число',
  'type-double': 'Дробное число',
  'type-bool': 'Булево значение',
  'type-datetime': 'Дата и время',
  'type-keywordlist': 'Список ключевых слов',

  // Заголовки историй (stories)
  'story-title': 'Пользовательские атрибуты поиска для {{namespace}}',
} as const;
