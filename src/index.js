import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const handleRandom = () => {
    setSelected(Math.floor((Math.random() * 6)))
  }
  const handleIterate = () => {
    if (selected < 5) {
    setSelected(selected+1);}
    else {setSelected(0);}
  }

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const handleVote = () => {
    let pointsCopy=[...points]
    pointsCopy[selected]+=1
    setPoints(pointsCopy);
    console.log(points)
  }

  const indexOfMaxValue = points.indexOf(Math.max(...points))



  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick = {handleIterate} text = 'Next Anecdote'/>
      <Button onClick = {handleVote} text = 'Vote'/>
      <p>Anecdote # {selected}</p>
      <p>Votes {points.join(' ')}</p>
      <p>Anecdote # {indexOfMaxValue}</p>
      <p>Anecdote # {anecdotes[indexOfMaxValue]}</p>


    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)