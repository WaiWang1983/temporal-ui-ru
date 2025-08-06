export const Namespace = 'activities' as const;

export const Strings = {
  'pause-modal-confirmation': 'Поставить на паузу активность {{activityId}}',
  'pause-modal-description': 'Приостановить выполнение этой активности.',
  'unpause-modal-confirmation': 'Снять паузу с активности {{activityId}}',
  'unpause-modal-description': 'Возобновить выполнение этой активности.',
  'paused-since': 'Пауза с',
  'paused-by': 'Поставлено на паузу пользователем',
  'pause-reason': 'Причина паузы',
  'reset-modal-confirmation': 'Сбросить активность {{activityId}}',
  'reset-modal-description':
    'Сбросить выполнение этой активности до первоначальной попытки.',
  'apply-to-all-activity-types':
    'Применить изменения ко всем запускам {{type}}',
  'pause-all-activity-types': 'Поставить на паузу все запуски {{type}}',
  'unpause-all-activity-types': 'Снять паузу со всех запусков {{type}}',
  'reset-heartbeat-details': 'Сбросить детали heartbeat (необязательно)',
  'reset-success': 'Активность {{activityId}} успешно сброшена.',
} as const;
