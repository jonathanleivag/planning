import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TName, TTypeICon } from '../../components'

export interface IItem {
  id?: string
  title: string
  description: string
  content?: string
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
  TODO: [],
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
      state[action.payload.section] = [
        action.payload.item!,
        ...state[action.payload.section]
      ]
    },
    addTarea: (state, action: PayloadAction<IItem>) => {
      state[action.payload.section] = [
        action.payload,
        ...state[action.payload.section]
      ]
    }
  }
})

export const { moveItem, addTarea } = itemSlice.actions

export default itemSlice.reducer
