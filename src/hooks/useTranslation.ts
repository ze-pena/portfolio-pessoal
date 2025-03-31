// Typing
type TranslationKey = 'pt-BR' | 'en-US';

// Enums
enum TranslationEnum {
  'pt-BR',
  'en-US',
}

// Hook
export function useTranslation<T>(data: Array<T>, translationKey: TranslationKey) {
  return data[TranslationEnum[translationKey]];
}
