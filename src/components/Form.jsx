import { useForm, isNotEmpty } from '@mantine/form'
import { DateInput } from '@mantine/dates'
import { Button, Group, TextInput, NumberInput } from '@mantine/core'
import { Box, Checkbox, MultiSelect, Rating } from '@mantine/core'

// State Managments
import { useTodoListStore } from '../zustand/TodoStore'

// Constants
import {
  initialValues,
  categories,
  TODOS_DATA_FORMAT,
} from '../Constant/Constant'

const componentMapping = {
  text: TextInput,
  checkbox: Checkbox,
  date: DateInput,
  number: NumberInput,
  select: MultiSelect,
  rating: Rating,
}

export const Form = ({ close, type, updateIndex }) => {
  const { todos, add, update } = useTodoListStore()
  const todoForm = useForm({
    initialValues: todos[updateIndex] || initialValues,
    validate: {
      title: isNotEmpty("Title shouldn't empty."),
      content: isNotEmpty('Name must be 2-10 characters long'),
    },
  })

  const handleSubmit = () => {
    type === 'add' && add(todoForm.values)
    type === 'update' && update(todoForm.values, updateIndex)
    close()
  }

  console.log('type', todoForm)
  return (
    <Box component="form" maw={400} mx="auto">
      {TODOS_DATA_FORMAT.map(({ label, type, placeholder }, index) => {
        const Component = componentMapping[type]
        const inputStyles = {
          label: label,
          placeholder: placeholder,
          required: true,
          mt: 'md',
        }

        return (
          <Component
            key={label}
            {...inputStyles}
            {...todoForm.getInputProps(`${label}`)}
            required
            // for different condition's special props
            defaultChecked={todoForm.getInputProps('completed').value}
            data={type === 'select' ? categories : undefined}
            fractions={type === 'rating' ? 2 : undefined}
          />
        )
      })}

      <Group position="right" mt="md">
        <Button type="submit" onClick={handleSubmit}>
          {type}
        </Button>
      </Group>
    </Box>
  )
}
