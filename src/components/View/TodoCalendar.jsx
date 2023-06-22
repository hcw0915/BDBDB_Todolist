/**
 * @event handleUpdate
 * 需要調整，確認可觸發 log, 但無法正常觸發函數
 */

import React, { useMemo } from 'react'
import Fullcalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useTodoListStore } from '../../zustand/TodoStore'

export const TodoCalendar = ({ handleUpdate }) => {
  const { todos } = useTodoListStore()

  //* Date to ISOString => match the format of Calendar events'
  const todosDateTimeFormatted = useMemo(() => {
    const todosDeepClone = structuredClone(todos)
    return todosDeepClone.map((item) => {
      const deadline = new Date(item.end).toISOString()
      return { ...item, end: deadline, start: deadline }
    })
  }, [todos])

  return (
    <div>
      <Fullcalendar
        height={'70vh'}
        initialView="dayGridMonth"
        editable={true}
        eventBorderColor="#ff0"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={todosDateTimeFormatted}
        // eventClick={() => handleUpdate}
      />
    </div>
  )
}
