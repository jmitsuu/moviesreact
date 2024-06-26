import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export function RadioVote() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
      </div>
    </RadioGroup>
  )
}
