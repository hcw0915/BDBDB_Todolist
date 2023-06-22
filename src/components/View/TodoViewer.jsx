import React, { useState } from 'react'
import { Modal, Group, Button, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { TodoCards, TodoLists, TodoCalendar } from './index'
import { useTodoListStore } from '../../zustand/TodoStore'

import { Form } from '../Form'

const componentMapping = {
  cards: TodoCards,
  lists: TodoLists,
  calendar: TodoCalendar,
}

export const TodoViewer = ({ type, todosFiltered }) => {
  const { todos, update, remove, toggleStatus } = useTodoListStore()
  const [updateIndex, setUpdateIndex] = useState('')
  const [opened, { open, close }] = useDisclosure(false)

  // 其實可以考慮改成 handleAction(index, actionType)
  const handleUpdate = (index) => {
    const filteredIdx = getFilteredIdx(index)
    setUpdateIndex(filteredIdx)
    open()
  }
  const handleFinish = (index) => {
    const filteredIdx = getFilteredIdx(index)
    toggleStatus(filteredIdx)
  }
  const handleRemove = (index) => {
    const filteredIdx = getFilteredIdx(index)
    remove(filteredIdx)
  }

  function getFilteredIdx(originalIdx) {
    return todos.findIndex((ele) => ele.id === todosFiltered[originalIdx].id)
  }

  let todoContent = null
  const Component = componentMapping[type] || null
  if (type === 'calendar') todoContent = <Component />
  if (type === 'lists' || type === 'cards') {
    todoContent = todosFiltered.map((item, index) => {
      return (
        <Component
          key={index}
          item={item}
          idx={index}
          handleUpdate={() => handleUpdate(index)}
          handleFinish={() => handleFinish(index)}
          handleRemove={() => handleRemove(index)}
        />
      )
    })
  }

  return (
    <React.Fragment>
      <Modal opened={opened} onClose={close} title="Update ToDo" centered>
        <Form close={close} type={'update'} updateIndex={updateIndex} />
      </Modal>
      {todoContent}
    </React.Fragment>
  )
}
