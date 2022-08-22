/* eslint-disable no-trailing-spaces */
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

/* eslint-disable react/react-in-jsx-scope */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa!'),
  minutesAmount: zod.number().min(5, 'O ciclo precisa ser de no mínimo 5 minutos.').max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home () {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData >({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  function handleCreatNewCycle (data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreatNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            type="text" 
            placeholder='Dê um nome para seu projeto' 
            id="task" 
            list="task-suggestions"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          ▶ Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
