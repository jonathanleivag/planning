import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TTypeICon } from '../../components/CardComponent'
import { TName } from '../../components/ListComponent'

export interface IItem {
  id: string
  title: string
  description: string
  type: TTypeICon
  section: TName
}

export interface IElement {
  TODO: IItem[]
  DOING: IItem[]
  DONE: IItem[]
}

interface IMoveItem {
  item: IItem | undefined
  section: TName
}

const initialState: IElement = {
  TODO: [
    {
      id: '1',
      title: 'Server',
      description: 'Server description',
      type: 'server',
      section: 'TODO'
    },
    {
      id: '2',
      title: 'Database',
      description: 'Database description',
      type: 'db',
      section: 'TODO'
    },
    {
      id: '3',
      title: 'Web',
      description: 'Web description',
      type: 'web',
      section: 'TODO'
    },
    {
      id: '4',
      title: 'App',
      description: 'App description',
      type: 'app',
      section: 'TODO'
    },
    {
      id: '5',
      title: 'Other',
      description: 'Other description',
      type: 'other',
      section: 'TODO'
    }
  ],
  DOING: [],
  DONE: []
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    moveItem: (state, action: PayloadAction<IMoveItem>) => {
      state[action.payload.item!.section] = state[
        action.payload.item!.section
      ].filter(item => item.id !== action.payload.item!.id)

      action.payload.item!.section = action.payload.section
      state[action.payload.section].push(action.payload.item!)
    }
  }
})

export const { moveItem } = itemSlice.actions

export default itemSlice.reducer
