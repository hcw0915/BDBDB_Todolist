export const initialValues = {
  title: '',
  content: '',
  categories: [],
  priorty: 0,
  complete: false,
  end: null,
  createAt: null,
}

export const TODOS_DATA_FORMAT = [
  { label: 'title', type: 'text', placeholder: 'Todo Topic' },
  { label: 'content', type: 'text', placeholder: 'Anything!' },
  { label: 'categories', type: 'select', placeholder: '' },
  { label: 'priorty', type: 'rating', placeholder: '' },
  { label: 'completed', type: 'checkbox', placeholder: '' },
  { label: 'end', type: 'date', placeholder: '' },
  { label: 'createAt', type: 'date', placeholder: '' },
]

export const categories = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
]
