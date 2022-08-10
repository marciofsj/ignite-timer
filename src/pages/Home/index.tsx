/* eslint-disable no-trailing-spaces */
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

/* eslint-disable react/react-in-jsx-scope */
export function Home () {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            type="text" 
            placeholder='Dê um nome para seu projeto' 
            id="task" 
            list="task-suggestions"
          />

          <datalist id='task-suggestions'>
            <option value="projeto 1"/>
            <option value="projeto 2"/>
            <option value="projeto 3"/>
          </datalist>

          <label htmlFor="minutesAmountk">durante</label>
          <MinutesAmountInput 
            type="number" 
            placeholder='00' 
            id="minutesAmount" 
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          ▶ Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
