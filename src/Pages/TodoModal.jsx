import React, { useMemo, useState } from 'react'
// Mantine UI
import { Modal, Group, Button, Box } from '@mantine/core'
import { Flex, Divider, SegmentedControl } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

// Components & Constants
import { Form } from '../components/Form'
import { Filters } from '../components/Filter/Filters'
import { TodoViewer } from '../components/View/TodoViewer'
import { viewStyles } from '../components/modalStyles'
import { useTodoListStore } from '../zustand/TodoStore'

export const TodoDashboard = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [viewToggle, setViewToggle] = useState('cards')
  const [filter, setFilter] = useState('none')
  const { todos } = useTodoListStore()

  let todosCopy = structuredClone(todos)

  const filterFunctions = {
    time: () => todosCopy.sort((a, b) => a.createAt - b.createAt),
    checkbox: () =>
      todosCopy.sort((a, b) => {
        if (a.completed && !b.completed) return 1
        if (!a.completed && b.completed) return -1
        return 0
      }),
    date: () => todosCopy.sort((a, b) => a.end - b.end),
    none: () => todos,
  }

  // const todosFiltered = useMemo(() => filterFunctions[filter](), [filter])
  const todosFiltered = filterFunctions[filter]()
  console.log(todosFiltered)

  return (
    <>
      <Modal opened={opened} onClose={close} title="New ToDo" centered>
        <Form close={close} type={'add'} />
      </Modal>
      {/* //! toolbar */}
      <Flex align="center" justify="space-between">
        <Button onClick={open} uppercase size="xs">
          Add Todo
        </Button>
        <SegmentedControl
          value={viewToggle}
          data={viewStyles}
          onChange={setViewToggle}
        />
        <Filters filter={filter} setFilter={setFilter} />
      </Flex>
      <Divider mb={5} />
      <Box style={{ overflow: 'auto' }}>
        <TodoViewer type={viewToggle} todosFiltered={todosFiltered} />
      </Box>
      {/* <Group position="center" my={10}></Group> */}
    </>
  )
}
