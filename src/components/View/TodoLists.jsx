/**
 * @summary
 * 這裡僅對於 sx 內的 styles 做集成，減少 cards shallow copy 對 memo 的影響
 * 但是對於程式碼的清晰度、可閱讀性較 cards 差。 => 可以後續選擇與取捨。
 * 且部分sx內的性質會與該 componets 所提供得 props衝突,像是 Button color 的問題(mantine樣式/字體)
 */

import React, { useMemo } from 'react'
import { Button, Rating, Text, Grid, CloseButton } from '@mantine/core'

export const TodoLists = ({
  item,
  idx,
  handleUpdate,
  handleFinish,
  handleRemove,
}) => {
  const { title, content, completed, categories, priorty, end, createAt } = item

  //* components sx integration.
  const gridStyles = useMemo(() => {
    return {
      rating: { marginRight: 20 },
      status: {
        background: completed ? '#f44848' : '#f9f900',
        color: completed ? '#FFF' : '#000',
        fontWeight: 600,
        borderRadius: '5px',
        marginTop: 3,
      },
      title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        fontWeight: 700,
        fontSize: 15,
      },
      content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        fontWeight: 700,
        fontSize: 15,
      },
      update: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        button: {
          variant: 'filled',
          radius: 'md',
          mr: 'md',
        },
      },
      finished: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        button: {
          variant: 'filled',
          radius: 'md',
        },
      },
    }
  }, [completed])

  return (
    <Grid
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[6],
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing.xs,
        paddingLeft: theme.spacing.lg,
        marginBottom: theme.spacing.sm,
        borderRadius: theme.radius.md,
        '&:hover': {
          backgroundColor: theme.colors.dark[5],
        },
      })}
    >
      {/* <Grid.Col span={1}> */}
      {/* </Grid.Col> */}
      <Text>{idx + 1}）</Text>
      <Grid.Col span={1} sx={gridStyles.rating}>
        <Rating value={priorty} fractions={2} readOnly />
      </Grid.Col>
      <Grid.Col span={1} sx={gridStyles.status}>
        <Text>{completed ? 'DONE' : 'UNDONE'}</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text sx={gridStyles.title}>{title}</Text>
      </Grid.Col>
      <Grid.Col span="auto">
        <Text sx={gridStyles.content}>{content}</Text>
      </Grid.Col>
      <Grid.Col span={1} sx={gridStyles.update}>
        <Button
          color="blue"
          onClick={handleUpdate}
          {...gridStyles.update.button}
        >
          Update
        </Button>
      </Grid.Col>
      <Grid.Col span={1} sx={gridStyles.finished}>
        <Button
          color={completed ? 'yellow' : 'green'}
          onClick={handleFinish}
          {...gridStyles.finished.button}
        >
          {completed ? 'Done Yet' : 'Finished'}
        </Button>
      </Grid.Col>
      <CloseButton size="sm" iconSize={50} onClick={handleRemove} />
    </Grid>
  )
}
