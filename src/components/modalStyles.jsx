import {
  IconRotate,
  IconLetterT,
  IconCheckbox,
  IconCalendarTime,
} from '@tabler/icons-react'

const viewStyles = [
  { label: 'Cards', value: 'cards' },
  { label: 'Lists', value: 'lists' },
  { label: 'Calendar', value: 'calendar' },
]

const filterStyles = [
  { type: 'time', component: <IconLetterT size="1rem" /> },
  { type: 'checkbox', component: <IconCheckbox size="1rem" /> },
  { type: 'date', component: <IconCalendarTime size="1rem" /> },
]

export { viewStyles, filterStyles, IconRotate }
