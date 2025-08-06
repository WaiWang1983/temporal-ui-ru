export const Namespace = 'workers' as const;

export const Strings = {
  workers: 'Рабочие',
  version: 'Версия',
  versioning: 'Версионирование',
  retirability: 'Возможность снятия с эксплуатации',
  buildId: 'ID сборки',
  'assignment-rules': 'Правила назначения',
  'redirect-rules': 'Правила перенаправления',
  default: 'По умолчанию',
  overall: 'Общее',
  'compatible-build-ids': 'Совместимые ID сборок',
  'version-sets': 'Наборы версий',
  'no-version-sets-found': 'Наборы версий не найдены',
  'no-assignment-rules-found': 'Правила назначения не найдены',
  'no-redirect-rules-found': 'Правила перенаправления не найдены',
  'show-inactive-assignment-rules': 'Показать неактивные правила назначения',
  'last-used-version': 'Последняя использованная версия',
  'next-version': 'Следующая версия',
  'ready-to-be-retired': 'Готова к снятию с эксплуатации',
  'max-version-sets-title': 'Достигнут лимит для совместимых наборов версий',
  'max-version-sets-description':
    'Вы можете увеличить количество совместимых наборов версий через динамическое свойство limit.versionCompatibleSetsPerQueue.',
  'viewing-pinned-build-ids':
    'Просмотр рабочих для закреплённого ID сборки. Перейдите на страницу Task Queue, чтобы увидеть всех рабочих.',
  'viewing-auto-upgrade-build-ids':
    'Просмотр рабочих для текущих и постепенно обновляемых ID сборок. Перейдите на страницу Task Queue, чтобы увидеть всех рабочих.',
} as const;
