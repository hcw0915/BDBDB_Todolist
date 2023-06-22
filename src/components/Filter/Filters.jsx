import React, { useMemo } from 'react'
import { Group, ActionIcon, Tooltip } from '@mantine/core'
import { filterStyles, IconRotate } from '../modalStyles'

export const Filters = ({ filter, setFilter }) => {
  // console.log('filter', filterStyles)
  // const Component = filterStyles.find(ele => ele.type==='text').component
  // const filterComponent = useMemo((type) => {
  //   return filterStyles.find((ele) => ele.type === type).component
  // }, [])

  return (
    <Group position="right">
      <Tooltip label="Reset the fIlter" openDelay={700} withArrow>
        <ActionIcon size="md" variant="light" onClick={() => setFilter('none')}>
          <IconRotate size="1rem" />
        </ActionIcon>
      </Tooltip>
      {/* //! 還可以再改嗎? 先保留!! */}
      {filterStyles.map(({ type, component }) => {
        return (
          <Tooltip key={type} label={type} openDelay={700} withArrow>
            <ActionIcon
              size="md"
              variant={`${filter === type ? 'outline' : 'light'}`}
              onClick={() => {
                filter === type ? setFilter('none') : setFilter(type)
              }}
              w={30}
            >
              {component}
            </ActionIcon>
          </Tooltip>
        )
      })}
    </Group>
  )
}
