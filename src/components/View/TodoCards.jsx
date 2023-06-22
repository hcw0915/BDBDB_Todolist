/**
 * @summary
 * 整合各 components 的 sytles, 並利用 spread 的方式試寫。
 * 實質上 在每個 components 中, 執行 shallow copy, 對後續如果要整個 memo 較不利
 * 因為 每次 componets 執行都會有 新的 {...} 被 shallow copy.
 * => 留存在 components 裡面主要是 non-outward, ex. events, data...
 */
import React, { useMemo } from 'react'
import { Text, Badge, Button, Group, Blockquote } from '@mantine/core'
import { Paper, Rating, CloseButton, Flex } from '@mantine/core'

export const TodoCards = ({
  item,
  handleFinish,
  handleUpdate,
  handleRemove,
}) => {
  const { title, content, completed, categories, priorty, end, createAt } = item

  //* remaining relative days
  const relativeDeadline = useMemo(() => {
    const formatter = new Intl.RelativeTimeFormat('zh-TW', { numeric: 'auto' })
    const relativeTime = Date.now() - new Date(end).getTime()
    const daysDifference = Math.floor(relativeTime / (1000 * 60 * 60 * 24))
    return formatter.format(-daysDifference, 'day')
  }, [end])

  //* components style integration.
  const cardsStyle = useMemo(() => {
    return {
      paper: {
        p: 10,
        pr: 15,
        mb: 5,
        radius: 'md',
        bg: completed ? '#4e4e4e' : '#252525',
      },
      blockquote: { p: 0, pr: 1 },
      title: {
        group: { mt: 'md', mb: 'xs' },
        text: {
          size: 25,
          weight: 700,
          sx: {
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? '#565656' : 'inherit',
          },
        },
      },
      closeButton: { size: 'sm', iconSize: 50 },
      rating: {
        flex: {
          gap: 'md',
          justify: 'space-between',
          align: 'center',
          direction: 'row',
          wrap: 'wrap',
        },
        group: { position: 'right' },
      },
      content: { size: 'md', color: 'dimmed' },
      buttons: {
        group: { position: 'right', my: 2 },
        update: { variant: 'filled', color: 'blue', mt: 'md', radius: 'md' },
        finish: {
          variant: 'filled',
          color: completed ? 'yellow' : 'green',
          mt: 'md',
          radius: 'md',
        },
      },
    }
  }, [completed])

  //* badge mapping before render.
  const badges = categories.map((category, index) => {
    return (
      <Badge key={index} color="pink" variant="filled">
        {category}
      </Badge>
    )
  })

  return (
    <Paper {...cardsStyle.paper}>
      <Blockquote {...cardsStyle.blockquote}>
        <Group {...cardsStyle.title.group} position="apart">
          <Text {...cardsStyle.title.text}>{title}</Text>
          <CloseButton {...cardsStyle.closeButton} onClick={handleRemove} />
        </Group>
        <Flex {...cardsStyle.rating.flex}>
          <Rating value={priorty} fractions={2} />
          <Group {...cardsStyle.rating.group}>{badges}</Group>
        </Flex>
        <hr />
        <Text {...cardsStyle.content}>
          {content} - {relativeDeadline}
        </Text>
      </Blockquote>
      <Group {...cardsStyle.buttons.group}>
        <Button {...cardsStyle.buttons.update} onClick={handleUpdate}>
          Update
        </Button>
        <Button {...cardsStyle.buttons.finish} onClick={handleFinish}>
          {completed ? 'Done Yet' : ' Finished '}
        </Button>
      </Group>
    </Paper>
  )
}
