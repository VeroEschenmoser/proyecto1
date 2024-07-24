import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
      <>
      <TwiterFollowCard userName="@VeroEschenmoser" name="Vero Eschenmoser"/>
      <TwiterFollowCard userName="@holamundo" name="hola mundo"/>
      <TwiterFollowCard userName="@midudev" name="Miguel Angel Duran"/> 
      </>
    )
}