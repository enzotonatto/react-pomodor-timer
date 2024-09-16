import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
      <FormContainer>
        <label htmlFor="">Vou trabalhar em</label>
        <TaskInput 
          id="task" 
          list="task-suggestions"
          placeholder="Dê um nome para seu projeto"
          disabled={activeCycle ? true : false}
          {...register("task")}
        />

        <datalist id="task-suggestions">
          <option value="Estudar para a prova" />
          <option value="Escrever um relatório" />
          <option value="Ler um capítulo do livro" />
        </datalist>

        <label htmlFor="">durante</label>
        <MinutesAmountInput 
          type="number" 
          id="minutesAmount" 
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={activeCycle ? true : false}
          {...register("minutesAmount", { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </FormContainer>
  )
} 