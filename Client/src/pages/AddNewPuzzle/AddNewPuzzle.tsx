import React from 'react'
import PageHeader from '../PageHeader'
import AddPuzzleComp from '../../components/addPuzzle/AddPuzzleComp'

export default function AddNewPuzzle() {
  return (
    <div>
      <PageHeader title='new puzzle' subTitle='add new puzzle'/>
      <AddPuzzleComp/>
    </div>
  )
}
